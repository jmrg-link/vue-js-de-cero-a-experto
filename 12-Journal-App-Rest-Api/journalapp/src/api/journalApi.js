import axios from 'axios'

const journalApi = axios.create({
    baseUrl: 'https://jmrg-sc11-journall-fh-default-rtdb.europe-west1.firebasedatabase.app'
})

export default journalApi