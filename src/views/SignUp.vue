<template>
    <div>
    <div>
    
    <h1>Sign Up</h1>
   </div>
   <div class="register">
    
    <input type="'text" v-model="name" placeholder="Enter Name" />
    <input type="'text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signUp"> Sign Up</button>
   <p>
    <router-link to="/login">Login</router-link>
   </p>
    </div>
</div>
</template>
<script>

export default {
    name:"SignUp",
    data(){
        return{
            name:"",
            email:"",
            password:""
        }
    },
    methods: {
        signUp(){
            alert("Signup is done sucessfully!! Go to Login");
        }
    },
   
}


      
</script>
<style>
h1{
    text-align: center;
}
.register input {
        width: 300px;
        height: 40px;
        padding-left:20px ;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left:auto ;
        border: 1px solid purple;
        margin-top: 25px;
    }
    .register button{
        width: 320px;
        height: 40px;
        border: 1px solid purple;
        background-color: purple;
        color: white;
        cursor: pointer;
        font-weight: bold;
        padding-left:20px ;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left:auto ;
        text-align: center;
        

    }
   
   
    .register p{
      color: purple;
      text-align: center;
    }
</style>