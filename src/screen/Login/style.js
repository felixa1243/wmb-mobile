import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
        justifyContent:'space-between'
    },
    box: {
        width: '100%',
        height: '75%',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical:30,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
    },
    inputGroup: {
        flexDirection: 'column',
        width: '100%',
        marginVertical: 3
    },
    input: {
        borderBottomWidth: 1,
        width: '100%',
        padding: 7,
        borderRadius: 5,
        borderColor: '#dedede'
    },
    label: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: 'black',
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        padding: 10
    },
    btnText: {
        color: 'white',
        fontSize:16
    }
})