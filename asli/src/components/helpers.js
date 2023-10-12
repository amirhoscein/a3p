const shorten = (title) => {
  const splitTitle = title.split(" ");
  const newTitle = ` ${splitTitle[0]} ${splitTitle[1]} `;
  return newTitle;
};

const shortCatgory = (title) => {
  const splitTitle = title.split(" ");
  const newTitle = ` ${splitTitle[0]} ${splitTitle[1]} ${splitTitle[2]} ${splitTitle[3]}  `;
  return newTitle;
};

const shortBrand = (title) => {
  const splitTitle = title.split(" ");
  const newTitle = ` ${splitTitle[0]}`;
  return newTitle;
};

const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};
export { shorten, shortCatgory, isInCart, quantityCount, shortBrand };
