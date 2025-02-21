export interface Task {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
}

export interface Event {
  id: number;
  title: string;
  start_time: string;
  end_time: string | null;
  status: 'pending' | 'in-progress' | 'completed';
  created_at: string;
}

export interface FamilyActivity {
  id: number;
  user: string;
  action: string;
  time: string;
  created_at: string;
}

export interface TaskCount {
  count: number;
} 