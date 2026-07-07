import DashboardLayout from "../components/layout/DashboardLayout";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import ContinueLearningCard from "../components/dashboard/ContinueLearningCard";
import StatsGrid from "../components/dashboard/StatsGrid";
import StudyProgressChart from "../components/dashboard/StudyProgressChart";
import QuickActions from "../components/dashboard/QuickActions";
import UploadCard from "../components/dashboard/UploadCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import TodayGoals from "../components/dashboard/TodayGoals";

function Dashboard() {
  return (
    <DashboardLayout>

      {/* Header */}
      <DashboardHeader />

      <div className="mt-6 md:mt-8 space-y-6 md:space-y-8">

        {/* Welcome */}
        <WelcomeCard />

        {/* Continue Learning */}
        <ContinueLearningCard />

        {/* Statistics */}
        <StatsGrid />

        {/* Study Progress */}
        <StudyProgressChart />

        {/* Quick Actions */}
        <QuickActions />

        {/* Upload + Goals */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <div className="xl:col-span-2">
            <UploadCard />
          </div>

          <div className="xl:col-span-1">
            <TodayGoals />
          </div>

        </div>

        {/* Recent Activity */}
        <RecentActivity />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;