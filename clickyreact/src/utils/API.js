import axios from "axios";

export default {
    getRandomPhotos: function() {
        return axios.get("https://dog.ceo/api/breeds/image/random")
    }
};