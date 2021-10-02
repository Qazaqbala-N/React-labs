import React from "react";
import './profilestyle.css'
export default class Profile extends React.Component {
    render() {
        const {name,age,skills,country,imgURL} = this.props.person;
        const listItems = skills.map((number) =><li>{number}</li>);
    return(
        <div className="page">
        <h1>Random profile - React application</h1>
        <div className="Profile">
            <img src={imgURL} alt="photo" />
            <h3>{name}</h3>
            <p>Age:<b>{age}</b></p>
            <p>Country:<b>{country}</b></p>                        
            <p>Skills:</p>
            <ul>{listItems}</ul>          
        </div>
        </div>
    )
}
};

