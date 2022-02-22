import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15
    },
    button: {
        height: 40,
        width: 40,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default styles;