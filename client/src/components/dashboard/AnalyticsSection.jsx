import StatsCards from "./StatsCards";
import StudyChart from "./StudyChart";
import StudyProgress from "./StudyProgress";
import StudyStreak from "./StudyStreak";
import Achievements from "./Achievements";
import StatsCards from "./StatsCards"; 
import StudyChart from "./StudyChart";
import StudyProgress from "./StudyProgress";
import Achievements from "./Achievements"; 

function AnalyticsSection() {
  return (
    <section className="space-y-8">

      {/* Top Stats */}
      <StatsCards />

      {/* Charts + Progress */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

        {/* Weekly Chart */}
        <div className="xl:col-span-2">
          <StudyChart />
        </div>

        {/* Progress */}
        <StudyProgress />

      </div>

      {/* Streak + Achievements */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <StudyStreak />

        <Achievements />

      </div>

    </section>
  );
}

export default AnalyticsSection;