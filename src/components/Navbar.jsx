import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import LocalPostOfficeTwoToneIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })

    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: "40%"
    }))
    const UserBox = styled(Box)(({ theme }) => ({
        // backgroundColor: "white"
        display: "flex",
        gap: "10px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none",

        }
    }))
    const Icon = styled(Box)(({ theme }) => ({
        // backgroundColor: "white"
        display: "none",
        gap: "20px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    }))

    return (
        <AppBar
            bgcolor="pink"
            position="sticky"
        >
            <StyledToolbar>
                <Typography
                    variant='h6'
                    sx={{ display: { xs: "none", sm: 'block' } }}
                >
                    VISHWAS
                </Typography>
                <PetsIcon
                    sx={{ display: { xs: "block", sm: 'none' } }}
                />
                <Search>
                    <InputBase placeholder='search....' />
                </Search>
                <Icon>
                    <Badge badgeContent={4} color='error'>
                        <LocalPostOfficeTwoToneIcon ></LocalPostOfficeTwoToneIcon>
                    </Badge>
                    <Badge badgeContent={4} color='error'>
                        <NotificationsIcon ></NotificationsIcon>
                    </Badge>
                    <Avatar sx={{ width: "30px", height: "30px" }} />
                </Icon>
                <UserBox>
                    <Avatar sx={{ width: "30px", height: "30px" }} />
                    <Typography variant='span'>Vish</Typography>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar
