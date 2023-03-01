import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {projectAuth} from '../firebase/config'

const router = useRouter()
const error = ref(null)

const logout = async()=>{
    error.value=null
    try{
        await projectAuth.signOut()
    }catch(err){
        console.log(err.message);
        error.value = err.message
    }
}

const useLogout=() =>{
    return {logout,error}
}

export default useLogout