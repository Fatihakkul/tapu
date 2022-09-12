import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import Context from '../../context/store';
import {Button, Input} from '../../components';
import BasePicker from '../../components/picker/BasePicker';
import Spacer from '../../components/spacer/Spacer';
import Style from './login.style';
import {getLocales, userLogin, validate} from '../../utils/functions';
import I18n from 'react-native-i18n';

const LoginPage = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {state, dispatch} = useContext(Context);
  const pickerRef = useRef();

  const gotoHome = async () => {
    if(!validate(email)){
      ToastAndroid.show(
        `Geçerli email adresi giriniz`,
        ToastAndroid.SHORT,
      );
      return;
    }
    let data = await userLogin(email, password, pickerRef.current.locale);
    if (data) {
      dispatch({type: 'ADD_USER', user: data});
      props.navigation.navigate('Home');
    } else
      ToastAndroid.show(
        `Email veya Şifre alanı boş bırakılamaz`,
        ToastAndroid.SHORT,
      );
  };

  useEffect(() => {
    getLocale();
  }, []);

  async function getLocale() {
    setLoading(true);
    const data = await getLocales();
    dispatch({type: 'ADD_LOCALES', locales: data});
    setLoading(false);
  }

  return (
    <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <View style={Style.container}>
          <Spacer height={40} />
          <Text style={Style.title}>ACCOUNT</Text>
          <Spacer height={20} />
          <Input
            placeholder={'E-mail'}
            value={email}
            onChangeText={e => setEmail(e)}
            keyboardType={'email-address'}
          />
          <Spacer height={40} />
          <Input
            placeholder={'Login'}
            value={password}
            onChangeText={e => setPassword(e)}
            secureTextEntry
          />
       
          <Spacer height={25} />
          <BasePicker
            ref={pickerRef}
            title={'Locale'}
            data={state.locales}
            defaultValue={'EN'}
          />
          <Spacer height={40} />
          <Button title={I18n.t('login')} onPress={gotoHome} containerStyle={email == '' && password == '' ? Style.notPressingButton : {}}/>
        </View>
      )}
    </KeyboardAvoidingView>
  );
};

export {LoginPage};
