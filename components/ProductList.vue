<template>
    <div>
        <ProductCard v-on:cartIconClick="addOrRemoveProductToCart" v-for="product of products" :key="product.id" :product="product"/>
    </div>
</template>

<script>
export default {
    props: ['products'],
    methods:{
        addOrRemoveProductToCart(product){
            let remove = false;
            let cart = this.$store.getters.getCart;
            for(let productInCart of cart){
                if (product.id == productInCart.id){
                    let indx = cart.findIndex(elem => product.id == elem.id);
                    this.$store.commit('deleteProduct', indx);
                    remove = true;
                }
            }
            if(!remove){
                this.$store.commit('addProduct', product);
            }
        }
    }
}
</script>

<style scoped>

</style>