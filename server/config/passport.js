import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as GitHubStrategy } from "passport-github2";
import User from "../models/user.js";

// =====================================
// Serialize User
// =====================================
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// =====================================
// Deserialize User
// =====================================
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// =====================================
// Google OAuth
// =====================================
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;

        let user = await User.findOne({
          $or: [
            { googleId: profile.id },
            { email },
          ],
        });

        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email,
            googleId: profile.id,
            provider: "google",
            avatar: profile.photos?.[0]?.value || "",
          });
        } else {
          user.googleId = profile.id;
          user.provider = "google";

          if (profile.photos?.length) {
            user.avatar = profile.photos[0].value;
          }

          await user.save();
        }

        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

// =====================================
// GitHub OAuth
// =====================================
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      scope: ["user:email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const email =
          profile.emails?.[0]?.value ||
          `${profile.username}@github.local`;

        let user = await User.findOne({
          $or: [
            { githubId: profile.id },
            { email },
          ],
        });

        if (!user) {
          user = await User.create({
            name: profile.displayName || profile.username,
            email,
            githubId: profile.id,
            provider: "github",
            avatar: profile.photos?.[0]?.value || "",
          });
        } else {
          user.githubId = profile.id;
          user.provider = "github";

          if (profile.photos?.length) {
            user.avatar = profile.photos[0].value;
          }

          await user.save();
        }

        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

export default passport;