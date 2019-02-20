import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@material-ui/core';

const ClipsList = ({clipsList}) => {
    
    const renderClipItem = (clipsList) =>{
        return (clipsList.map(clip =>
                <ListItem key={clip.id} >
                    <ListItemText primary={clip.title} secondary={clip.updated_at} />
                </ListItem>
            ));
    }
    
    return (
        <div>
            <List>{renderClipItem(clipsList)}</List>
        </div>
    );
};

ClipsList.propTypes = {
    clipsList : PropTypes.array.isRequired,
};

export default ClipsList;