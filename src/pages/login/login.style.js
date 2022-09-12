import { StyleSheet } from 'react-native'

const Style = StyleSheet.create({
    container : {
        alignItems : 'center',
        justifyContent:'space-around',
    },
    title:{
        fontWeight:'bold',
        fontSize: 30,
        color: 'black',
        letterSpacing: 2,
        textAlign:'left',
        width:'90%'
    },
    notPressingButton: {
        backgroundColor:'gray'
    }
})
export default Style