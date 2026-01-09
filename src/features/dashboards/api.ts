import { DashboardData, Project, Task } from "./type";

const  BASE_URL = "http://localhost:3001";

const getDashboardData = async (): Promise<DashboardData> => {
    const [projectsRes, tasksRes] = await Promise.all([
        fetch(`${BASE_URL}/projects`),
        fetch(`${BASE_URL}/tasks`)
    ])

    if(!projectsRes.ok || !tasksRes.ok)
        throw new Error("Failed to fetch dashboard data from endpoints");

    const projects: Project[] = await projectsRes.json();
    const tasks: Task[] = await tasksRes.json();
    return { projects, tasks };
}

export default getDashboardData;