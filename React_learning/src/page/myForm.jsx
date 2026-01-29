import { useState } from "react";

const FormValidation = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        location: "",
    });

   
    const handleChange = (e) => {
        const { name, value } = e.target;
       
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        alert(JSON.stringify(formData, null, 2));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="username" 
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter username" 
                />

                <input 
                    type="email"
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email" 
                />

                <input 
                    type="text"
                    name="location"
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