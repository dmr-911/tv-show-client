// use local storage as your db for now
const addToDb = (id, name, email, country) =>{
    const exists = getDb();
    let cart = [];
    let user = {
        name : name,
        email : email,
        country : country
    };
    if(!exists){
        user[id] = 1;
        cart.push(user);
    }
    else{
        cart = JSON.parse(exists);
        cart.push(user);
        }
        updateDb(cart);
    }

const getDb = () => sessionStorage.getItem('orders');
const updateDb = cart => {
    sessionStorage.setItem('orders', JSON.stringify(cart));
  }
  
const getStoredCart = () =>{
    const exists = getDb();
    return exists ? JSON.parse(exists) : []
};


const clearTheCart = () => {
    localStorage.removeItem('orders');
  }

export {addToDb}