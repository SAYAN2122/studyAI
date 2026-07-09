import express from "express";
import passport from "passport";
import generateToken from "../utils/generateToken.js";

const router = express.Router();

/*
====================================
Google Login
====================================
*/

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

/*
====================================
Google Callback
====================================
*/

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.FRONTEND_URL}/login`,
    session: false,
  }),
  async (req, res) => {
    try {
      const token = generateToken(req.user._id);

      res.redirect(
        `${process.env.FRONTEND_URL}/oauth-success?token=${token}`
      );
    } catch (err) {
      res.redirect(`${process.env.FRONTEND_URL}/login`);
    }
  }
);

/*
====================================
GitHub Login
====================================
*/

router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["user:email"],
  })
);

/*
====================================
GitHub Callback
====================================
*/

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: `${process.env.FRONTEND_URL}/login`,
    session: false,
  }),
  async (req, res) => {
    try {
      const token = generateToken(req.user._id);

      res.redirect(
        `${process.env.FRONTEND_URL}/oauth-success?token=${token}`
      );
    } catch (err) {
      res.redirect(`${process.env.FRONTEND_URL}/login`);
    }
  }
);

export default router;