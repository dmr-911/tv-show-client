// use local storage as your db for now
const addToDb = (name, id, email, country) => {
    const exists = getDb();
    let tv_cart = {
        name : name,
        id : id, 
        email : email,
        country : country
    };
    if (!exists) {
      tv_cart[id] = 1;
    }
    else {
      tv_cart = JSON.parse(exists);
      if (tv_cart[id]) {
        const newCount = tv_cart[id] + 1;
        tv_cart[id] = newCount;
      }
      else {
        tv_cart[id] = 1;
      }
    }
    updateDb(tv_cart);
  }
  
  const getDb = () => localStorage.getItem('tv_cart');
  
  const updateDb = cart => {
    localStorage.setItem('tv_cart', JSON.stringify(cart));
  }
  
  const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {
  
    }
    else {
      const tv_cart = JSON.parse(exists);
      delete tv_cart[id];
      updateDb(tv_cart);
    }
  }
  
  const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheCart = () => {
    localStorage.removeItem('tv_cart');
  }
  
  export { addToDb, removeFromDb, clearTheCart, getStoredCart }