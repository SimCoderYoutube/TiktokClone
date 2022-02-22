import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerOther: {
        padding: 20,
        flexDirection: 'row',
        flex: 1,
    },
    containerTextOther: {
        marginHorizontal: 14,
        backgroundColor: 'cyan',
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerCurrent: {
        padding: 20,
        flexDirection: 'row-reverse',
        flex: 1,
    },
    containerTextCurrent: {
        marginHorizontal: 14,
        backgroundColor: 'gray',
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    },
    displayName: {
        color: 'gray',
        fontSize: 13
    }
})
export default styles
