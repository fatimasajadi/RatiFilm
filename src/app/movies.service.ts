export class MoviesService {
    movieFetch() {
        return fetch("assets/data.json")
            .then(response => response.json())


    }
}