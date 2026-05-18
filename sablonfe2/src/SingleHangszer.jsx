import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function SingleHangszer() {

    const [data, setData] = useState({});
    const param = useParams();

    useEffect(() => {
        fetch("http://localhost:3001/instruments/" + param.id)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            <div>
                <h1>Hangszerek</h1>
                <div className='container'>
                    <div className='row'>
                        {
                            <div className="card" key={data.id} style={{ width: "150px", margin: "5px" }}>
                                <img src={data.imageURL} className='card-img-top' alt={data.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text">{data.brand}</p>
                                    <p className="card-text">{data.price}</p>
                                    <p className="card-text">Készleten: {data.quantity}</p>
                                    <Link to={"/"}><button className="btn btn-outline-success me-2" type="button">Vissza</button></Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
