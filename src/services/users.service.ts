import { gql } from "@apollo/client";

export const GET_PROFILE = 
  gql`
    query GetUsers{
      profile {
          fullName
          email
          type
          createdAt
          updatedAt
      }
    }
    `
;

export const GET_USERS = 
  gql`
    query GetUsers{
      users {
          id
          fullName
          avatar
          email
          type
          createdAt
          updatedAt
      }
    }
    `
;