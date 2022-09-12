import React from 'react'
import { Image } from 'react-native'
import Style from './listItem.style'

const LazyImage=(props)=>{
    return(
        <Image
        source={{uri: props.image}}
        style={Style.itemImage}
        resizeMode={'cover'}
      />
    )
}
export default LazyImage