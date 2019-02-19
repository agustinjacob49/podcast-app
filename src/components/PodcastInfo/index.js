import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClipsList from '../ClipsList';


const PodcastInfo = ({podcast, podcastClips}) => {
  
  console.log(podcastClips);
  return (
    <div className="podcast-info">
          <Card className="podcast-item">
                  <CardMedia
                  component="img"
                  alt={podcast.body.channel.title}
                  height="140"
                  image={podcast.body.channel.urls.banner_image.original}
                  title={podcast.body.channel.title}
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          <h1>{podcast.body.channel.title}</h1> 
                          <p>"{podcast.body.channel.description}"</p>
                      </Typography>
                  </CardContent>
          </Card>
          <ClipsList clipsList={podcastClips.body.audio_clips}></ClipsList>
    </div>
  );
};

PodcastInfo.propTypes = {
  
};

export default PodcastInfo;
