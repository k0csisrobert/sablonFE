import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function OsszesSzallas() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://nodejs.sulla.hu/data")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <Link to={"/uj-szallas"} className='btn-primary btn'>Új szállás</Link>
            <div className='row'>


                {data &&
                    data.map((item) => {
                        return <div className="card" key={item.id} style={{ width: '18rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.hostname}</p>
                                <p className="card-text">{item.location}</p>
                                <p className="card-text">{item.price}</p>
                                <p className="card-text">{item.minimum_nights}</p>
                                <Link to={"/szallas/" + item.id}><i className="bi bi-eye"></i></Link>
                            </div>
                        </div>
                    })}
            </div>

        </div>
    );
};