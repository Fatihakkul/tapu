import { Dimensions, StyleSheet } from "react-native";

const { width, height} = Dimensions.get('window')

const Style = StyleSheet.create({
    container : {
        width : width*0.97,
        marginLeft: -width*0.035
    }
})
export default Style