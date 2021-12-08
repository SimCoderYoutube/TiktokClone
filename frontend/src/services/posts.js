import firebase from "firebase";

let commentListnerInstance = null
/**
 * Returns all the posts in the database.
 *
 * @returns {Promise<[<Object>]>} post list if successful.
 */
export const getFeed = () =>
  new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("post")
      .get()
      .then((res) => {
        let posts = res.docs.map((value) => {
          const id = value.id;
          const data = value.data();
          return { id, ...data };
        });
        resolve(posts);
      });
  });

/**
 * Gets the like state of a user in a specific post
 * @param {String} postId - id of the post
 * @param {String} uid - id of the user to get the like state of.
 *
 * @returns {Promise<Boolean>} true if user likes it and vice versa.
 */
export const getLikeById = (postId, uid) =>
  new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("post")
      .doc(postId)
      .collection("likes")
      .doc(uid)
      .get()
      .then((res) => resolve(res.exists));
  });

/**
 * Updates the like of a post according to the current user's id
 * @param {String} postId - id of the post
 * @param {String} uid - id of the user to get the like state of.
 * @param {Boolean} currentLikeState - true if the user likes the post and vice versa.
 */
export const updateLike = (postId, uid, currentLikeState) => {
  if (currentLikeState) {
    firebase
      .firestore()
      .collection("post")
      .doc(postId)
      .collection("likes")
      .doc(uid)
      .delete();
  } else {
    firebase
      .firestore()
      .collection("post")
      .doc(postId)
      .collection("likes")
      .doc(uid)
      .set({});
  }
};

export const addComment = (postId, creator, comment) => {
  firebase.firestore()
    .collection('post')
    .doc(postId)
    .collection('comments')
    .add({
      creator,
      comment,
      creation: firebase.firestore.FieldValue.serverTimestamp(),
    })
}

export const commentListner = (postId, setCommentList) => {
  commentListnerInstance = firebase.firestore()
    .collection('post')
    .doc(postId)
    .collection('comments')
    .orderBy('creation', 'desc')
    .onSnapshot((snapshot) => {
      if (snapshot.docChanges().length == 0) {
        return;
      }
      let comments = snapshot.docs.map((value) => {
        const id = value.id;
        const data = value.data();
        return { id, ...data }
      })
      setCommentList(comments)
    })
}

export const clearCommentListener = () => {
  if (commentListnerInstance != null) {
    commentListnerInstance();
    commentListnerInstance = null
  }
}

export const getPostsByUserId = (uid = firebase.auth().currentUser.uid) => new Promise((resolve, reject) => {
  firebase.firestore()
    .collection('post')
    .where('creator', '==', uid)
    .orderBy('creation', 'desc')
    .onSnapshot((snapshot) => {
      let posts = snapshot.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        return { id, ...data }
      })
      resolve(posts)
    })
})
