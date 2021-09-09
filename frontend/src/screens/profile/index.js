import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './styles'
import ProfileNavBar from '../../components/profile/navBar'
import ProfileHeader from '../../components/profile/header'
import ProfilePostList from '../../components/profile/postList'

export default function ProfileScreen() {
    const currentUser = useSelector(state => state.auth.currentUser)
    const currentUserPosts = useSelector(state => state.posts.currentUserPosts)
    return (
        <View style={styles.container}>
            <ProfileNavBar user={currentUser} />
            <ScrollView>
                <ProfileHeader user={currentUser} />
                <ProfilePostList posts={currentUserPosts} />
            </ScrollView>

        </View>
    )
}
