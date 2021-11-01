import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

/**
 * Function that renders a component meant to be overlapped on
 * top of the post with the post info like user's display name and avatar
 * and the post's description
 * 
 * @param {Object} user that created the post 
 * @param {Object} post object 
 */
export default function PostSingleOverlay({ user, post }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.displayName}>{user.displayName}</Text>
                <Text style={styles.description}>{post.description}</Text>
            </View>

            <Image style={styles.avatar} source={{ uri: user.photoURL }} />
        </View>
    )
}
