import React, { useState } from 'react';
import "./styles/ApplicationForm.css";
import logo from "../assets/logo.png";

const counties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo",
    "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui",
    "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori",
    "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri",
    "Samburu", "Siaya", "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans Nzoia", "Turkana",
    "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
];

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        names: '',
        gender: '',
        phoneNumber: '',
        email: '',
        age: '',
        county: '',
        preferredCampus: '',
        accommodation: '',
        courseChoice: '',
        applicationType: '',
        dlCopy: null,
        preferredClass: '',
        nationality: '',
        startDate: '',
        declaration: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add form submission logic here
        alert('Application Submitted Successfully');
    };

    return (
        <form onSubmit={handleSubmit}>
            <img src={logo}

                alt="logo" />
            <h1>Application Form</h1>
            <p>Thanks for choosing Zane Driving School.Please enter your details in the fields below</p>
            <div>
                <label>Input Names as they appear on ID:</label>
                <input type="text" placeholder="e.g Zane David" name="names" value={formData.names} onChange={handleChange} required />
            </div>
            <div>
                <label>Gender:</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>

                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">other</option>
                </select>

            </div>
            <div>
                <label>Phone Number:</label>
                <input type="tel" placeholder='e.g 0725153581' name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" placeholder="zane@gmail.com" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" placeholder='e.g 18' name="age" value={formData.age} onChange={handleChange} required />
            </div>
            <div>
                <label>County:</label>
                <select name="county" value={formData.county} onChange={handleChange} required>
                    <option value="">Select your county</option>
                    {counties.map((county) => (
                        <option key={county} value={county}>{county}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Preferred Campus:</label>
                <select name="preferredCampus" value={formData.preferredCampus} onChange={handleChange} required>
                    <option value="">Select a campus</option>
                    <option value="Kaiboi">Kaiboi</option>
                    <option value="Nakuru">Nakuru</option>
                    <option value="Eldoret">Eldoret</option>
                </select>
            </div>
            <div>
                <label>Would you like Accommodation?</label>
                <div>
                    <label>
                        <input type="radio" name="accommodation" value="Yes" checked={formData.accommodation === 'Yes'} onChange={handleChange} required />
                        Yes
                    </label>
                    <label>
                        <input type="radio" name="accommodation" value="No" checked={formData.accommodation === 'No'} onChange={handleChange} required />
                        No
                    </label>
                </div>
            </div>
            <div>
                <label>Course of your Choice:</label>
                <select name="courseChoice" value={formData.courseChoice} onChange={handleChange} required>
                    <option value="">Select a course</option>
                    <option value="Computer Packages">Computer Packages</option>
                    <option value="Driving Courses">Driving Courses</option>
                </select>
            </div>
            {formData.courseChoice === 'Driving Courses' && (
                <>
                    <div>
                        <label>Application Type:</label>
                        <select name="applicationType" value={formData.applicationType} onChange={handleChange} required>
                            <option value="">Select application type</option>
                            <option value="Refresher">Refresher</option>
                            <option value="New Student">New Student</option>
                            <option value="Endorsement">Endorsement</option>
                        </select>
                    </div>
                    {(formData.applicationType === 'Refresher' || formData.applicationType === 'Endorsement') && (
                        <div>
                            <label>Upload a copy of your DL:</label>
                            <input type="file" name="dlCopy" onChange={handleChange} required />
                        </div>
                    )}
                    <div>
                        <label>Preferred Class:</label>
                        <select name="preferredClass" value={formData.preferredClass} onChange={handleChange} required>
                            <option value="">Select a class</option>
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="B Light">B Light</option>
                            <option value="B Automatic">B Automatic</option>
                            <option value="C1">C1</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                </>
            )}
            <div>
                <label>Nationality:</label>
                <select name="nationality" value={formData.nationality} onChange={handleChange} required>
                    <option value="">Select nationality</option>
                    <option value="Kenyan">Kenyan</option>
                    <option value="Alien">Alien</option>
                </select>
            </div>
            <div>
                <label>When you wish to Join:</label>
                <input type="month" name="startDate" value={formData.startDate} onChange={handleChange} required placeholder={new Date().toISOString().slice(0, 7)} />
            </div>
            <div>
                <label>
                    <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleChange} required />
                    I declare that the information provided is accurate and complete.
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ApplicationForm;
