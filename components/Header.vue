<template>
    <header class="header">
        <div class="container">
            <p>TestList</p>
                <div v-on:click="showCart">
                    <img src="/icons/cart-icon-header.png" alt="">
                    <span>{{this.$store.state.cart.length}}</span>
                </div>
        </div>
    </header>
</template>

<script>
export default {
    methods:{
        showCart(){
            this.$emit('showCart');
        }
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    }
    .header p{
        color: #59606D;
        font-size: 22px;
        font-weight: 700;
        margin-right: auto;
    }
    .header div img{
        margin: 20px auto auto auto;
        width: 24px;
        height: 26.4px;
    }
    .container{
        width:85%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
    }
    .container div img:hover{
        cursor: pointer;
    }
    .container span{
        color:white;
        background: #959DAD;
        position: absolute;
        border-radius: 12px;
        font-size: 10px;
        font-weight: 700;
        line-height: 12px;
        height:12px;
        width: 12px;
        text-align: center;
        top: 10px;
        margin-left:-7px;
    }
</style>