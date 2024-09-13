import React from 'react';
import { useParams } from 'react-router-dom';

const VolunteerDetailsPage = () => {
    const { serviceUserId } = useParams();

    // Assuming you have a function to retrieve service user details by ID
    const getServiceUserDetails = (id) => {
        // Logic to fetch service user details by ID
        // Return service user details object
    };

    const serviceUser = getServiceUserDetails(serviceUserId);

    if (!serviceUser) {
        return <div>Service user not found</div>;
    }

    return (
        <div>
            <h2>Service User Details</h2>
            <p><strong>User ID:</strong> {serviceUser.id}</p>
            <p><strong>Name:</strong> {serviceUser.name}</p>
            <p><strong>Email:</strong> {serviceUser.email}</p>
            {/* Display other details as needed */}
        </div>
    );
};

export default VolunteerDetailsPage;