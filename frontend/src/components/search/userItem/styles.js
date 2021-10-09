import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1,
        fontSize: 16,

    },
    image: {
        backgroundColor: 'gray',
        height: 40,
        width: 40,
        borderRadius: 20,
    }
});

export default styles;