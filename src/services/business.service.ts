import axios from 'axios';
export default class BusinessService {
    static getJsonData() {
       return  axios.get('./data.json').then( (res) => {
            return res.data;
      }).catch(error => {
        return error;
    });
    }
}