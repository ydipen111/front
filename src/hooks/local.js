export const setUserToLocal = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserFromLocal = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

export const setCartsLocal = (carts) => {
  localStorage.setItem('carts', JSON.stringify(carts));
}

export const getCartsFromLocal = () => {
  const carts = localStorage.getItem('carts');
  return carts ? JSON.parse(carts) : [];
}

export const clearCartsFromLocal = () => {
  localStorage.removeItem('carts');
}

export const clearUser = () => {
  localStorage.clear();
}

