import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>Web Service Books</h2>
            <h3>A mind without knowledge is <br />like a car without gas</h3>
            <Link className="btn" to="/books">View All Books</Link>
        </section>
    )
}

export default Hero
