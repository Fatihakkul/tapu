import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const Style = StyleSheet.create({
    container : {
        width : width*0.9,
        height: 60,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    title : {
        fontWeight: 'bold',
        color: 'white',
        letterSpacing:2,
        fontSize: 16
    }
})

export default Style