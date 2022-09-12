import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Style from './picker.style';

const BasePicker = (props,ref) => {
  
  const [selectedValue, setSelectedValue] = useState(props.defaultValue);
  const pickerRef = useRef();
  useImperativeHandle(ref, () => ({
    locale:props.data.filter(e=>selectedValue == e.value)[0]
  }));

  return (
    <View style={{width : '90%',borderBottomColor:'gray',borderBottomWidth:1}}>
      <Text>{props.title}</Text>
      <Picker
       ref={pickerRef}
        style={Style.container}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) =>{setSelectedValue(itemValue)}}>
        {
          props.data.map(e=>{
            return <Picker.Item key={e?.id}  label={e?.value} value={e?.value}/>
          })
        }
      </Picker>
    </View>
  );
};
export default forwardRef(BasePicker);
