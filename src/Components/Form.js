import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!name) newErrors.name = "Name is required.";
        if (!phone) newErrors.phone = "Phone number is required.";
        else if (!/^\d{10}$/.test(phone)) newErrors.phone = "Phone number must be exactly 10 digits.";
        if (!email) newErrors.email = "Email is required.";
        if (!dob) newErrors.dob = "Date of Birth is required.";
        if (!address) newErrors.address = "Address is required.";
        if (name.length > 15) newErrors.name = "Name must be 15 characters or less.";
        if (/\d/.test(name)) newErrors.name = "Name cannot contain numbers.";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log("Form submitted successfully!!! ");
            navigate('/details', { state: { name, phone, email, dob, address } });
        }
    };

    return (
        <div className="form">
        <div className="form-container">
            <h2>User Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label>Date of Birth:</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                    {errors.dob && <span className="error">{errors.dob}</span>}
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {errors.address && <span className="error">{errors.address}</span>}
                </div>
                <div className="btns">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Form;