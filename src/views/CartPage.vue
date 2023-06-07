<template>
  <div id="page-wrap">
    <h1>Proceed To Checkout</h1>
    <ProductsList :products="cartItems" 
    v-on:remove-from-cart="removeFromCart($event)"
    />
    <h3 id="total-price">Total: Rs.{{ totalPrice }}</h3>
    <button id="checkout-button"  @click="proceedToPayment">Proceed to Payment</button>
  </div>
</template>

<script>
import axios from 'axios';
import ProductsList from '../components/ProductsList.vue';

export default {
    name: 'CartPage',
    components:{
      ProductsList,
      
    },
    data() {
      return {
        cartItems:[],
   
      }
    },
    computed: {
      totalPrice() {
        return this.cartItems.reduce(
          (sum, item) => sum + Number(item.price),
          0,
        );
      }
    },
    methods: {
      async removeFromCart(productId) {
        const result = await axios.delete(`/api/users/12345/cart/${productId}`);
        this.cartItems = result.data;
      },
      proceedToPayment() {
      // Add logic here to navigate to the checkout page
      if (this.cartItems.length === 0) {
    alert('Your cart is empty. Please add items before proceeding to checkout.');
    return;
  }
  this.$router.push({name:'Payment'})

    }
    },
   
   
    async created(){
      const result=await axios.get('/api/users/12345/cart');
      const cartItems=result.data;
      this.cartItems=cartItems;
      
    }
};
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid purple;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
  }

  #checkout-button {
    width: 100%;
    background-color: purple;
  }

  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>
