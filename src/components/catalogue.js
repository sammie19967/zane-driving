import React from "react";
import proboxImage from "./vehicles/probox.jpg";
import vitzImage from "./vehicles/vitz.jpg";
import motorbikeImage from "./vehicles/motorbike.jpg";
import lorryImage from "./vehicles/lorry.png";
import vanImage from "./vehicles/van.jpg";
import busImage from "./vehicles/bus.png";
import "./styles/Catalogue.css";
import { useNavigate } from "react-router-dom";

const vehicles = [
    {
        id: 1,
        name: "Probox",
        class: "B light",
        cost: "Ksh.15000",
        image: proboxImage,
        requirement: "ID",
        bgColor: "#f7c6c7", 
    },
    {
        id: 2,
        name: "Vitz",
        class: "B2 Automatic",
        cost: "Ksh.15000",
        image: vitzImage,
        requirement: "ID",
        bgColor: "#ffd59e", // Background color for Vitz
    },
    {
        id: 3,
        name: "Motorbike",
        class: "A1 A2",
        cost: "Ksh.7000",
        image: motorbikeImage,
        requirement: "ID",
        bgColor: "#d4f0f0", // Background color for Motorbike
    },
    {
        id: 4,
        name: "Light Truck",
        class: "Class C 1",
        cost: "Ksh.9000",
        image: lorryImage,
        requirement: "ID and DL",
        bgColor: "#c8e6c9", // Background color for Light Truck
    },
    {
        id: 5,
        name: "Psv",
        class: "D1",
        cost: "Ksh.9000",
        image: vanImage,
        requirement: "ID and DL",
        bgColor: "#ffecb3", // Background color for PSV
    },
    {
        id: 6,
        name: "Bus",
        class: "D2",
        cost: "Coming Soon",
        image: busImage,
        requirement: "ID and DL",
        bgColor: "#c5cae9", // Background color for Bus
    },
];

const Catalogue = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        alert("Welcome to Zane Driving School! Fill the Application form to proceed");
        navigate("/ApplicationForm");
    };

    return (
        <div className="catalogue-container">
            <h2>Driving Courses</h2>
            <div className="catalogue-grid">
                {vehicles.map((vehicle) => (
                    <div
                        key={vehicle.id}
                        className="catalogue-item"
                        style={{ backgroundColor: vehicle.bgColor }} // Set individual bgColor
                    >
                        <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="vehicle-image"
                        />
                        <h3>{vehicle.name}</h3>
                        <p>Class: {vehicle.class}</p>
                        <p>Cost: {vehicle.cost}</p>
                        <p>Requirement: {vehicle.requirement}</p>
                        <button onClick={handleClick}>Apply</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogue;
