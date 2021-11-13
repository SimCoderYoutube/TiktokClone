const functions = require("firebase-functions");

const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore()

exports.newUser = functions.auth.user().onCreate((user) => {
    return db
        .collection("user")
        .doc(user.uid)
        .create(JSON.parse(JSON.stringify(user)))
})


exports.likeCreate = functions.firestore.document('post/{id}/likes/{uid}').onCreate((_, context) => {
    return db
        .collection("post")
        .doc(context.params.id)
        .update({
            likesCount: admin.firestore.FieldValue.increment(1)
        })
})

exports.likeDelete = functions.firestore.document('post/{id}/likes/{uid}').onDelete((_, context) => {
    return db
        .collection("post")
        .doc(context.params.id)
        .update({
            likesCount: admin.firestore.FieldValue.increment(-1)
        })
})
