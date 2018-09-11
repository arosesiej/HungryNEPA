import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';


var foursquare = require('react-foursquare')({
  clientID: 'YH1MGBT1DVG0O52J5II0BEFO0DADRGCI3XEKH0JPT3MCBYEH',
  clientSecret: 'NZHCTCF42FEWOV4YPAO1WO1MKGBX0Z2XCHM3IKOCPNVIOQLQ'  
});

var params = {
  "near": "Wilkes-Barre, PA",
  "categoryId": '4d4b7105d754a06374d81259',
  "radius":"250"
};

export default class FoursquareDemo extends Component {

  constructor(props) {
     super(props);
     this.state = {
       items: [],
       places: []
       
     };
   }

  componentDidMount() {    
    foursquare.venues.getVenues(params)
      .then(res=> {
        this.setState({ 
          items: res.response.venues,
          places: foursquare.venues.getVenue(res.response.venues.id)
         });
      });


    
  
      

    
    
   



  }


  render() {
    return (
    <div>
        <div>Items:</div>
        { this.state.items.map(item=> { return <div key={item.id}>{item.name} - {item.location.city} - {item.id}</div>}) }
        <br />
        
    </div>
  )
  }
}

ReactDOM.render(
  <FoursquareDemo />,
  document.getElementById('root')
);
