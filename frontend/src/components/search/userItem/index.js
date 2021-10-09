import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default function SearchUserItem({ item }) {
    console.log(item.photoURL)
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{item.displayName}</Text>
            <Image style={styles.image} source={{ uri: item.photoURL }} />
        </TouchableOpacity>
    )
}
