import { StackActions, useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { createPost } from '../../redux/actions'

export default function SavePostScreen(props) {
    const [description, setDescription] = useState('')
    const [requestRunning, setRequestRunning] = useState(false)
    const navigation = useNavigation()

    const dispatch = useDispatch();
    const handleSavePost = () => {
        setRequestRunning(true)
        dispatch(createPost(description, props.route.params.source, props.route.params.sourceThumb))
            .then(() => navigation.dispatch(StackActions.popToTop()))
            .catch(() => setRequestRunning(false))
    }

    if (requestRunning) {
        return (
            <View style={styles.uploadingContainer}>
                <ActivityIndicator color='red' size='large' />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.inputText}
                    maxLength={150}
                    multiline
                    onChangeText={(text) => setDescription(text)}
                    placeholder="Describe your video"
                />
                <Image
                    style={styles.mediaPreview}
                    source={{ uri: props.route.params.source }}
                />
            </View>
            <View style={styles.spacer} />
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.cancelButton}>
                    <Feather name="x" size={24} color="black" />
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleSavePost()}
                    style={styles.postButton}>
                    <Feather name="corner-left-up" size={24} color="white" />
                    <Text style={styles.postButtonText}>Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
