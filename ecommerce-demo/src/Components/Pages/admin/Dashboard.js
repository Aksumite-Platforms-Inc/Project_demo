import ChartOne from "./Charts/ChartOne";
import WelcomeBanner from "./WelcomeBanner";
import DashboardCard13 from "./dashboard/DashboardCard13";

function Dashboard() {
  return (
    <main>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <WelcomeBanner />
        <ChartOne />
        <DashboardCard13 />
      </div>
    </main>
  );
}

export default Dashboard;
