import { saveMediaToStorage } from './random'
import firebase from 'firebase'
export const saveUserProfileImage = (image) => new Promise((resolve, reject) => {
    saveMediaToStorage(image, `profileImage/${firebase.auth().currentUser.uid}`).then((res) => {
        firebase.firestore()
            .collection('user')
            .doc(firebase.auth().currentUser.uid)
            .update({
                photoURL: res
            })
            .then(() => resolve())
            .catch(() => reject())
    })
})

export const saveUserField = (field, value) => new Promise((resolve, reject) => {
    let obj = {};
    obj[field] = value
    firebase.firestore()
        .collection('user')
        .doc(firebase.auth().currentUser.uid)
        .update(obj)
        .then(() => resolve())
        .catch(() => reject())
})


export const queryUsersByEmail = (email) => new Promise((resolve, reject) => {
    if (email === '') {
        resolve([])
    }

    firebase.firestore()
        .collection('user')
        .where('email', '>=', email)
        .where('email', '<=', email + '\uf8ff')
        .get()
        .then((snapshot) => {
            let users = snapshot.docs.map(doc => {
                const data = doc.data();
                const id = doc.id;
                return { id, ...data }
            })
            resolve(users)
        })
        .catch(() => reject())
})

/**
 * fetches the doc corresponding to the id of a user.
 * 
 * @param {String} id of the user we want to fetch 
 * @returns {Promise<Object>} user object if successful.
 */
export const getUserById = (id) => new Promise((resolve, reject) => {
    firebase.firestore()
        .collection('user')
        .doc(id)
        .get()
        .then((snapshot) => {
            resolve(snapshot.exists ? snapshot.data() : null)
        })
        .catch(() => reject())
})


export const getIsFollowing = (userId, otherUserId) => new Promise((resolve, reject) => {
    firebase.firestore()
        .collection('user')
        .doc(userId)
        .collection('following')
        .doc(otherUserId)
        .get()
        .then((doc) => {
            resolve(doc.exists)
        })
        .catch(() => reject())
})

export const changeFollowState = ({ otherUserId, isFollowing }) => new Promise((resolve, reject) => {
    if (isFollowing) {
        firebase.firestore()
            .collection('user')
            .doc(firebase.auth().currentUser.uid)
            .collection('following')
            .doc(otherUserId)
            .delete()
            .then(() => resolve())
            .catch(() => reject())
    } else {
        firebase.firestore()
            .collection('user')
            .doc(firebase.auth().currentUser.uid)
            .collection('following')
            .doc(otherUserId)
            .set({})
            .then(() => resolve())
            .catch(() => reject())
    }

})
