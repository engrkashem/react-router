import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Welcome to Country of the World</h2>
            {
                countries.map(country => <li>
                    <Link
                        key={country.cca3}
                        to={`/countries/${country?.name?.common}`}
                    > {country?.name?.common}</Link>
                </li>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Countries;