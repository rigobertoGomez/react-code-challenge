import { User } from './user';

// Enums
export enum Status {
    BACKLOG = 'BACKLOG',
    CANCELLED = 'CANCELLED',
    DONE= 'DONE',
    IN_PROGRESS = 'IN_PROGRESS',
    TODO = 'TODO'
}
export enum PointEstimate {
    ZERO = 0,
    ONE = 1,
    TWO = 2,
    FOUR = 4 ,
    EIGHT = 8,
}
export enum TaskTag {
    ANDROID,
    IOS,
    NODE_JS,
    RAILS,
    REACT
}


//  Types
export type FilterTaskInput = {  
    status: Status
}
export type UpdateTaskInput = {
    assigneeId: string
    dueDate: Date
    id: string
    name: string
    pointEstimate: PointEstimate
    position: number
    status: Status
    tags: [TaskTag]
    }

export type Task = {
    assignee: User
    createdAt: Date
    creator: User
    dueDate: Date
    id: string
    name: string
    pointEstimate: PointEstimate
    position: number
    status: Status
    tags: [TaskTag]
}

export type CreateTaskInput = {
    assigneeId: string
    dueDate: Date
    name: string
    pointEstimate: PointEstimate
    status: Status
    tags: [TaskTag]
    }