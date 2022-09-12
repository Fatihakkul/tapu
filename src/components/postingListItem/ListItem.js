import React, {lazy, Suspense} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {checkArray} from '../../utils/functions';
import Spacer from '../spacer/Spacer';
import Style from './listItem.style';
import Icon from 'react-native-vector-icons/FontAwesome';

const LazyImage = lazy(() => import('./LazyImage'));

const Blur = () => (
  <View style={Style.indicatorStyle}>
    <ActivityIndicator />
  </View>
);

const ListItem = ({item, onPress, basketArray}) => {
  return (
    <View style={Style.container}>
      <Suspense fallback={<Blur />}>
        <LazyImage image={item.image} />
      </Suspense>
      <View style={Style.content}>
        <View style={Style.description}>
          <Text style={Style.title}>{item.title}</Text>
          <Text style={Style.descriptionText}>{item.description}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="star" size={15} color="#e3c205" />
              <Spacer width={5} />
              <Text>{item.point}</Text>
            </View>
            <Spacer width={15} />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="map-marker" size={15} color="#0796f5" />
              <Spacer width={5} />
              <Text>{item.distance}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={onPress}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="shopping-basket" size={15} color="red" />
            <Spacer width={13} />
            <Text style={Style.buttonTilte}>
              {checkArray(basketArray, item) ? 'Sepetten çıkar' : 'Spete Ekle'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {ListItem};
