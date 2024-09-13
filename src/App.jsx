import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from './SearchBar';
import VolunteerDetailsPage from './VolunteerDetailsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SearchBar />} />
                <Route path="/volunteer-details" element={<VolunteerDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default App;