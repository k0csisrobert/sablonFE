import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function PutHangszer() {

    const [id, setid] = useState("");
    const [Name, setName] = useState("");
    const [Brand, setBrand] = useState("");
    const [Price, setPrice] = useState(0);
    const [Quantity, setQuantity] = useState(0);
    const [imageURL, setImageURL] = useState("");

    const nav = useNavigate();
    const param = useParams();

    useEffect(() => {
        fetch("http://localhost:3001/instruments/" + param.id)
            .then((res) => res.json())
            .then(function (data) {
                setid(data.id);
                setName(data.name);
                setBrand(data.brand);
                setPrice(data.price);
                setQuantity(data.quantity);
                setImageURL(data.imageURL);
            })
    }, [param.id]);

    function UjHangszer(e) {
        try {
            e.preventDefault();
            let data = {
                id: id,
                Name: Name,
                Brand: Brand,
                Price: Price,
                Quantity: Quantity,
                imageURL: imageURL
            }
            axios.put("http://localhost:3001/instruments/" + param.id, data)
                .then(() => nav("/"));
        }
        catch (err) {
            console.log("Nem jó", err)
        }
    }

    return (
        <div>
            <h1>Hangszer módosítás</h1>
            <form onSubmit={UjHangszer}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">Id</label>
                    <input type="text" className="form-control" id="id" value={id} onChange={x => setid(x.target.value)} disabled />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={Name} onChange={x => setName(x.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="brand" className="form-label">Brand</label>
                    <input type="text" className="form-control" id="brand" value={Brand} onChange={x => setBrand(x.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" value={Price} onChange={x => setPrice(x.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity</label>
                    <input type="number" className="form-control" id="quantity" value={Quantity} onChange={x => setQuantity(x.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="imageURL" className="form-label">ImageURL</label>
                    <input type="text" className="form-control" id="imageURL" value={imageURL} onChange={x => setImageURL(x.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Mentés</button>
            </form>
        </div>
    )
}