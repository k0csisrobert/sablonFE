import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/instruments")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    function Torles(id) {

        if (window.confirm("Biztos akarod törölni? ")) {
            axios.delete("http://localhost:3001/instruments/" + id)
                .then(fetch("http://localhost:3001/instruments")
                    .then((res) => res.json())
                    .then((data) => setData(data)))
        }
    }

    return (
        <>
            <div>
                <h1>Hangszerek</h1>
                <div className='container'>
                    <div className='row'>
                        {
                            data.map(item => {
                                return <div className='col-3'>
                                    <Link to={`/${item.id}`}>
                                        <div className="card" key={item.id} style={{ width: "18rem", margin: "5px" }}>
                                            <img src={item.imageURL} className='card-img-top' alt={item.name} />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <p className="card-text">{item.brand}</p>
                                                <p className="card-text">{item.price}</p>
                                                <p className="card-text">Készleten: {item.quantity}</p>
                                                <Link to={`/modosit/${item.id}`}><i class="bi bi-0-circle"></i></Link>
                                                <i onClick={() => Torles(item.id)} class="bi bi-airplane-fill"></i>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
