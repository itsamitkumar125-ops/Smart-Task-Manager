export type TaskStatus = 'pending' | 'in-progress' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  tags: string[];
  dueDate: string | null;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    user: User;
  };
}

export interface TasksResponse {
  success: boolean;
  data: {
    tasks: Task[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      totalPages: number;
    };
  };
}

export interface TaskResponse {
  success: boolean;
  data: { task: Task };
}

export interface AnalyticsData {
  totalTasks: number;
  completionRate: number;
  overdueCount: number;
  statusBreakdown: {
    pending: number;
    'in-progress': number;
    completed: number;
  };
  priorityBreakdown: {
    low: number;
    medium: number;
    high: number;
  };
  timeline: { date: string; count: number }[];
}

export interface AnalyticsResponse {
  success: boolean;
  data: AnalyticsData;
}

export interface CreateTaskInput {
  title: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  tags?: string[];
  dueDate?: string | null;
}

export interface UpdateTaskInput extends Partial<CreateTaskInput> {}

export interface ApiError {
  success: false;
  message: string;
  errors?: { field: string; message: string }[];
}
