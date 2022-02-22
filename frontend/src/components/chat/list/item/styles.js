import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        backgroundColor: 'gray',
        height: 60,
        aspectRatio: 1,
        borderRadius: 30,
        marginRight: 16
    },
    userDisplayName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    lastMessage: {
        fontSize: 13,
        color: 'gray'
    }
})

export default styles