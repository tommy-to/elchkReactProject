import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'react-qr-code';

const SearchBar = (props) => {
    const volunteerData = props.volunteerData;
    const [search, setSearch] = useState("");
    const [volunteer, setVolunteer] = useState();

    const handleSearch = (e) => {
        e.preventDefault()
        console.log(`search ${search}`)
        setVolunteer(volunteerData.find(({id}) => {
            return id.toLowerCase()==search
        }))
    };

    useEffect(()=>{
        //console.log(volunteer)
    }, [volunteer])

    return (
        <div>
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

SearchBar.propTypes ={
    volunteerData : PropTypes.arrayOf(PropTypes.object)
}

export default SearchBar;