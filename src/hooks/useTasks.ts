import { useQuery, gql } from '@apollo/client';
import { GET_TASKS } from "@/services/tasks.service"
import { FilterTaskInput } from "@/models"

const input = { status: 'IN_PROGRESS'}
export const useTasks = ( filters:FilterTaskInput) => useQuery(GET_TASKS, {
    variables: { input: filters }
})