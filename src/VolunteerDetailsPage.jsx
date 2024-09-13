import React from 'react';

const VolunteerDetailsPage = ({ volunteerId, volunteerData }) => {
    if (!(volunteerId in volunteerData)) {
        return <div>Volunteer not found.</div>;
    }

    const volunteer = volunteerData[volunteerId];

    return (
        <div>
            <h1>Volunteer Details</h1>
            <p><strong>ID:</strong> {volunteer.id}</p>
            <p><strong>Name:</strong> {volunteer.name}</p>
            <p><strong>Email:</strong> {volunteer.email}</p>

            <h2>Service Users</h2>
            {volunteer.serviceUsers.map((serviceUser) => (
                <div key={serviceUser.id}>
                    <p><strong>User ID:</strong> {serviceUser.id}</p>
                    <p><strong>Name:</strong> {serviceUser.name}</p>
                    <p><strong>Email:</strong> {serviceUser.email}</p>
                </div>
            ))}
        </div>
    );
};

export default VolunteerDetailsPage;