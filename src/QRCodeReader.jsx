import React, { useState, useEffect } from 'react';
import { getVolunteerDataFromDatabase } from './api';

const QRCodeReader = () => {
    const [volunteer, setVolunteer] = useState(null);
    const qrCodeVolunteerId = 'VD001';

    useEffect(() => {
        const fetchVolunteerData = async () => {
            try {
                const volunteerData = await getVolunteerDataFromDatabase(qrCodeVolunteerId);
                setVolunteer(volunteerData);
            } catch (error) {
                console.error('Error fetching volunteer data:', error);
            }
        };

        fetchVolunteerData();
    }, [qrCodeVolunteerId]);

    return (
        <div>
            {volunteer ? (
                <>
                    <p>Volunteer ID: {volunteer.id}</p>
                    <p>Volunteer Name: {volunteer.name}</p>
                    <p>Volunteer Email: {volunteer.email}</p>
                </>
            ) : (
                <p>Loading volunteer data...</p>
            )}
        </div>
    );
};

export default QRCodeReader;