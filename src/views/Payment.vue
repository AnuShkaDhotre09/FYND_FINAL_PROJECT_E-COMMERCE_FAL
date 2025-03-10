<template>
    <div class="container my-5">
      <div class="card">
        <div class="card-header">
          <h1 class="card-title">Payment Form</h1>
        </div>
        <div class="card-body">
          <form @submit.prevent="processPayment">
            
              <input type="text" id="name" class="form-control" v-model="name" required
              placeholder="Enter Name" >
          
             
              <input type="email" id="email" class="form-control" v-model="email" required
              placeholder="Enter Email" >
            
            
              
              <textarea id="billing_address" class="form-control" v-model="billingAddress" required
              placeholder="Enter Billing Addresss" ></textarea>
           
             
              <input type="text" id="credit_card_number" class="form-control" v-model="creditCardNumber" required
              placeholder="Enter Credit Cart Number" >
            
            
            
              <input type="text" id="cvv" class="form-control" v-model="cvv" required
              placeholder="Enter CVV" >
            
        
              <input type="number" id="amount" class="form-control" v-model="amount" required
              placeholder="Enter Amount" >
            
            <button type="submit" class="btn btn-primary">Submit Payment</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    name:'PaymentForm',
    data() {
      return {
        name: '',
        email: '',
        billingAddress: '',
        creditCardNumber: '',
        cvv: '',
        amount: ''
      }
    },
    methods: {
      processPayment() {
          alert('Payment processed successfully!');
        }
  }
  }
  </script>
  
  <style>
  .card {
    max-width: 500px;
    margin: auto;
  }
  
  .card-title {
    text-align: center;
  }
  
  .btn-primary {
    width: 100%;
  }


  h1{
    text-align: center;
}
.form-control {
        width: 300px;
        height: 40px;
        
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left:auto ;
        border: 1px solid purple;
        margin-top: 25px;
        padding: 10px;
    }

  
    
   
   
  </style>
  