import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import { Feather } from '@expo/vector-icons';

/**
 * Function that renders a component that renders a menu to allow
 * the user to choose the auth provider and if the method should be
 * signin or signup.
 * 
 * @param props passed to component 
 * @param props.authPage if 0 it is in the signin state
 * if 1 is in the signup state 
 * @param props.setAuthPage setter for the authPage var (0 or 1)  
 * @param props.setDetailsPage setter for the variable that chooses 
 * the type of page, if true show AuthMenu else show AuthDetails 
 * @returns Component
 */
export default function AuthMenu({ authPage, setAuthPage, setDetailsPage }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerMain}>
                <Text style={styles.headerText}>{authPage == 0 ? 'sign in' : 'sign up'}</Text>
                <TouchableOpacity style={styles.providerButton}
                    onPress={() => setDetailsPage(true)}>
                    <Feather name="user" size={24} color="black" />
                    <Text style={styles.providerButtonText}>Use Email</Text>
                    <View />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.containerBottomButton}
                onPress={() => authPage == 0 ? setAuthPage(1) : setAuthPage(0)}>

                {authPage == 0 ?
                    <Text>Don't have an account? <Text style={styles.bottomButtonText}>Sign up</Text></Text>
                    :
                    <Text>Already have an account? <Text style={styles.bottomButtonText}>Sign in</Text></Text>
                }
            </TouchableOpacity>

        </View>
    )
}
