import {StyleSheet} from "react-native";
const genericButton = {
    borderRadius:10,
    marginTop:16,
    marginHorizontal:5
}
export default StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'flex-start',
        padding:15
    },
    'btn-edit':{
        backgroundColor:'#008fe5',
        ...genericButton
    },
    'btn-cancel':{
        backgroundColor:'gray',
        ...genericButton
    },
    textBtn:{
        color:'white',
        fontSize:16
    }
})