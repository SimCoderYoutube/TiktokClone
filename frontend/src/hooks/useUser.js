import { useQuery } from 'react-query'
import { getUserById } from '../services/user'
import { USER_KEY } from './queryKeys'


export const useUser = (userId, options = {}) => {
    return useQuery([USER_KEY, userId], () => getUserById(userId), options)
}