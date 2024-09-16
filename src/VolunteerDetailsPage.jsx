//import React from 'react';
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import QRCode from 'react-qr-code';

const VolunteerDetailsPage = (props) => {
    const volunteer = props.volunteer
    let location = useLocation()
    
    // Assuming you have a function to retrieve service user details by ID
    return (
        <div><strong>Volunteer ID:</strong> {volunteer.id}
            <div style={{ display: 'flex', flexWrap:'wrap'}}>
                {volunteer.serviceUsers.map((serviceUser) => (
                    <div key={serviceUser.id} style={{margin: '10px'}}>
                        <p>{serviceUser.name}</p>
                        <QRCode value={serviceUser.id} size={64}/>
                    </div>))}
            </div>
        </div>
    );
};

VolunteerDetailsPage.propTypes={
    volunteer : PropTypes.object
}

export default VolunteerDetailsPage;