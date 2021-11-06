import firebase from 'firebase'

/**
 * Returns all the posts in the database.
 * 
 * @returns {Promise<[<Object>]>} post list if successful.
 */
export const getFeed = () => new Promise((resolve, reject) => {
    firebase
        .firestore()
        .collection('post')
        .get()
        .then((res) => {
            let posts = res.docs.map((value) => {
                const id = value.id;
                const data = value.data();
                return { id, ...data }
            })
            resolve(posts)
        })
})

export const getLikeById = (postId, uid) => new Promise((resolve, reject) => {
    firebase
        .firestore()
        .collection('post')
        .doc(postId)
        .collection('likes')
        .doc(uid)
        .get()
        .then((res) => resolve(res.exists))
})

export const updateLike = (postId, uid, currentLikeState) => new Promise((resolve, reject) => {
    if (currentLikeState) {
        firebase
            .firestore()
            .collection('post')
            .doc(postId)
            .collection('likes')
            .doc(uid)
            .delete()
    } else {
        firebase
            .firestore()
            .collection('post')
            .doc(postId)
            .collection('likes')
            .doc(uid)
            .set({})
    }

})