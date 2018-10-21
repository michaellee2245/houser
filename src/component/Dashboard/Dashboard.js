import React, { Component } from 'react';
import axios from 'axios';
import House from './component/House/House';

class Dashboard extends Component {


    render(){

        return(
            <div>
                Dashboard
                <House />
            </div>
        )
            
        
    }
}

export default Dashboard;