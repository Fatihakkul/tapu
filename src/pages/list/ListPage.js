import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator, Alert, BackHandler} from 'react-native';
import Context from '../../context/store';
import {ListItem} from '../../components';
import Spacer from '../../components/spacer/Spacer';
import Style from './list.style';
import {calculatePrice, checkArray, getPostings} from '../../utils/functions';
import I18n from 'react-native-i18n';

const ListPage = props => {
  const {state, dispatch} = useContext(Context);
  const [loading, setLoading] = useState(false);
  const {tax, totalPrice} = calculatePrice(state.basket);

  useEffect(() => {
    postings();
    const backAction = () => {
      Alert.alert("Uygulamadan çıkıyorsun!", "Çıkış yapmak istediğine emin misin?", [
        {
          text: "Hayır",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Evet", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  async function postings() {
    setLoading(true);
    let data = await getPostings();
    dispatch({type: 'ADD_POSTINGS', postings: data});
    setLoading(false);
  }

  function updateBasket(item) {
    if (checkArray(state.basket, item)) {
      dispatch({type: 'REMOVE_BASKET', item});
    } else {
      dispatch({type: 'ADD_BASKET', item});
    }
  }

  const renderPost = ({item, index}) => {
    return (
      <ListItem
        item={item}
        onPress={() => updateBasket(item)}
        basketArray={state.basket}
      />
    );
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
      <View style={{width: '95%', height: '70%'}}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            keyExtractor={(_, index) => index.toString()}
            data={state.postings}
            renderItem={renderPost}
            contentContainerStyle={{width: '100%'}}
            ItemSeparatorComponent={props => {
              return (
                <View
                  style={{
                    height: 2,
                    backgroundColor: 'gray',
                    opacity: 0.2,
                    marginBottom: 10,
                  }}
                />
              );
            }}
          />
        )}
      </View>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: 'gray',
          opacity: 0.2,
        }}
      />
      <View style={Style.basketContainer}>
        <Text style={Style.boldText}>{I18n.t('totalPriceProduct')}</Text>
        <Spacer height={20} />
        <Text style={Style.normalText}>
        {I18n.t('totalPrice')}: {totalPrice - tax} Tl
        </Text>
        <Spacer height={8} />
        <Text style={Style.normalText}>
        {I18n.t('taxes')}: {tax ? tax + 7 : 0} TL
        </Text>
        <Spacer height={15} />
        <Text style={[Style.boldText, {fontSize: 20}]}>
        {I18n.t('price')}: {tax ? totalPrice + 7 : 0} TL
        </Text>
      </View>
    </View>
  );
};

export {ListPage};
