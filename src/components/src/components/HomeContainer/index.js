import React, { Component } from 'react';
import AppFrame from './../AppFrame';
import PodcastList from './../PodcastList'
import AppBar from '@material-ui/core/AppBar';
//Material UI 
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LinearProgress } from '@material-ui/core';
class HomeContainer extends Component {
    
    async componentDidMount(){
        console.log("Component did mount");
        this.callPodcastApi();
    }

    callPodcastApi = () =>{
        const URL = 'https://api.audioboom.com/channels/recommended';
        
        fetch(URL).then( (prom) => {
            return prom.json();
        }).then( data=> {
            this.setState({data});
        }).catch( error =>{
            console.log(error);
        })

    }

    render() {
        return (
            <div>
                <AppBar position= 'sticky'>
                    <Toolbar>
                        <Typography variant='title' color='inherit'>
                        Podcast-App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <AppFrame
                body={
                    this.state ?
                    <div>
                        <PodcastList podcasts={this.state.data.body}></PodcastList>
                    </div> :
                    <LinearProgress id="linearProgress"/>
                }
                ></AppFrame>
            </div>
        );
    }
}

export default  HomeContainer;