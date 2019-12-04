import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
import api from '../../libs/HttqRequest'
import MovieCard from '../../components/MovieCard/MovieCard';

export default class MovieLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null
        }
    }
    componentDidMount() {
        api.films().getAll().then(res => {
            this.setState({ movies: res.data });
        });
    }
    render() {
        const { movies } = this.state;

        return (
            <div>
                <Navbar />
                <Container>
                    MovieLists
                    <MovieCard movieList={movies} />
                </Container>
            </div>
        );
    }
}