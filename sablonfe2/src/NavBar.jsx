import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <form className="container-fluid justify-content-start">
                <Link to={"/"}><button className="btn btn-outline-success me-2" type="button">Hangszerek</button></Link>
                <Link to={"/ujHangszer"}><button className="btn btn-sm btn-outline-secondary" type="button">Új hangszer</button></Link>
            </form>
        </nav>
    )
}
