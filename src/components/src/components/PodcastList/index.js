import React from 'react';
import PropTypes from 'prop-types';
import PodcastItem from '../PodcastItem';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import './index.css';


const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  });

  

const PodcastList = ({podcasts, width}) => {


  const getGridListCols = () => {
    if (isWidthUp('xl', width)) {
      return 8;
    }

    if (isWidthUp('lg', width)) {
      return 6;
    }

    if (isWidthUp('md', width)) {
      return 4;
    }

    if (isWidthUp('sm', width)) {
      return 2;
    }

    if (isWidthUp('xs', width)) {
      return 1
    }
    
  }
    
    const renderPodcastItem = podcasts => {
        console.log(podcasts);
        return ( podcasts.map( podcast => 
            <GridListTile key={podcast.id} cols={1}>
                <PodcastItem key={podcast.id} podcast={podcast} ></PodcastItem>
            </GridListTile>    
        ));
    }
    
    return (
        <GridList cellHeight={300}  className="gridList" cols={getGridListCols()}>
            { renderPodcastItem(podcasts) } 
        </GridList>
    );
};

PodcastList.propTypes = {
  podcasts : PropTypes.array.isRequired,
};

export default withWidth()(PodcastList);