import React, { useState } from 'react'
import { View, Text } from 'react-native'
import AuthDetails from '../../components/auth/details'
import AuthMenu from '../../components/auth/menu'
import styles from './styles'


/**
 * Function that renders a component responsible for being the 
 * authentication screen. This is simply a placeholder for
 * the components that actually contains functionalities
 * @returns Component
 */
export default function AuthScreen() {
    const [authPage, setAuthPage] = useState(0)
    const [detailsPage, setDetailsPage] = useState(false)
    return (
        <View style={styles.container}>
            {detailsPage ?
                <AuthDetails authPage={authPage} setDetailsPage={setDetailsPage} />
                :
                <AuthMenu authPage={authPage} setAuthPage={setAuthPage} setDetailsPage={setDetailsPage} />
            }
        </View>
    )
}
