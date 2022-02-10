import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPeople } from '../../services/starWars/info';

const StarWars = () => {
    const [people, setPeople] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getPeople()
            .then(result => setPeople(result.results))
            .catch(err => setError('Someting went wrong!'));
    }, [])

    return (
        <>
            <h1>The Most Wanted Star Wars Heroes</h1>
            <ul>
                {people.length > 0
                    ? people.map(person => <li key={person.created}>{person.name}</li>)
                    : <p>No one here.</p>
                }
            </ul>
        </>
    )
}

export default StarWars;