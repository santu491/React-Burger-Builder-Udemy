import axios from 'axios'

let instance=axios.create({
    baseURL:"https://react-burger-udemy-6766f.firebaseio.com/"
})


export default instance