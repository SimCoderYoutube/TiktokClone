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