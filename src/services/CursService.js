import axios  from "axios"


const CursService = {
    
    async getAllCurs(){
        return new Promise((resolve) => resolve(axios.post(process.env.REACT_APP_API_URL + 'curs-list/')))
    },

    async getCursById() {
        return new Promise(resolve => resolve(axios.get(process.env.REACT_APP_API_URL + 'curs-detail/<int:pk>/')))
    }
}

export default CursService;