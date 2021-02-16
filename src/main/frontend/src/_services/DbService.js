import axios from 'axios';

const allCards = 'http://localhost:8080/allcards';
const card = 'http://localhost:8080/card/';
const tasksByCard = 'http://localhost:8080/';

class DbService {
    getAllCards() {
        return axios.get(allCards);
    }
    getCard(id) {
        return axios.get(card + id);
    }
    getTasksByCard(id) {
        return axios.get(tasksByCard + id);
    }
}

export default new DbService();
