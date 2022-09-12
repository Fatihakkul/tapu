export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_USER':
      const user = action.user;
      state.user = user;
      return {...state};
    case 'ADD_LOCALES':
      const locales = action.locales;
      state.locales = locales;
      return {...state};
    case 'ADD_POSTINGS':
      const postings = action.postings;
      state.postings = postings;
      return {...state};

    case 'ADD_BASKET':
      let newBasket = [...state.basket];
      const item = action.item;
      newBasket.push(item);
      state.basket = newBasket;
      return {...state};
    case 'REMOVE_BASKET':
      let oldBasket = [...state.basket];
      const removeItem = action.item;
      state.basket =  oldBasket.filter(e => e.id != removeItem.id);
      return {...state};
    default:
      return state;
  }
}
