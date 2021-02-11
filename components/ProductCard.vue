<template>
    <div class="card">
        <div class="card-img">
            <div class="product-rating">
                <img src="/icons/star.png" alt="">
                <p>{{product.rating}}</p>
            </div>
            <img src="/img/1.png" alt="">
            <img class="cart-img" :src="productInCart(product)" alt="" v-on:click="cartIconClicked">
        </div>
        <div>
            <p class="product-name">{{product.name.toLowerCase()}}</p>
            <p class="product-price">
                {{product.price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')}}&#8381;</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],
    methods:{
        cartIconClicked(){
            this.$emit('cartIconClick', this.product);
        },
        productInCart(product){
            let itemInCart = '/icons/cart.png';
            for(let item of this.$store.getters.getCart){
                if (product.id == item.id){
                    itemInCart = '/icons/productInCart.png';
                }
            }
            return itemInCart;
        }
    }
}
</script>

<style scope>
    .card{
        background: white;
        width: 20%;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        padding: 15px;
        margin: 10px 0px 10px 20px;
    }
    img{
        width: 142px;
        height: 180px;
    }
    .product-price{
        font-weight: 700;
        font-size: 14px;
        line-height:18px;
        margin-bottom: 0px;
    }
    .product-rating{
        font-size: 12px;
        line-height: 13px;
        font-weight: 700;
        color: #F2C94C;
    }
    .product-rating p{
        margin-top: 5px;
    }
    .card-img{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .card-img div{
        display: flex;
        flex-direction: row;
    }
    .cart-img{
        width: 12px;
        height: 13.2px;
    }
    .cart-img:hover{
        cursor: pointer;
    }
    .product-rating img{
        height: 20px;
        width: 20px;
    }
    .product-name{
        color:#59606D;
        font-size: 14px;
        text-transform: capitalize;
        line-height: 18px;
    }
</style>