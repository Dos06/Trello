import axios from 'axios';

const allCards = 'http://localhost:8080/allcards';
const card = 'http://localhost:8080/card/';
const tasksByCard = 'http://localhost:8080/';
const editCard = 'http://localhost:8080/editCard';
const deleteCard = 'http://localhost:8080/deleteCard';
const editTask = 'http://localhost:8080/editTask';

class DbService {
    async getAllCards() {
        return axios.get(allCards);
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
