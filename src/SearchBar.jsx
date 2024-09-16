import React, { useState } from 'react';
import ElLogo from './assets/ElLogo.png';

const SearchBar = () => {
    const [serviceUsers, setServiceUsers] = useState([]);
    const [volunteerId, setVolunteerId] = useState('');

    const volunteerData = [
        {
            id: 'VD001',
            name: 'Tommy To',
            email: 'tommyto@example.com',
            serviceUsers: [
                { id: 'SU001', name: 'Service User 1', email: 'serviceuser1@example.com' },
                { id: 'SU002', name: 'Service User 2', email: 'serviceuser2@example.com' },
                { id: 'SU003', name: 'Service User 3', email: 'serviceuser3@example.com' },
                { id: 'SU004', name: 'Service User 4', email: 'serviceuser4@example.com' },
                { id: 'SU005', name: 'Service User 5', email: 'serviceuser5@example.com' },
                { id: 'SU006', name: 'Service User 6', email: 'serviceuser6@example.com' },
                { id: 'SU007', name: 'Service User 7', email: 'serviceuser7@example.com' },
                { id: 'SU008', name: 'Service User 8', email: 'serviceuser8@example.com' }
            ]
        },
        {
            id: 'VD002',
            name: 'Ting Lau',
            email: 'tinglau@example.com',
            serviceUsers: [
                { id: 'SU009', name: 'Service User 9', email: 'serviceuser9@example.com' },
                { id: 'SU010', name: 'Service User 10', email: 'serviceuser10@example.com' },
                { id: 'SU011', name: 'Service User 11', email: 'serviceuser11@example.com' },
                { id: 'SU012', name: 'Service User 12', email: 'serviceuser12@example.com' },
                { id: 'SU013', name: 'Service User 13', email: 'serviceuser13@example.com' },
                { id: 'SU014', name: 'Service User 14', email: 'serviceuser14@example.com' },
                { id: 'SU015', name: 'Service User 15', email: 'serviceuser15@example.com' },
                { id: 'SU016', name: 'Service User 16', email: 'serviceuser16@example.com' }
            ]
        }
    ];

    const handleSearch = () => {
        const selectedVolunteer = volunteerData.find((volunteer) => volunteer.id.toLowerCase() === volunteerId.toLowerCase());
        
        if (selectedVolunteer) {
            setServiceUsers([...selectedVolunteer.serviceUsers]);
        } else {
            setServiceUsers([]);
        }
    };

    const groupedServiceUsers = [];
    for (let i = 0; i < serviceUsers.length; i += 4) {
        groupedServiceUsers.push(serviceUsers.slice(i, i + 4));
    }

    return (
        <div>
        <img className="ElLogo" src={ElLogo} alt="ElLogo" />
            {volunteerId in volunteerData ? (
                    <div>
                        {groupedServiceUsers.map((group, index) => (
                            <div key={index} style={{ display: 'flex' }}>
                                {group.map((serviceUser) => (
                                    <div key={serviceUser.id} style={{ flex: 1, margin: '10px' }}>
                                        <p><strong>User ID:</strong> {serviceUser.id}</p>
                                        <p><strong>Name:</strong> {serviceUser.name}</p>
                                        <p><strong>Email:</strong> {serviceUser.email}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <input
                            className='searchBarCss'
                            type="text"
                            placeholder="Enter Volunteer ID"
                            value={volunteerId}
                            onChange={(e) => setVolunteerId(e.target.value)}
                        />
                        <button className="searchButtonCss" onClick={handleSearch}>Search</button>
                    </div>
                )}
        </div>
    );
};

export default SearchBar;