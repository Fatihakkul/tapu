import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import Context from '../../context/store'
import { Button} from '../../components';
import BasePicker from '../../components/picker/BasePicker'
import Spacer from '../../components/spacer/Spacer';
import Style from './account.style';

const AccountPage = props => {

  const { state, dispatch} = useContext(Context)

  const exit=()=>{
    dispatch({type: 'ADD_USER', user : {}})
    props.navigation.navigate('Login')
  }

  return (
    <View style={Style.container}>
      <View style={Style.itemsPosition}>
        <Spacer height={55} />
        <Text style={Style.texts}>Account</Text>
      </View>
      <View style={Style.itemsPosition}>
        <Text style={[Style.texts,{fontSize: 15,fontWeight:'700'}]}>Email: {state.user.email}</Text>
        <Text style={[Style.texts,{fontSize: 15,fontWeight:'700'}]}>pasword: {state.user.password}</Text>
        <Text style={[Style.texts,{fontSize: 15,fontWeight:'700'}]}>corrunt locale: {state.user.locale.value}</Text>
        <Text style={[Style.texts,{fontSize: 15,fontWeight:'700'}]}>Account</Text>
        <View style={Style.line} />
        <BasePicker title={'Locale'} data={state.locales} defaultValue={state.user.locale.value} /> 
      </View>
      <Button containerStyle={Style.button} onPress={exit} titleStyle={{color : 'red'}} title={'Sign Out'} />
    </View>
  );
};

export {AccountPage};



