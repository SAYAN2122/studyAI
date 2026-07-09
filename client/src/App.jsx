import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Dashboard from "./pages/Dashboard";
import AIChat from "./pages/AIChat";
import PDFPage from "./pages/PDFPage";
import MyStudySessions from "./pages/MyStudySessions";
import StudySessionDetails from "./pages/StudySessionDetails";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/register"
          element={<Navigate to="/signup" replace />}
        />

        {/* Protected Routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chat"
          element={
            <ProtectedRoute>
              <AIChat />
            </ProtectedRoute>
          }
        />

        <Route
          path="/pdf"
          element={
            <ProtectedRoute>
              <PDFPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/study-sessions"
          element={
            <ProtectedRoute>
              <MyStudySessions />
            </ProtectedRoute>
          }
        />

        <Route
          path="/study-session/:id"
          element={
            <ProtectedRoute>
              <StudySessionDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;