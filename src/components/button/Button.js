import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Style from './button.style'

const Button = props => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={props.onPress} {...props}>
            <View style={[Style.container, props.containerStyle]}>
                <Text style={[Style.title, props.titleStyle]}>{props.title}</Text>
            </View>
        </TouchableOpacity >
    )
}
export { Button }