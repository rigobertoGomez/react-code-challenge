import { GET_USERS } from '@/services/users.service';
import { useQuery } from '@apollo/client';

export const useUsers = () => useQuery(GET_USERS)