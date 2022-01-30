export const keys = {
    user: (user) => ['user', user],
    userFollowing: (userId, otherUserId) => ['following', userId + otherUserId]
}