import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { userAuthStateListener } from '../../redux/actions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../../screens/auth'
import HomeScreen from '../home';
import SavePostScreen from '../../screens/savePost';

const Stack = createStackNavigator()

export default function Route() {
    const currentUserObj = useSelector(state => state.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userAuthStateListener());
    }, [])

    if (!currentUserObj.loaded) {
        return (
            <View></View>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {currentUserObj.currentUser == null ?
                    <Stack.Screen name="auth" component={AuthScreen} options={{ headerShown: false }} />
                    :
                    <>
                        <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="savePost" component={SavePostScreen} options={{ headerShown: false }} />
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}
