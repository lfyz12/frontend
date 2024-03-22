import axios  from "axios"


const UserService = {
    
    async RegistCreate(username, name, email, password1, password2){
        return new Promise((resolve) => resolve(axios.post(process.env.REACT_APP_API_URL + 'regist-create/', {username, name, email, password1, password2})))
    },

    async CustomUserDetail() {
        return new Promise(resolve => resolve(axios.get(process.env.REACT_APP_API_URL + 'custom-user-detail/<int:pk>/')))
    }
}

export default UserService;