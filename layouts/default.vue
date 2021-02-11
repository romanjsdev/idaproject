<template>
  <div class="container">
    <Header v-on:showCart="showCart"/>
    <Nuxt />
    <Cart :cart="this.$store.getters.getCart" v-on:closeCart="closeCart" :cartVisible="cartShow"/>
  </div>
</template>

<script>
export default {
    methods:{
      showCart(){
        this.cartShow = true;
      },
      closeCart(){
        this.cartShow = false;
      }
    },
    mounted(){
      if (JSON.parse(localStorage.getItem('cart')) != null){
        let cart = JSON.parse(localStorage.getItem('cart'));
        this.$store.commit('initCart', cart.cart);
      }
    },
    data(){ 
      return { cartShow: false }
    }
}
</script>

<style>
 body{
   margin: 0;
   font-family: 'PT Sans', sans-serif;
 }
</style>