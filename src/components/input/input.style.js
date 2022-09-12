import { Dimensions, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('window')

const Style = StyleSheet.create({
    container : {
        width: width*0.9,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingBottom:0
    }
})
export default  Style