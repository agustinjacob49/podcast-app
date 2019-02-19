import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';
import './index.css';

class PodcastItem extends Component {
    
    constructor(props){
        super(props);

        const {podcast} = this.props;
        this.state = {
            podcast
        }
    }
    
    handleOnClickButton = () => {
        console.log("CLICK");
        const {id} = this.state.podcast;
        this.props.history.push(`/podcast/${id}`);
    }
    render (){
    const {podcast} = this.state;
    return (
        <div className="podcast-item">
            <Card className="podcast-item" onClick={this.handleOnClickButton}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={podcast.title}
                    height="140"
                    image={podcast.urls.logo_image.original}
                    title={podcast.title}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {podcast.title}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
    }
}

PodcastItem.propTypes = {
    
};

export default  withRouter(PodcastItem);