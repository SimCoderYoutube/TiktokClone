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