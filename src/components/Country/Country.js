import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))
    }, [countryName])

    return (
        <div>
            <h2>Lets Explore Country of world Named: {countryName} </h2>
            {
                console.log(country)
            }
            <img src={country.flags?.png} alt="" />
        </div>
    );
};

export default Country;