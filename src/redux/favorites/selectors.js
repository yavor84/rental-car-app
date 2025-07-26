export const selectFavorites = state => state.favorites.items;
export const isFavorite = carId => state =>
  state.favorites.items.includes(carId);
