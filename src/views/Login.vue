<template>
    <div>
     <div>
    
     <h1>Login</h1>
    </div>
    <div class="login">
     <input type="'text" v-model="email" placeholder="Enter Email" />
     <input type="password" v-model="password" placeholder="Enter Password" />
     <button v-on:click="login">Login</button>
     <p> 
         Don't have any account? 
     <router-link to="/sign-up"> Sign Up</router-link>
    </p>
     </div>
</div>
</template>
  <script>

 export default {
    
     name:"LoginForm",
     
     data(){
         return{
             email:"",
             password:""
         }
        },
         methods:{
            login(){
        
                this.$router.push({name:'Products'})

    }}
 
 }

 
 </script>
 <style>
 h1{
     text-align: center;
 }
 .login input {
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
     .login button{
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
        
         
 
     }
  
    
     .login p{
       color:purple;
       text-align: center;
        
    
     }
   
 </style>