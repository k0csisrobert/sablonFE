import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function EgySzallas() {
    const [data, setData] = useState([]);

    const param = useParams();

    useEffect(() => {
        fetch(`https://nodejs.sulla.hu/data/` + param.id)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className='row'>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <Link to={"/"} ><i class="bi bi-arrow-bar-left"></i></Link>
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.hostname}</p>
                    <p className="card-text">{data.location}</p>
                    <p className="card-text">{data.price}</p>
                    <p className="card-text">{data.minimum_nights}</p>
                </div>
            </div>
        </div>
    );
};
