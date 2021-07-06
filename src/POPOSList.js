
import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.json'

function POPOSList() {

    const spaces = data.map((obj) => {
        // Make a variable for each property
        const { title, address, images, hours, i } = obj

        return (
            <POPOSSpace
                id={i}
                key={title}
                name={title} // no need for obj. here
                address={address}
                image={images[0]}
                hours={hours}
            />
        )
    })

    return (
        <div className="POPOSList">
            {spaces}
        </div>
    )
}

export default POPOSList