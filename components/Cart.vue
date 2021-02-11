<template>
        <div class="cart-wrapper" v-if="this.cartVisible">
            <div class="cart">
                <div class="header">
                    <h1>Корзина</h1><span @click="closeCart()">&times;</span>
                </div>
                <div v-if="!dataSent">
                    <div class="cart-with-items" v-if="cart.length != 0 ? true : false">
                        <p>Товары в корзине</p>
                        <ItemInCart v-for="product of cart" :key="product.id" :product="product" v-on:deleteItem="deleteItem"/>
                        <p>Оформить заказ</p>
                        <form>
                            <input type="text" placeholder="Ваше имя"></input>
                            <input type="tel" v-phone placeholder="Телефон"></input>
                            <input type="text" placeholder="Адрес"></input>
                        </form>
                        <button @click="sendData()">Отправить</button>
                    </div>
                    <div class="empty-cart" v-else>
                        <p>Пока вы ничего не добавили в корзину</p>
                        <button @click="closeCart()">Перейти к выбору</button>
                    </div>
                </div>
                <div class="data-sended" v-else>
                    <img src="/icons/ok.png">
                    <h6>Заявка успешно отправлена</h6>
                    <p>Вскоре наш менеджер свяжется с Вами</p>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "Cart",
    props: ["cartVisible", "cart"],
    data(){
        return { dataSent: false}
    },
    methods:{
        closeCart(){
            this.$emit('closeCart');
        },
        deleteItem(product){
            let cart = this.$store.getters.getCart;
            for(let productInCart of cart){
                if (product.id == productInCart.id){
                    let indx = cart.findIndex(elem => product.id == elem.id);
                    this.$store.commit('deleteProduct', indx);
                }
            }
        },
        sendData(){
            this.dataSent = true;
            this.$store.commit('clearCart');
            this.closeCart();
            this.dataSent = false;
        }
    },
}
</script>

<style scoped>
    .cart-wrapper{
        width: 100%;
        background: rgba(255, 255, 255, 0.8);
        overflow-x: hidden;
        overflow-y: auto;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9;
    }
    .cart{
        overflow-x: hidden;
        overflow-y: auto;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 9;
        background: #FFFFFF;
        width: 35%;
        margin-left: auto;
    }
    .cart-with-items{
        padding: 0 40px;
    }
    .cart-with-items p{
        font-size: 18px;
        font-weight: 400;
        color: #59606D;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .cart-with-items button{
        background-color: #1F1F1F;
        color: white;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 8px;
        width: 100%;
        outline:none;
        cursor: pointer;
    }
    .cart-with-items button:hover{
        background: #59606D;
    }
    .empty-cart{
        padding-left: 40px;
        padding-right: 40px;
    }
    .empty-cart p{
        color:black;
        font-size: 22px;
    }
    .empty-cart button{
        background-color: #1F1F1F;
        color: white;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 8px;
        outline:none;
        width: 100%;
        cursor: pointer;
    }
    .header{
        display: flex;
        flex-direction: row;
        padding: 15px 40px;
    }
    .header h1{
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .header span{
        align-self: center;
        margin-left: auto;
        cursor: pointer;
        font-size: 30px;
        font-weight: bold;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    input{
        margin: 15px 15px 15px 15px; 
        padding: 10px 10px;
        background: #F8F8F8;
        border-radius: 8px;
        border: none;
    }
    input:focus{
        outline: none;
    }
    .data-sended{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .data-sended img{
        margin-top: 35%;
        height:80px;
        width: 80px;
        align-self: center;
    }
    .data-sended h6{
        font-size: 24px;
        font-weight: 700;
        align-self: center;
        margin: 10px auto;
    }
    .data-sended p{
        font-size: 16px;
        font-weight: 400;
        align-self: center;
        color: #59606D;
        margin: 0px auto;
    }
</style>