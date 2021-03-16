import axios from 'axios';

const auth = 'http://localhost:8080/auth';
const cards = 'http://localhost:8080/cards';
const card = 'http://localhost:8080/card/';
const tasksByCard = 'http://localhost:8080/';
const addCard = 'http://localhost:8080/addCard';
const editCard = 'http://localhost:8080/editCard';
const deleteCard = 'http://localhost:8080/deleteCard';
const editTask = 'http://localhost:8080/editTask';

class DbService {
    async login(email, password) {
        return axios.post(auth, {email, password}).then(response => {
            let token = response.data
            if (token) {
                localStorage.setItem('token', JSON.stringify(token))
                this.getUserProfile()
            }
            return response.data
        })
    }

    async logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('profile')
    }

    async register(email, password, name) {
        return axios.post(auth + '/register', {email, password, name})
    }

    getCurrentToken() {
        return JSON.parse(localStorage.getItem('token'))
    }

    getUserProfile() {
        let token = JSON.parse(localStorage.getItem('token'))['jwtToken']
        return axios.get(auth + '/profile/' + token, {
            headers: {
                'Authentication': 'Bearer ' + token
            }
        }).then(response => {
            let data = response.data
            localStorage.setItem('profile', JSON.stringify(data))
            return data
        })
    }

    editUserName(name) {
        let token = JSON.parse(localStorage.getItem('token'))['jwtToken']
        return axios.put(auth + `/edit/name/${token}/${name}`, {}, {
            headers: {
                'Authentication': 'Bearer ' + token
            }
        }).then(r => {
            this.getUserProfile()
            return r
        })
    }

    async editUserPassword(oldpassword, password) {
        let token = JSON.parse(localStorage.getItem('token'))['jwtToken']
        return await axios.put(auth + `/edit/password/${token}/${oldpassword}/${password}`, {},{
            headers: {
                'Authentication': 'Bearer ' + token
            }
        })
    }

    async getCards(name) {
        let token
        try {
            token = JSON.parse(localStorage.getItem('token'))['jwtToken']
            return await axios.get(`${cards}/${token}?name=${name}`);
        } catch (e) {
            console.log(e)
        }
    }
    async getCard(id) {
        return axios.get(card + id);
    }
    async getTasksByCard(id) {
        return axios.get(tasksByCard + id);
    }
    async addCard(card) {
        let token = JSON.parse(localStorage.getItem('token'))['jwtToken']
        return axios.post(`${addCard}/${token}`, card);
    }
    async editCard(card) {
        return axios.put(editCard, card);
    }
    async deleteCard(card) {
        return axios.delete(deleteCard, {data: card});
    }
    async editTask(task) {
        return axios.put(editTask, task);
    }
}

export default new DbService();
