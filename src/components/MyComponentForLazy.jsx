import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponentForLazy = () => {
    // State to store the fetched data
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    // Fetch data from the API when the component mounts
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data); // Set data to state
                setLoading(false); // Stop loading
            })
            .catch(err => {
                setError('Error fetching data');
                setLoading(false);
            });
    }, []); // Empty array ensures this effect runs only once (on mount)

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Fetched Data:</h1>
            <ul>
                {data.map((item, index) => (
                    index < 5 && <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyComponentForLazy;