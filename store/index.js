import Vuex from 'vuex'

const store = () => {
    return new Vuex.Store({
        state:{
            cart: []
        },
        mutations:{
            initCart(state, cart){
                state.cart = cart;
            },
            addProduct(state, product){
                state.cart.push(product);
                localStorage.clear();
                localStorage.setItem('cart', JSON.stringify(state));
            },
            deleteProduct(state, indx){
                state.cart.splice(indx, 1);
                localStorage.clear();
                localStorage.setItem('cart', JSON.stringify(state));
            },
            clearCart(state){
                state.cart = [];
                localStorage.clear();
            }
        },
        getters:{
            getCart(state){
                return state.cart;
            }
        }
    })
}

export default store