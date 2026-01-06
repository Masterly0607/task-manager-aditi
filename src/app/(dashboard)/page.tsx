import RecentTasks from '@/components/dashboards/recent-task'
import DashboardPage from '@/components/dashboards/visual-card'

const Dashboard = () => {
    return (
        <div className='p-6 space-y-6'>
            <DashboardPage />
            <RecentTasks />
        </div>
    )
}

export default Dashboard