import React from 'react';
import Profile from './components/profile/Profile.js';
import './App.css';
export default class App extends React.Component{
  
  state = {
    randomNumber: 0,
    peopleCV:[
    {name:"Martha",
    age:27,
    country:"UK",
    skills:["Content making","SMM","taking surveys"],
    imgURL:'https://www.photocase.com/photos/3649621-portrait-of-a-pretty-woman-smiling-outdoors-smile-female-photocase-stock-photo-large.jpeg'
  },
    {name:"Sarah",
  age:24,
  country:"US",
  skills:["Design","User experience","Illustrations"],
  imgURL:'https://mh-1-stockagency.panthermedia.net/media/previews/0010000000/10956000/10956682_high.jpg'
  },
    {name:"Martin",
  age:27,
  country:"Canada",
  skills:["Accounting","Calculations","Mathematical analysis"],
  imgURL:'https://www.investnational.com.au/wp-content/uploads/2016/08/person-stock-2.png'
  },
  {name:"Alex",
  age:35,
  country:"South Africa",
  skills:["Management","Client service","Presentation"],
  imgURL:'https://www.pngitem.com/pimgs/m/128-1282867_businessperson-african-american-black-stock-photography-african-business.png'
  }
    ]   
  }

  render() {
    const RandomFun= () =>{
      
      this.setState({randomNumber: Math.floor(Math.random() * this.state.peopleCV.length)});
      this.setState();
    }
    return (
      <React.Fragment>
        <div className="main-page">
        <Profile person = {this.state.peopleCV[this.state.randomNumber]} />
        <button onClick={RandomFun}>Random Profile</button>
        </div>
      </React.Fragment>
    )
  }
}

  
