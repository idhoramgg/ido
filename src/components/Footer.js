import React from 'react'

export const Footer = () => {
    
    const footerS = {
        position: "fixed",
        left: "0",
        bottom: '0',
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center'
    }

    return (
        <div className="container">
            <div style={footerS}>
                <h5> Made with &hearts; in Citayam</h5>
                <h5> Copyright 2020 </h5>
            </div>
        </div>
    )
}

export default Footer;
