<template>
    <div class="leftBar">
        <h1>Каталог</h1>
        <ul>
            <li v-for="product of productsCategory" :key="product.id">
                <nuxt-link :to="'/'+product.id">{{product.name}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['products-category']
}
</script>

<style scoped>
    .leftBar{
        width: 15%;
    }
    .leftBar ul{
        padding-left: 0px;
        list-style: none;
    }
    .leftBar li a{
        list-style-type:none;
        text-decoration: none;
        color: #959DAD;
    }
    .leftBar li a:hover{
        color: #59606D;
        cursor: pointer;
    }
    .leftBar a.nuxt-link-active{
        text-decoration: underline;
        color:black;
    }
</style>