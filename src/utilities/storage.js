// use local storage as your db for now
const addToDb = (id, name, email, country, productName) =>{
    const exists = getDb();
    let cart = [];
    let user = {
        name : name,
        id : id,
        email : email,
        country : country,
        productName : productName
    };
    if(!exists){
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