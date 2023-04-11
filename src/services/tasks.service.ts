import { gql } from "@apollo/client";

export const GET_TASKS = 
  gql`
    query GetTasks($input:FilterTaskInput!) {
      tasks(input:$input) {
        id
        name
        dueDate
        tags
        pointEstimate
        status
        position
        assignee{
          avatar
          createdAt
          email
          fullName
          id
          type
          updatedAt      
        }
      }
    }
    `
;

export const CREATE_TASK = gql`
  mutation CreateTask($input: CreateTaskInput!) {
    createTask(input:$input) {
      id
      name
      dueDate
      tags
      pointEstimate
      status
      position
      assignee{
        avatar
        createdAt
        email
        fullName
        id
        type
        updatedAt      
      }
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($input: UpdateTaskInput!) {
    updateTask(input:$input) {
      id
      name
      dueDate
      tags
      pointEstimate
      status
      position
      assignee{
        avatar
        createdAt
        email
        fullName
        id
        type
        updatedAt      
      }
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($input: DeleteTaskInput!) {
    deleteTask(input:$input) {
      id
      name
      dueDate
      tags
      pointEstimate
      status
      position
      assignee{
        avatar
        createdAt
        email
        fullName
        id
        type
        updatedAt      
      }
    }
  }
`;