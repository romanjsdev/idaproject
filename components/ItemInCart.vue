<template>
    <div class="cart-item">
        <div class="cart-item-photo"><img src="/img/1.png" alt=""></div>
        <div class="cart-item-info">
            <p class="product-name">{{product.name.toLowerCase()}}</p>
            <p class="product-price">
                {{product.price.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')}}&#8381;</p>
            <div class="product-rating">
                <img src="/icons/star.png" alt="">
                <p>{{product.rating}}</p>
            </div>
        </div>
        <div class="delete-icon" @click="deleteItem()">&nbsp; </div>
    </div>
</template>

<script>
export default {
    props: ["product"],
    methods:{
        deleteItem(){
            this.$emit('deleteItem', this.product);
        }
    }
}
</script>

<style scoped>
    .cart-item{
        display: flex;
        flex-direction: row;
        width: 85%;
        margin: 25px auto;
    }
    .cart-item-photo{
        width: 30%;
    }
    .cart-item-photo img{
        width:70px;
        height:90px;
    }
    .cart-item-info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left:15px;
        width: 60%;
    }
    .product-name{
        margin-top: 0px;
        margin-bottom: 0px;
    }
    .product-price{
        margin: 0px;
    }
    .product-rating{
        display: flex;
        flex-direction: row;
    }
    .delete-icon{
        background: url("../static/icons/delete-icon.png") no-repeat;
        background-position: center;
        width: 20%;
        height: 100%;
        padding: 25px 0px;
    }
    .delete-icon:hover{
        background: url("../static/icons/delete-icon-hover.png") no-repeat;
        background-position: center;
        cursor: pointer;
    }
</style>