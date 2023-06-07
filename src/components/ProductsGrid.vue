<template>
    <div class="grid-wrap">
        <products-gridItem v-for="product in products"
        :key="product.id"
        :product="product" />
        
    </div>
</template>

<script>
import ProductsGridItem from './ProductsGriditem.vue';
export default {
    name:'ProductsGrid',
    props:['products'],
    components:{
        ProductsGridItem,
    },
}
</script>

<style scoped>
.grid-wrap {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 16px;
}


</style>