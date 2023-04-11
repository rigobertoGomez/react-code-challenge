import { useQuery, useMutation, gql } from '@apollo/client';
import { GET_TASKS, DELETE_TASK, UPDATE_TASK } from "@/services/tasks.service"
import { FilterTaskInput, Task } from "@/models"

export const useTasks = ( filters:FilterTaskInput) => useQuery(GET_TASKS, {
    variables: { input: filters }
})

export const useUpdateTask = () => useMutation(UPDATE_TASK, {
    update(cache, { data }) {
        const { tasks }: any = cache.readQuery({
          query: GET_TASKS,
          variables: { input: { status: data.updateTask.status } },
        });
        cache.writeQuery({
          query: GET_TASKS,
          variables: { input: { status: data.updateTask.status } },
          data: { tasks: [data.updateTask, ...tasks] },
        });
      },
}); 

export const useDeleteTask = () => useMutation(DELETE_TASK, {
    update(cache, {data}){
        //@ts-ignore        
        const { tasks }: any = cache.readQuery({
            query: GET_TASKS,
            variables: { input: { status: data.deleteTask.status } },
          });       
        cache.writeQuery({
            query: GET_TASKS,
            variables: { input: { status: data.deleteTask.status } },
            data:{
                tasks: tasks.filter((task:Task) => task.id !== data.deleteTask.id)
            }
        })
    },
});