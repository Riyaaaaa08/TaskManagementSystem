import type {
    User,
    Project,
    Task,
    Bug,
    Team,
    DashboardStats,
    ChartData,
    ApiResponse,
    PaginatedResponse,
    LoginForm,
    ProjectForm,
    TaskForm,
    UserForm,
    BugForm
} from '../types';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://task-management-system-mexs.onrender.com/api';
const API_KEY = import.meta.env.VITE_API_KEY || ''; // Start without API key for testing

class ApiService {
  private baseURL: string;
  private apiKey: string;

  constructor() {
    this.baseURL = API_BASE_URL;
    this.apiKey = API_KEY;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    // Get token from localStorage for authenticated requests
    const token = localStorage.getItem('token');
    
    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...(this.apiKey && this.apiKey !== 'YOUR_API_KEY_HERE' && this.apiKey !== '' && { 'X-API-Key': this.apiKey }),
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = 'API request failed';
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorData.error || errorMessage;
        } catch {
          errorMessage = errorText || errorMessage;
        }
        throw new Error(errorMessage);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Authentication
  async login(credentials: LoginForm): Promise<ApiResponse<{ user: User; token: string }>> {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async logout(): Promise<ApiResponse<void>> {
    return this.request('/auth/logout', {
      method: 'POST',
    });
  }

  // Users
  async getUsers(page = 1, limit = 10): Promise<ApiResponse<PaginatedResponse<User>>> {
    return this.request(`/users?page=${page}&limit=${limit}`);
  }

  async getUser(id: string): Promise<ApiResponse<User>> {
    return this.request(`/users/${id}`);
  }

  async createUser(userData: UserForm): Promise<ApiResponse<User>> {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async updateUser(id: string, userData: Partial<UserForm>): Promise<ApiResponse<User>> {
    return this.request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
  }

  async deleteUser(id: string): Promise<ApiResponse<void>> {
    return this.request(`/users/${id}`, {
      method: 'DELETE',
    });
  }

  // Projects
  async getProjects(page = 1, limit = 10): Promise<ApiResponse<PaginatedResponse<Project>>> {
    return this.request(`/projects?page=${page}&limit=${limit}`);
  }

  async getProject(id: string): Promise<ApiResponse<Project>> {
    return this.request(`/projects/${id}`);
  }

  async createProject(projectData: ProjectForm): Promise<ApiResponse<Project>> {
    return this.request('/projects', {
      method: 'POST',
      body: JSON.stringify(projectData),
    });
  }

  async updateProject(id: string, projectData: Partial<ProjectForm>): Promise<ApiResponse<Project>> {
    return this.request(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(projectData),
    });
  }

  async deleteProject(id: string): Promise<ApiResponse<void>> {
    return this.request(`/projects/${id}`, {
      method: 'DELETE',
    });
  }

  // Tasks
  async getTasks(page = 1, limit = 10, projectId?: string): Promise<ApiResponse<PaginatedResponse<Task>>> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(projectId && { projectId }),
    });
    return this.request(`/tasks?${params}`);
  }

  async getTask(id: string): Promise<ApiResponse<Task>> {
    return this.request(`/tasks/${id}`);
  }

  async createTask(taskData: TaskForm): Promise<ApiResponse<Task>> {
    return this.request('/tasks', {
      method: 'POST',
      body: JSON.stringify(taskData),
    });
  }

  async updateTask(id: string, taskData: Partial<TaskForm>): Promise<ApiResponse<Task>> {
    return this.request(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(taskData),
    });
  }

  async deleteTask(id: string): Promise<ApiResponse<void>> {
    return this.request(`/tasks/${id}`, {
      method: 'DELETE',
    });
  }

  // Bugs
  async getBugs(page = 1, limit = 10, status?: string): Promise<ApiResponse<PaginatedResponse<Bug>>> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(status && { status }),
    });
    return this.request(`/bugs?${params}`);
  }

  async getBug(id: string): Promise<ApiResponse<Bug>> {
    return this.request(`/bugs/${id}`);
  }

  async createBug(bugData: BugForm): Promise<ApiResponse<Bug>> {
    return this.request('/bugs', {
      method: 'POST',
      body: JSON.stringify(bugData),
    });
  }

  async updateBug(id: string, bugData: Partial<BugForm>): Promise<ApiResponse<Bug>> {
    return this.request(`/bugs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(bugData),
    });
  }

  async deleteBug(id: string): Promise<ApiResponse<void>> {
    return this.request(`/bugs/${id}`, {
      method: 'DELETE',
    });
  }

  // Teams
  async getTeams(page = 1, limit = 10): Promise<ApiResponse<PaginatedResponse<Team>>> {
    return this.request(`/teams?page=${page}&limit=${limit}`);
  }

  async getTeam(id: string): Promise<ApiResponse<Team>> {
    return this.request(`/teams/${id}`);
  }

  async createTeam(teamData: { name: string; leaderId: string; projectId: string; memberIds: string[] }): Promise<ApiResponse<Team>> {
    return this.request('/teams', {
      method: 'POST',
      body: JSON.stringify(teamData),
    });
  }

  // Dashboard
  async getDashboardStats(): Promise<ApiResponse<DashboardStats>> {
    return this.request('/dashboard/stats');
  }

  async getProjectChartData(): Promise<ApiResponse<ChartData[]>> {
    return this.request('/dashboard/project-chart');
  }

  async getProgressChartData(): Promise<ApiResponse<ChartData[]>> {
    return this.request('/dashboard/progress-chart');
  }

  // Reports
  async getReports(): Promise<ApiResponse<any>> {
    return this.request('/reports');
  }
}

export const apiService = new ApiService();
export default apiService;
