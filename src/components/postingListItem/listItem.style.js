import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window')

const Style = StyleSheet.create({
    container : {
        width : '100%',
        height: 150,
        backgroundColor:'white',
        flexDirection:'row',
        paddingTop:10
    },
    itemImage : {
        width: width*0.21,
        height:width*0.21,
        resizeMode:'cover',
        borderRadius:20
    },
    description : {
        height:width*0.21,
        alignItems:'flex-start',
        justifyContent:'space-between',
    },
    title:{
        fontWeight:'bold',
        fontSize: 20,
        letterSpacing:1,
        color:'black'
    },
    descriptionText:{
        fontWeight:'normal',
        fontSize:15,
        color:'gray'
    },
    content : {
        height: 150,
        justifyContent:'space-between',
        paddingBottom:20,
        paddingLeft:20
    },
    buttonTilte : {
        color: 'red',
        fontWeight:'bold',
        fontSize:15,
        letterSpacing:1
    },
    indicatorStyle:{
        width: width*0.21,
        height:width*0.21,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    }
})
export default Style