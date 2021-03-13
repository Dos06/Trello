import axios from 'axios';

const auth = 'http://localhost:8080/auth';
const cards = 'http://localhost:8080/cards';
const card = 'http://localhost:8080/card/';
const tasksByCard = 'http://localhost:8080/';
const editCard = 'http://localhost:8080/editCard';
const deleteCard = 'http://localhost:8080/deleteCard';
const editTask = 'http://localhost:8080/editTask';

class DbService {
    async login(email, password) {
        return axios.post(auth, {email, password}).then(response => {
            let token = response.data
            if (token) {
                this.getUserProfile(email)
                localStorage.setItem('user', JSON.stringify(token))
            }
            return response.data
        })
    }

    async logout() {
        localStorage.removeItem('user')
        localStorage.removeItem('profile')
    }

    async register(email, password, name) {
        return axios.post(auth + '/register', {email, password, name})
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'))
    }

    getCurrentProfile() {
        return JSON.parse(localStorage.getItem('profile'))
    }

    getUserProfile(email) {
        return axios.get(auth + '/profile/' + email).then(response => {
            let data = response.data
            localStorage.setItem('profile', JSON.stringify(data))
            return data
        })
    }

    editUserName(email, name) {
        return axios.put(auth + `/edit/name/${email}/${name}`).then(r => {
            this.getUserProfile(email)
            return r
        })
    }

    async editUserPassword(email, oldpassword, password) {
        return await axios.put(auth + `/edit/password/${email}/${oldpassword}/${password}`)
    }

    async getCards(name) {
        return axios.get(cards + '?name=' + name);
    }
    async getCard(id) {
        return axios.get(card + id);
    }
    async getTasksByCard(id) {
        return axios.get(tasksByCard + id);
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
