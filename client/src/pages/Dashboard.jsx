import DashboardLayout from "../components/layout/DashboardLayout";
import RecentStudySessions from "../components/dashboard/RecentStudySessions";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import ContinueLearningCard from "../components/dashboard/ContinueLearningCard"
import QuickActions from "../components/dashboard/QuickActions";
import UploadCard from "../components/dashboard/UploadCard";
import RecentActivity from "../components/dashboard/RecentActivity";
import StatsGrid from "../components/dashboard/StatsGrid";
import TodayGoals from "../components/dashboard/TodayGoals";

function Dashboard() {
  return (
    <DashboardLayout>

      {/* Header */}
      <DashboardHeader />

      <div className="mt-6 md:mt-8 space-y-8">

        {/* Welcome */}
        <WelcomeCard />
<StatsGrid />
        {/* Continue Learning */}
        <ContinueLearningCard />

        {/* Quick Actions */}
        <QuickActions />
<RecentStudySessions />
        {/* Upload + Goals */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          <div className="xl:col-span-2">
            <UploadCard />
          </div>

          <div className="xl:col-span-1">
            <TodayGoals />
          </div>

        </div>


      </div>

    </DashboardLayout>
  );
}

export default Dashboard;