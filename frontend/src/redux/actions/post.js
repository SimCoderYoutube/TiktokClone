
import firebase from 'firebase'
import { saveMediaToStorage } from './random'
require('firebase/firebase-auth')
require('firebase/firestore')
import uuid from 'uuid-random'

export const createPost = (description, video) => dispatch => new Promise((resolve, reject) => {
    saveMediaToStorage(video, `post/${firebase.auth().currentUser.uid}/${uuid()}`)
        .then((downloadUrl) => {
            firebase.firestore()
                .collection('post')
                .add({
                    creator: firebase.auth().currentUser.uid,
                    downloadUrl,
                    description,
                    likesCount: 0,
                    commentsCount: 0,
                    creation: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(() => resolve())
                .catch(() => reject())
        })
        .catch(() => reject())
})
