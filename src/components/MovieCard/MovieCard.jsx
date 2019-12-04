import React from 'react';
import {
    Link
} from "react-router-dom";
import {Slugify} from '../../libs/Helpers';

const MovieCard = (props) => {
    const { movieList } = props;
    let copmonentReturn = 'Loading ....';
    if (movieList != null) {
        copmonentReturn = movieList.map(function (value, key) {
            if (key === 0) {
                console.log(value);
            }
            return (
                <Link key={key} to={`./${Slugify(value.title)}`}>
                    <div style={{ float: 'left', width: '45%', textAlign: 'left', margin: '1%', background: '#FFF', padding: '10px', border: 'solid 1px #DDD' }}>
                        <h2 style={{ margin: 0, padding: '5px 0px' }}>{value.title} <small>({value.release_date})</small></h2>
                        <small>Director : {value.director}</small>
                        <br /><small>Producer : {value.producer}</small>
                    </div>
                </Link>
            );
        });
    }
    return <div><center>{copmonentReturn}</center></div>;

}

export default MovieCard;