import React from 'react';
import './styles/Catalogue.css';

const vehicles = [
    { id: 1, name: 'Toyota Corolla', class: 'Class B', cost: '€500', image: './vehicles/toyota-corolla.jpg' },
    { id: 2, name: 'Honda Civic', class: 'Class B', cost: '€520', image: './vehicles/honda-civic.jpg' },
    { id: 3, name: 'Mercedes Benz Actros', class: 'Class C', cost: '€800', image: './vehicles/mercedes-actros.jpg' },
    { id: 4, name: 'Volvo FH16', class: 'Class C', cost: '€820', image: './vehicles/volvo-fh16.jpg' },
    { id: 5, name: 'Yamaha YZF-R3', class: 'Class A', cost: '€300', image: './vehicles/yamaha-yzfr3.jpg' },
    { id: 6, name: 'Kawasaki Ninja 400', class: 'Class A', cost: '€320', image: './vehicles/kawasaki-ninja400.jpg' }
];

const Catalogue = () => {
    return (
        <div className="catalogue-container">
            <h2>Our Vehicle Catalogue</h2>
            <div className="catalogue-grid">
                {vehicles.map(vehicle => (
                    <div key={vehicle.id} className="catalogue-item">
                        <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
                        <h3>{vehicle.name}</h3>
                        <p>Class: {vehicle.class}</p>
                        <p>Cost: {vehicle.cost}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogue;
