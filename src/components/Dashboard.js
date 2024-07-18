import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnalyticsCard from './Analytics';
import '../index.css'

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8080/api/analytics')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
            {data.map(item => (
                <AnalyticsCard key={item.id} data={item} />
            ))}
        </div>
    );
};

export default Dashboard;
