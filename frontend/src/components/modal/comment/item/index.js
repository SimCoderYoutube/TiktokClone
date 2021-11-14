import React from 'react'
import { View, Text, Image } from 'react-native'
import { useUser } from '../../../../hooks/useUser'
import { generalStyles } from '../../../../styles'
import styles from './styles'

const CommentItem = ({ item }) => {
    const user = useUser(item.creator).data
    console.log(user)
    return (
        <View style={styles.container}>
            <Image style={generalStyles.avatarSmall} source={{ uri: user.photoURL }} />

            <View style={styles.containerText}>
                <Text style={styles.displayName}>{user.displayName}</Text>
                <Text>{item.comment}</Text>
            </View>
        </View>
    )
}

export default CommentItem
