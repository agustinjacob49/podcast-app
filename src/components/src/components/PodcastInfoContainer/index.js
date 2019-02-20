import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import AppFrame from './../AppFrame';
//Material UI 
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PodcastInfo from "./../PodcastInfo";
import { LinearProgress } from '@material-ui/core';
import {END_POINT_CHANNELS} from './../../constants/api_urls';


export default class PodcastInfoContainer extends Component {
    
    constructor(props){
        super(props);
  
          this.state = {
              id :null,
          }
  
    }
  
  
    async componentDidMount(){
        if (this.props.match.params){
          const {id} = this.props.match.params;
          this.setState({id : this.props.match.params});
          this.getPodcastClips(id);
          this.getPodcastInfo(id);
      }
    }
  
    getPodcastClips = id => {
      const URL = `${END_POINT_CHANNELS}${id}/audio_clips`;
      fetch(URL).then( (prom) => {
          return prom.json();
      }).then( podcastClips=> {
          this.setState({podcastClips});
          console.log(podcastClips);
      }).catch( error =>{
          console.log(error);
      })
  
    }
  
    getPodcastInfo = id => {
      const URL = `${END_POINT_CHANNELS}${id}`;
      fetch(URL).then( (prom) => {
          return prom.json();
      }).then( podcast=> {
          this.setState({podcast});
          console.log(podcast);
      }).catch( error =>{
          console.log(error);
      })
  
    }

    handleOnClickBar = () =>{
        this.props.history.push("/");
    }
  
  
  
    render() {
    return (
      <div>
        <AppBar position= 'sticky' onClick={this.handleOnClickBar} >
                    <Toolbar>
                        <Typography variant='title' color='inherit'>
                        Podcast-App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <AppFrame
                body={
                    this.state.podcast && this.state.podcastClips ?
                    <div>
                        <PodcastInfo podcast={this.state.podcast} podcastClips={this.state.podcastClips} ></PodcastInfo>
                    </div> :
                    <LinearProgress id="linearProgress"/>
                }
                ></AppFrame>
      </div>
    )
  }
}
