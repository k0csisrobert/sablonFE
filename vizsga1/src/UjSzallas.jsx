import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UjSzallas() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [hostname, setHostname] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [minimum_nights, setMinimum_nights] = useState("");


  function handleChange(e) {
    setName(e.target.value);
    setHostname(e.target.value);
    setLocation(e.target.value);
    setPrice(e.target.value);
    setMinimum_nights(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://nodejs.sulla.hu/data",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name: document.getElementsByTagName("input")[0].value,
            hostname: document.getElementsByTagName("input")[1].value,
            location: document.getElementsByTagName("input")[2].value,
            price: Number(document.getElementsByTagName("input")[3].value),
            minimum_nights: document.getElementsByTagName("input")[4].value,
        })
    }).then(() => navigate("/")).catch((err) => {
        console.log(err);
        alert("Hiba történt a szállás létrehozásakor!");
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Adja meg a szállás nevét: 
        <input
          type="text" 
          onChange={handleChange}
        />
      </label>
      <label>Adja meg a szállás adó nevét:
        <input
          type="text" 
          onChange={handleChange}
        />
      </label>
      <label>Adja meg a szállás helyszínét: 
        <input
          type="text" 
          onChange={handleChange}
        />
      </label>
      <label>Adja meg a szállás árát: 
        <input
          type="number" 
          onChange={handleChange}
        />
      </label>
      <label>Adja meg a szálláson töltött éjszakákat: 
        <input
          type="text" 
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
