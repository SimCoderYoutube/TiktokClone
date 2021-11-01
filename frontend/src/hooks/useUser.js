import { useQuery } from 'react-query'
import { getUserById } from '../services/user'
import { USER_KEY } from './queryKeys'


/**
 * hook meant to fetch a user using react-query in order
 * to cache data and avoid unnecessary queries to be made 
 * to firestore
 * 
 * @param {String} userId of the user we want to fetch
 * @param {Object} options to be passed along to useQuery
 * @returns 
 */
export const useUser = (userId, options = {}) => {
    return useQuery([USER_KEY, userId], () => getUserById(userId), options)
}