import { User } from './user';

// Enums
export enum Status {
    BACKLOG = 'BACKLOG',
    CANCELLED = 'CANCELLED',
    DONE=  'DONE',
    IN_PROGRESS = 'IN_PROGRESS',
    TODO = 'TODO'
}
export enum PointEstimate {
    EIGHT,
    FOUR,
    ONE,
    TWO,
    ZERO
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
