import React from 'react'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Post from './Post';


const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />ß
        </Box>
    )
}

export default Feed
