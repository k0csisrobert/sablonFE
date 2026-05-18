import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function () {


    const [id, setid] = useState("");
    const [Name, setName] = useState("");
    const [Brand, setBrand] = useState("");
    const [Price, setPrice] = useState(0);
    const [Quantity, setQuantity] = useState(0);
    const [imageURL, setImageURL] = useState("");

    const nav = useNavigate()

    function UjHangszer(e) {
        try {
            e.preventDefault();
            let data = {
                id: id,
                name: Name,
                Brand: Brand,
                Price: Price,
                Quantity: Quantity,
                ImageURL: imageURL
            }
            axios.post("http://localhost:3001/instruments", data)
                .then(nav("/"));
        }
        catch{
            console.log("Nem jó")
        }
    }

    return (
        <div>
            <h1>Új hangszer</h1>
            <form onSubmit={UjHangszer}>
                <div className="mb-3">
                    <label for="id" className="form-label">Id</label>
                    <input type="text" className="form-control" id="id" aria-describedby="id" value={id} onChange={x => setid(x.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="name" className="form-label">name</label>
                    <input type="text" className="form-control" id="name" value={Name} onChange={x => setName(x.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="brand" className="form-label">brand</label>
                    <input type="text" className="form-control" id="brand" value={Brand} onChange={x => setBrand(x.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="price" className="form-label">price</label>
                    <input type="number" className="form-control" id="price" value={Price} onChange={x => setPrice(x.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="quantity" className="form-label">quantity</label>
                    <input type="number" className="form-control" id="quantity" value={Quantity} onChange={x => setQuantity(x.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="imageURL" className="form-label">imageURL</label>
                    <input type="text" className="form-control" id="imageURL" value={imageURL} onChange={x => setImageURL(x.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
