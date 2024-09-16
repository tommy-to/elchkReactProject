import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import ElLogo from './assets/ElLogo.png';

const volunteerData = [{
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
    ]},
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
    ]}];

const App = () => {
    const [search, setSearch] = useState("");
    const [volunteer, setVolunteer] = useState();

    //handle search on click or enter input
    const handleSearch = (e) => {
        e.preventDefault()
        //check search value
        //console.log(`search ${search}`)
        setVolunteer(volunteerData.find(({id}) => {
            return id.toLowerCase()==search
        }))
    };

    //check setVolunteer works properly after handleSearch
    useEffect(()=>{
        //console.log(volunteer)
    }, [volunteer])

    return (
        <div>
            <img className="ElLogo" src={ElLogo} alt="ElLogo" />
            {volunteer ?
                <div><strong>Name:</strong> {volunteer.name} <strong>Email:</strong> {volunteer.email}
                    <div style={{ display: 'flex', flexWrap:'wrap'}}>
                        {volunteer.serviceUsers.map((serviceUser) => (
                            <div key={serviceUser.id} style={{margin: '10px'}}>
                                <p>{serviceUser.name}</p>
                                <QRCode value={serviceUser.id} size={64}/>
                            </div>))}
                    </div>
                </div>
            : 
            <div>
                <form onSubmit={handleSearch}>
                    <input
                        className='searchBarCss'
                        type="text"
                        placeholder="Enter Volunteer ID"
                        onChange={(e)=> setSearch(e.target.value)}
                    />
                    <button className="searchButtonCss" type="submit">Search</button>
                </form>
            </div>}
        </div>
    );
};

export default App;