import React, {useState, useEffect} from 'react';
import Spot from '../components/Spot';
import Error from '../components/Error';
import Loading from '../components/Loading';
import '../styles/styles.css';

const url = "https://course-api.com/react-tours-project";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsErr] = useState(false);
    const [tourSpots, setTourSpots] = useState([]);

    const getTourSpots = async () => {
        const response = await fetch(url);
        const spots = await response.json();
        setTourSpots(spots);
    }

    const removePlace = (id) => {
        setTourSpots(tourSpots.filter((place) => place.id !== id));
    }

    useEffect(() => {
        getTourSpots()
        .then(setIsLoading(false))
        .catch((err) => {
            console.log(err);
            setIsErr(true);
        })
    }, [])

    if(isErr) {
        return (
        <div>
            <Error />
        </div>
        )
    }
    else if(isLoading) {
        return (
            <Loading />
        )
    }
    return (
        <>
            <h1 id='pageHeader'>Our Tours</h1>
            <hr />
            {tourSpots.map((place) => {
                return (
                <Spot place={place} remove={removePlace} />
                )
            })}
        </>
    )
}

export default App
