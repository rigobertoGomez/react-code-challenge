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
          assignee{
            fullName
            avatar
          }
      }
    }
    `
;