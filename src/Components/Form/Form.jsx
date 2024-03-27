import { useState } from 'react';
import './Form.css'

const ContactForm = () => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [address, setAddress] = useState('');
        const [message, setMessage] = useState('');
        const [description, setDescription] = useState('');
        const [eventStart, setEventStart] = useState('');
        const [proponent, setProponent] = useState('');
        const [valuePerson, setValuePerson] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your form handling logic
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Address:', address);
        console.log('Message:', message);
        console.log('Description:', description);
        console.log('Event Start:', eventStart);
        console.log('Proponent:', proponent);
        console.log('Value Person:', valuePerson);
    };

return (
    <div className='container'>
        <form onSubmit={handleSubmit} style={styles} className='form_data'>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <div className="label-select" style={styles.labelSelect}>
                <label className='proponentlabel'>
                Proponent:
                <select
                    value={proponent}
                    onChange={(e) => setProponent(e.target.value)}
                >
                    <option value="">Select an option</option>
                    <option value="Proponent1">Proponent 1</option>
                    <option value="Proponent2">Proponent 2</option>
                    <option value="Proponent3">Proponent 3</option>
                </select>
                </label>
            </div>

            <button type="submit">Send Message</button>
        </form>
    </div>
);
};

const styles = {
container: {
    display: 'flex',
    flexDirection: 'column',
    width: '500px',
    padding: '10px',
},
labelSelect: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '10px',
},
}


export default ContactForm;