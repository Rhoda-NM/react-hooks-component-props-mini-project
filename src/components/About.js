import React from 'react';

function About({image = "htttps://via.placeholder.com/215", about}) {
    return (
     <aside>
        <img src={image} alt="blog logo" />
        <p>{about} </p>
    </aside>
        
    )
}

export default About;