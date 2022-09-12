import axios from 'axios';
import {baseUrl, locales, postings, users} from './urls';
import I18n from 'react-native-i18n';


export async function getLocales() {
  let {data} = await axios
    .get(baseUrl + locales)
    .catch(e => console.log(e, 's'));
  return data;
}

export async function userLogin(email, password, locale) {
  if ((email != '') & (password != '')) {
    let {data} = await axios
      .post(baseUrl + users, {
        email,
        password,
        locale: locale,
      })
      .catch(e => console.log(e));

    return data;
  } else {
    return false;
  }
}

export async function getPostings() {
  let {data} = await axios
    .get(baseUrl + postings)
    .catch(e => console.log(e, 'error'));
  return data;
}

export function calculatePrice(basketList) {
  let priceList = [];
  let totalPrice;
  let tax;
  basketList.forEach(item => {
    priceList.push(item['price']);
  });
  totalPrice = priceList.length > 0 ? priceList.reduce((x, y) => x + y) : 0;
  tax = (totalPrice * 10) / 100;
  return {tax, totalPrice};
}

export const checkArray = (checkItem, item) => {
  let selectedItem = checkItem.find(e => e.id == item.id)
    ? Object.keys(checkItem.find(e => e.id == item.id)).length > 0
    : false;
  return selectedItem;
};

export const validate = (email) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
};
