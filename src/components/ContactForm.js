import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const theme = useTheme();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);  // New state to control form visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required.";
        if (!formData.email) {
            tempErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid.";
        }
        if (!formData.company) tempErrors.company = "Company is required.";
        if (!formData.message) tempErrors.message = "Message is required.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then((result) => {
                console.log(result.text);
                setIsFormSubmitted(true);  // Update state to hide form
            }, (error) => {
                console.log(error.text);
            });
        }
    };

    // CSS styles using MUI theme
    const styles = {
        formContainer: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            maxWidth: '500px',
            margin: 'auto',
            padding: '20px',
            borderRadius: '25px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#424242',
            border: theme.palette.mode === 'light' ? '#072b40 solid 2px' : '#573d0a solid 2px',
            opacity: '.85',
        },
        inputField: {
            marginBottom: '10px',
            padding: '0px',
            display: 'grid',
        },
        label: {
            marginBottom: '5px',
            fontWeight: 'bold',
        },
        input: {
            padding: '8px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px',
        },
    };

    if (isFormSubmitted) {
        return (
            <div style={{ ...styles.formContainer, paddingTop: '10px' , marginTop: '100px'}}>
                Thanks for you reaching out, {formData.name}. I will contact you at {formData.email} soon. You will receive a confirmation email shortly!
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={styles.formContainer}>
            <div style={styles.inputField}>
                <label style={styles.label}>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.input} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
            </div>
            <div style={styles.inputField}>
                <label style={styles.label}>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div style={styles.inputField}>
                <label style={styles.label}>Company:</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} style={styles.input} />
                {errors.company && <p style={{ color: 'red' }}>{errors.company}</p>}
            </div>
            <div style={styles.inputField}>
                <label style={styles.label}>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} style={styles.input}></textarea>
                {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
            </div>
            <button type="submit" style={styles.button}>Submit</button>
        </form>
    );
}

export default ContactForm;
