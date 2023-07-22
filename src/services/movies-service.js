import axios from "axios";


class MoviesService {

    async getMovies({title,type,year}) {
        return await axios.get(process.env.REACT_APP_API_URL +'/movies', { params: { s:title, type, y:year } });
    }
}
const movieInstance = new MoviesService();
export default movieInstance;
