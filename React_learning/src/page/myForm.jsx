import { useState } from "react";

const FormValidation = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        location: "",
    });

    // Added the 'e' parameter here
    const handleChange = (e) => {
        const { name, value } = e.target;
        // This spreads the old data and updates only the field that changed
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Stringify so you can actually read the data in the alert
        alert(JSON.stringify(formData, null, 2));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username" // Matches the key in state
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter username" 
                />

                <input 
                    type="email"
                    name="email" // Matches the key in state
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email" 
                />

                <input 
                    type="text"
                    name="location" // Matches the key in state
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Enter location" 
                />

                <button type="submit">Save</button>
            </form>

            {/* Live Display */}
            <div style={{ marginTop: '20px', background: '#eee', padding: '10px' }}>
                <p>Typed Name: {formData.username}</p>
                <p>Typed Email: {formData.email}</p>
                <p>Typed Location: {formData.location}</p>
            </div>
        </div>
    );
}

export default FormValidation;