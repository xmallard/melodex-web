export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Collaborator extends User {
  role: 'owner' | 'editor' | 'viewer';
  permissions: string[];
}

export interface Song {
  id: string;
  title: string;
  bpm?: number;
  genre?: string;
  duration?: string;
  status: 'draft' | 'recording' | 'mixing' | 'mastering' | 'complete';
  lyrics?: string;
  metadata: {
    key?: string;
    tempo?: string;
    mood?: string;
  };
  collaborators: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  status: 'planning' | 'active' | 'mixing' | 'mastering' | 'complete';
  progress: number;
  createdAt: string;
  updatedAt: string;
  songs: Song[];
  collaborators: Collaborator[];
  milestones: Milestone[];
  pendingTasks: Task[];
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  completedAt?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  assignedTo?: string;
  dueDate?: string;
  completed: boolean;
}

export interface Document {
  id: string;
  title: string;
  type: 'split-sheet' | 'royalty-report' | 'contract' | 'other';
  projectId: string;
  createdAt: string;
  status: 'draft' | 'pending' | 'approved';
}

// Mock data
export const mockUser: User = {
  id: '1',
  name: 'Alex Producer',
  email: 'alex@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex'
};

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Summer Vibes EP',
    description: 'A collection of upbeat summer tracks',
    status: 'active',
    progress: 65,
    createdAt: '2024-06-01',
    updatedAt: '2024-07-05',
    songs: [
      {
        id: '1',
        title: 'Beach Dreams',
        bpm: 120,
        genre: 'Pop',
        duration: '3:24',
        status: 'mixing',
        lyrics: 'Walking on the beach, feeling so free...',
        metadata: {
          key: 'C Major',
          tempo: 'Medium',
          mood: 'Happy'
        },
        collaborators: ['1', '2'],
        createdAt: '2024-06-05',
        updatedAt: '2024-07-01'
      },
      {
        id: '2',
        title: 'Sunset Boulevard',
        bpm: 110,
        genre: 'Indie Pop',
        duration: '4:12',
        status: 'recording',
        metadata: {
          key: 'G Major',
          tempo: 'Slow',
          mood: 'Dreamy'
        },
        collaborators: ['1', '3'],
        createdAt: '2024-06-10',
        updatedAt: '2024-06-28'
      }
    ],
    collaborators: [
      {
        id: '1',
        name: 'Alex Producer',
        email: 'alex@example.com',
        role: 'owner',
        permissions: ['edit', 'delete', 'invite']
      },
      {
        id: '2',
        name: 'Maya Songwriter',
        email: 'maya@example.com',
        role: 'editor',
        permissions: ['edit']
      },
      {
        id: '3',
        name: 'Jake Vocalist',
        email: 'jake@example.com',
        role: 'editor',
        permissions: ['edit']
      }
    ],
    milestones: [
      {
        id: '1',
        title: 'Complete all recordings',
        description: 'Finish recording all vocal and instrumental tracks',
        dueDate: '2024-07-15',
        completed: false
      },
      {
        id: '2',
        title: 'Final mix approval',
        description: 'Get approval from all collaborators on final mix',
        dueDate: '2024-07-30',
        completed: false
      }
    ],
    pendingTasks: [
      {
        id: '1',
        title: 'Record lead vocals for Beach Dreams',
        description: 'Complete the main vocal recording session',
        priority: 'high',
        assignedTo: '3',
        dueDate: '2024-07-10',
        completed: false
      },
      {
        id: '2',
        title: 'Mix guitar tracks',
        description: 'Balance and EQ the guitar parts',
        priority: 'medium',
        assignedTo: '1',
        dueDate: '2024-07-12',
        completed: false
      }
    ]
  },
  {
    id: '2',
    title: 'Electronic Odyssey',
    description: 'Experimental electronic music project',
    status: 'planning',
    progress: 25,
    createdAt: '2024-06-20',
    updatedAt: '2024-07-03',
    songs: [
      {
        id: '3',
        title: 'Digital Dreams',
        bpm: 128,
        genre: 'Electronic',
        status: 'draft',
        metadata: {
          key: 'A Minor',
          tempo: 'Fast',
          mood: 'Energetic'
        },
        collaborators: ['1', '4'],
        createdAt: '2024-06-22',
        updatedAt: '2024-06-25'
      }
    ],
    collaborators: [
      {
        id: '1',
        name: 'Alex Producer',
        email: 'alex@example.com',
        role: 'owner',
        permissions: ['edit', 'delete', 'invite']
      },
      {
        id: '4',
        name: 'Sam DJ',
        email: 'sam@example.com',
        role: 'editor',
        permissions: ['edit']
      }
    ],
    milestones: [
      {
        id: '3',
        title: 'Create project structure',
        description: 'Set up basic project organization and goals',
        dueDate: '2024-07-08',
        completed: true,
        completedAt: '2024-07-02'
      }
    ],
    pendingTasks: [
      {
        id: '3',
        title: 'Define sound palette',
        description: 'Choose synthesizers and samples for the project',
        priority: 'high',
        assignedTo: '4',
        dueDate: '2024-07-15',
        completed: false
      }
    ]
  }
];

export const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Summer Vibes EP - Split Sheet',
    type: 'split-sheet',
    projectId: '1',
    createdAt: '2024-06-15',
    status: 'draft'
  },
  {
    id: '2',
    title: 'Q2 2024 Royalty Report',
    type: 'royalty-report',
    projectId: '1',
    createdAt: '2024-07-01',
    status: 'pending'
  }
];

export const mockCollaborationProjects = mockProjects.filter(project =>
  project.collaborators.some(collab => collab.id !== '1')
);
