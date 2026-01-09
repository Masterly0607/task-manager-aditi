"use client";

import RecentTasks from "@/components/dashboards/recent-task";
import DashboardPage from "@/components/dashboards/visual-card";

import { useDashboardStats, useRecentTask } from "@/features/dashboards/hook";
import { Loader } from "@/components/common/loader";

const Dashboard = () => {
  const statsQuery = useDashboardStats();
  const recentQuery = useRecentTask();

  const isLoading = statsQuery.isLoading || recentQuery.isLoading;
  const isError = statsQuery.isError || recentQuery.isError;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader label="Loading dashboard..." />
      </div>
    );
  }

  if (isError) {
    return <div className="p-4 text-red-500">Error loading dashboard.</div>;
  }

  return (
    <div className="px-6 pb-6 space-y-6">
      {/* pass data so children don't fetch / don't load */}
      <DashboardPage stats={statsQuery.data} />
      <RecentTasks tasks={recentQuery.data} />
    </div>
  );
};

export default Dashboard;
