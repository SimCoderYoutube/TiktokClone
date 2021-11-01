import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { saveUserProfileImage } from '../../../services/user'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import NavBarGeneral from '../../../components/general/navbar'


export default function EditProfileScreen() {
    const auth = useSelector(state => state.auth)
    const navigation = useNavigation()
    const chooseImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        })
        if (!result.cancelled) {
            saveUserProfileImage(result.uri)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <NavBarGeneral />
            <View style={styles.imageContainer}>
                <TouchableOpacity
                    style={styles.imageViewContainer}
                    onPress={() => chooseImage()}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: auth.currentUser.photoURL }} />
                    <View style={styles.imageOverlay} />
                    <Feather name='camera' size={26} color='white' />
                </TouchableOpacity>
            </View>

            <View style={styles.fieldsContainer}>
                <TouchableOpacity
                    style={styles.fieldItemContainer}
                    onPress={() => navigation.navigate('editProfileField', { title: 'Display Name', field: 'displayName', value: auth.currentUser.displayName })}>
                    <Text>Display Name</Text>
                    <View style={styles.fieldValueContainer}>
                        <Text>{auth.currentUser.displayName}</Text>
                        <Feather name='chevron-right' size={20} color='gray' />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
