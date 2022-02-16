import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeople } from '../../services/starWars/info';
import { getActors } from '../../feautures/actors/actorsSlice';
import { act } from 'react-dom/test-utils';

const StarWars = () => {
    const [people, setPeople] = useState([]);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const actors = useSelector(state => state.actors.value);
    useEffect(() => {
        getPeople()
            .then(result => dispatch(getActors(result.results)))
            .catch(err => setError('Someting went wrong!'));
    }, [])

    return (
        <>
            <h1>The Most Wanted Star Wars Heroes</h1>
            <ul>
                {actors.quantity > 0
                    ? actors.actors.map(person => <li key={person.created}>{person.name}</li>)
                    : <p>No one here.</p>
                }
            </ul>
        </>
    )
}

export default StarWars;