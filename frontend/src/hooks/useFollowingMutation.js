import { useMutation, useQuery, useQueryClient } from 'react-query'
import { changeFollowState, getIsFollowing } from '../services/user'
import { keys } from './queryKeys'
import firebase from 'firebase'

/**
 * hook meant to fetch a user using react-query in order
 * to cache data and avoid unnecessary queries to be made 
 * to firestore
 * 
 * @param {String} userId of the user we want to fetch
 * @param {Object} options to be passed along to useQuery
 * @returns 
 */
export const useFollowingMutation = (options = {}) => {
    const queryclient = useQueryClient()
    return useMutation(changeFollowState, {
        ...options,
        onMutate: variables => {
            queryclient.setQueryData(
                keys.userFollowing(firebase.auth().currentUser.uid, variables.otherUserId),
                !variables.isFollowing)
        }
    })
}