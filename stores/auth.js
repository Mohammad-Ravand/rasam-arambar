import { defineStore } from "pinia";


export const useAuthStore = defineStore('auth', {
 state: () => {
    return {
      loginData:{},
      token:'',
      isloggedIn:false,
      user:{}
    };
  },


  actions: {

    saveLoginData(loginObject){
      console.log(loginObject)
      this.loginData = {...loginObject};
    },
    
    logout(item){

    }
  },
})