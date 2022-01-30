import { useQuery } from 'react-query'
import { getIsFollowing } from '../services/user'
import { keys } from './queryKeys'


/**
 * hook meant to fetch a user using react-query in order
 * to cache data and avoid unnecessary queries to be made 
 * to firestore for the follow state of the user over another
 * 
 * @param {String} userId of the user we want to see if it's following another
 * @param {String} otherUserId the id of the user that we want to check if it's being followed by another.
 * @param {Object} options to be passed along to useQuery
 * @returns 
 */
export const useFollowing = (userId, otherUserId, options = {}) => {
    return useQuery(keys.userFollowing(userId, otherUserId), () => getIsFollowing(userId, otherUserId), options)
}