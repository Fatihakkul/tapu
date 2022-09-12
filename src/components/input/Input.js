import React from "react";
import { View, TextInput, StyleSheet } from 'react-native'
import Style from './input.style'

const Input = props => {
    return (
        <View style={Style.container}>
            <TextInput
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                keyboardType={props.keyboardType}
                secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
}
export { Input }