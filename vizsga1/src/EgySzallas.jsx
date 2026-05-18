import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EgySzallas() {
    const [data, setData] = useState({});

    const param = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://nodejs.sulla.hu/data/` + param.id)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    function deleteF(){
        if (window.confirm("Biztos hogy törölsz?")){
            fetch("https://nodejs.sulla.hu/data/"+param.id, {
                method: "DELETE"
            })
            .then(function(){
                navigate("/");
            })
            .catch(function(err){
                console.log(err)
                alert("Hiba a törlés során.")
            })
        }
    }

    return (
        <div className='row'>
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <Link to={"/"} ><i className="bi bi-arrow-bar-left"></i></Link>
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.hostname}</p>
                    <p className="card-text">{data.location}</p>
                    <p className="card-text">{data.price}</p>
                    <p className="card-text">{data.minimum_nights}</p>
                    <button className='btn btn-secondary' onClick={deleteF}>
                        Törlés
                    </button>
                </div>
            </div>
        </div>
    );
};
