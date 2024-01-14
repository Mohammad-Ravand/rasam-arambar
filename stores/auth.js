import { defineStore } from "pinia";


export const useAuthStore = defineStore('auth', {
 state: () => {
    return {
      token:'',
      isloggedIn:false,
      user:{}
    };
  },


  actions: {
    login(item) {
      console.log(item)
    },
    logout(item){

    }
  },
})