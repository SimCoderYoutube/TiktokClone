import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default function SearchUserItem({ item }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('profileOther', { initialUserId: item?.uid })}>
            <Text style={styles.text}>{item.displayName}</Text>
            <Image style={styles.image} source={{ uri: item.photoURL }} />
        </TouchableOpacity >
    )
}
