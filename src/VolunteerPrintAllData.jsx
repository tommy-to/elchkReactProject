import React, { useRef } from 'react';
import QRCode from 'react-qr-code';

const VolunteerPrintAllData = () => {
    const fakeDataList = [
        'Fake data 1',
        'Fake data 2',
        'Fake data 3',
        'Fake data 4',
        'Fake data 5',
        'Fake data 6',
        'Fake data 7',
        'Fake data 8'
    ];

    const qrCodes = fakeDataList.map((data, index) => (
        <div key={index} style={{ width: '40%', padding: '10px' }}>
            <QRCode value={data} size={100} />
        </div>
    ));

    const handlePrintAll = () => {
        const printButton = printButtonRef.current;
        printButton.style.display = 'none';
        window.print();
        printButton.style.display = 'block';
    };

    const printButtonRef = useRef(null);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {qrCodes}
            <button ref={printButtonRef} className="printButton" onClick={handlePrintAll}>
                Print QR Codes
            </button>
        </div>
    );
};

export default VolunteerPrintAllData;