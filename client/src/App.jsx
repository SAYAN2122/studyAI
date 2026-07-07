import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
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
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;