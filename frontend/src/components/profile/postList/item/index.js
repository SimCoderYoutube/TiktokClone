import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles';
export default function ProfilePostListItem({ item }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('userPosts', { creator: item.creator, profile: true })}>
            <Image style={styles.image} source={{ uri: item.media[1] }} />
        </TouchableOpacity>
    )
}
