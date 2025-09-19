// User Types
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: UserRole;
  department?: string;
  avatar?: string;
  initials: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'Administrator' | 'Leader' | 'Developer' | 'Tester';

// Project Types
export interface Project {
  id: string;
  name: string;
  code: string;
  description: string;
  leader: User;
  team: User[];
  status: ProjectStatus;
  priority: Priority;
  startDate: Date;
  dueDate: Date;
  progress: number;
  tasksCompleted: number;
  tasksRemaining: number;
  icon?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProjectStatus = 'Planned' | 'Active' | 'On Hold' | 'Completed' | 'Cancelled';

// Task Types
export interface Task {
  id: string;
  title: string;
  description: string;
  project: Project;
  assignedTo: User;
  status: TaskStatus;
  priority: Priority;
  startDate: Date;
  dueDate: Date;
  estimatedHours?: number;
  actualHours?: number;
  progress: number;
  createdAt: Date;
  updatedAt: Date;
}

export type TaskStatus = 'To Do' | 'In Progress' | 'In Review' | 'Completed' | 'Cancelled';

// Bug Types
export interface Bug {
  id: string;
  title: string;
  description: string;
  project: Project;
  reportedBy: User;
  assignedTo: User;
  status: BugStatus;
  priority: Priority;
  environment: string;
  reportedAt: Date;
  dueDate: Date;
  progress: number;
  comments: BugComment[];
  createdAt: Date;
  updatedAt: Date;
}

export type BugStatus = 'Pending' | 'In Progress' | 'Resolved' | 'Closed';


export interface BugComment {
  id: string;
  content: string;
  author: User;
  createdAt: Date;
}

// Team Types
export interface Team {
  id: string;
  name: string;
  leader: User;
  members: User[];
  project: Project;
  createdAt: Date;
  updatedAt: Date;
}

// Dashboard Types
export interface DashboardStats {
  activeProjects: number;
  totalTasks: number;
  pendingTasks: number;
  completedTasks: number;
  overdueTasks: number;
  members: number;
  bugs: number;
  tested: number;
  inProgress: number;
}

// Chart Data Types
export interface ChartData {
  name: string;
  value: number;
  color?: string;
}

export interface LineChartData {
  name: string;
  value: number;
  date: string;
}

// Common Types
export type Priority = 'Low' | 'Medium' | 'High' | 'Urgent';

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Form Types
export interface LoginForm {
  username: string;
  password: string;
}

export interface ProjectForm {
  name: string;
  code: string;
  description: string;
  leaderId: string;
  status: ProjectStatus;
  startDate: string;
  dueDate: string;
  teamMemberIds: string[];
}

export interface TaskForm {
  title: string;
  description: string;
  projectId: string;
  assignedToId: string;
  priority: Priority;
  status: TaskStatus;
  startDate: string;
  dueDate: string;
  estimatedHours?: number;
}

export interface UserForm {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  role: UserRole;
  department?: string;
  password: string;
  startDate: string;
}

export interface BugForm {
  title: string;
  description: string;
  projectId: string;
  assignedToId: string;
  priority: Priority;
  environment: string;
  dueDate: string;
}

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
  isActive: boolean;
  children?: NavItem[];
}
