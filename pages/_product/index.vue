<template>
  <div class="container">
    <LeftBar v-bind:products-category="productsCategory"/>
    <div class="product-list-wrapper">
      <div class="sorting-button"><span>Сортировка по:</span>
        <select @change="sorting">
          <option :selected="true" :value="sorts[0].value">{{sorts[0].name}}</option>
          <option :value="sorts[1].value">{{sorts[1].name}}</option>
        </select>
      </div>
      <ProductList class="products-list" v-bind:products="products"/>
    </div>
  </div>
</template>

<script>
export default {
        async asyncData({$axios,params}){
        const productsCategory = await $axios.$get('https://frontend-test.idaproject.com/api/product-category');
        let products = await $axios.$get(`https://frontend-test.idaproject.com/api/product?category=${params.product}`);
        products = products.sort((a, b) => b.price - a.price);
        return {productsCategory,products};
    },
    data(){ return {
      sorts: [
        {value: "price", name: "По цене"},
        {value: "rating", name: "По рейтингу"},
          ]
      }
    },
    methods:{
      sorting(){
        if(event.target.value == "rating"){
          this.products = this.products.sort((a, b) => b.rating- a.rating);
        } else {
          this.products = this.products.sort((a, b) => b.price - a.price);
        }
      }
    }
}
</script>
  
<style scoped>
    body{
      margin: 0;
    }
    .container{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 85%;
      margin: 0 auto;
    }
    .products-list-wrapper{
      display: flex;
      flex-direction: column;
    }

    .sorting-button {
      margin: 25px auto auto 79%;
    }
    .sorting-button select{
      border: none;
    }
    .sorting-button select:focus{
      outline: none;
    }
    .products-list{
      margin: 25px auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
</style>