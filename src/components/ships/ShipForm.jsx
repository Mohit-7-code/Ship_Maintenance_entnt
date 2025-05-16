import React, { useState, useEffect } from 'react';
import '../../styles/main.css'; // adjust path if needed

const ShipForm = ({ onSave, editingShip }) => {
    const [formData, setFormData] = useState({
        name: '',
        imo: '',
        flag: '',
        status: ''
    });

    useEffect(() => {
        if (editingShip) {
            setFormData(editingShip);
        } else {
            setFormData({ name: '', imo: '', flag: '', status: '' });
        }
    }, [editingShip]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        setFormData({ name: '', imo: '', flag: '', status: '' });
    };

    return (
        <div className="form-container">
            <h2>{editingShip ? 'Edit Ship' : 'Add Ship'}</h2>
            <form onSubmit={handleSubmit} className="ship-form-vertical">
                <input
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="ship-form-input-vertical"
                />
                <input
                    name="imo"
                    placeholder="IMO Number"
                    value={formData.imo}
                    onChange={handleChange}
                    required
                    className="ship-form-input-vertical"
                />
                <input
                    name="flag"
                    placeholder="Flag"
                    value={formData.flag}
                    onChange={handleChange}
                    required
                    className="ship-form-input-vertical"
                />
                <input
                    name="status"
                    placeholder="Status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                    className="ship-form-input-vertical"
                />
                <button type="submit" className="ship-form-submit-btn-vertical">
                    {editingShip ? 'Update' : 'Add'}
                </button>
            </form>
        </div>
    );
};

export default ShipForm;
