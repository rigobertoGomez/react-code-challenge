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
          assignee{
            fullName
            avatar
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
      assignee{
        fullName
        avatar
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
      assignee{
        fullName
        avatar
      }
    }
  }
`;