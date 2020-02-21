import React from 'react'

import coffee from '../assets/images/coffee.jpeg'

export const About = () => {
    const card = {
        height: '400px',
        maxWidth: '100%',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'

    }
    const cardItem = {
        height: '100%',
        margin: 'auto',
        maxWidth: '100%',
        color: 'white',
        padding: '20px 0'
    }
    const imgStyle = {
        maxWidth : '100%',
        maxHeight : '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div style={card}>
           <div style={cardItem}> 
           <h5>About me</h5>
           <hr/>
           <p>Hello, My name is Ridho Abdul Majid, Iam 25 years old, Iam a coffee, animals and coding lovers, I really enjoy my time learning and work as Software Engineer. I Live in Komplek Departemen Pertanian Atsiri Permai, Jl.Akar Wangi V no. 2 Citayam.
            Now Iam working as a Full Stack Developer in MG Holiday Group
           </p>
           <a href="linkedin.com"><i class="fa fa-linkedin"></i></a> 
           <a href="linkedin.com"><i class="fa fa-facebook"></i></a> 
           <a href="linkedin.com"><i class="fa fa-twitter"></i></a> 
           
           </div>
           <div style={cardItem}> 
           {/* image here boys */}
           <img src={coffee} style={imgStyle}></img>
           </div>
           
        </div>
    )
}

export default About