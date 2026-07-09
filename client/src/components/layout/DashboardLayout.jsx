import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DashboardFooter from "./DashboardFooter";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-slate-800">

          <button
            onClick={() => setSidebarOpen(true)}
            className="text-2xl"
          >
            <FiMenu />
          </button>

          <h1 className="text-xl font-bold">
            StudyAI
          </h1>

        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>

        {/* Dashboard Footer */}
        <DashboardFooter />

      </div>

    </div>
  );
};

export default DashboardLayout;