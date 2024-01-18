import {watch,ref} from 'vue';
export default function useInputCode(type=null,message=''){
    const type = ref(type)
    const message = ref(error)

    watch(one,(v,o)=>{
        if(v.toString().length>1){
            one.value=v.toString().split('').reverse()[0];
        }
    });


    return one
}