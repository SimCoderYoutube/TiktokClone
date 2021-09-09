import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        alignItems: 'center',
        paddingHorizontal: 65,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    counterContainer: {
        paddingBottom: 20,
        flexDirection: 'row',
    },
    counterItemContainer: {
        flex: 1,
        alignItems: 'center'
    },
    emailText: {
        padding: 20,
    },
    counterNumberText: {
        fontWeight: 'bold',
        fontSize: 16
    },
    counterLabelText: {
        color: 'gray',
        fontSize: 11
    }
});

export default styles;