'use client'
import * as React from 'react';
import './navbarController.css'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Collapse, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const pages = [
    {
        namebtn: 'OtisKit',
        idComponent: '#oti-kit',
    },
    {
        namebtn: 'HCOS',
        idComponent: '#huge-collection-of-sections',
    },
    {
        namebtn: 'APFBW',
        idComponent: '#account-page-for-beautiful-webapps',
    },
    {
        namebtn: 'WOCP',
        idComponent: '#with-our-coded-pages',
    },
];


export default function navbarController() {
    const [open, setOpen] = React.useState(false);
    const [hide, setHide] = React.useState(true);

    const handleClick = () => {
        setHide(!hide)
        setOpen(!open);
    };

    return (
        <Container maxWidth="sm"
            sx={{
                position: 'fixed',
                boxSizing: 'border-box',
                opacity: '95%',
                zIndex: '1',
                bottom: '0px',
            }}
        >
            <Box className={'navbarController'}
                sx={{
                    backgroundColor: 'rgb(0,0,0, 0.5)',
                    position: 'fixed',
                    bottom: '20px',
                    left: '50%',
                    transform: 'translate(-50%,0%)',
                    borderRadius: '12px',
                    minWidth: '20%'
                }}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box sx={{
                        backgroundColor: 'black',
                        borderRadius: '9px',
                        m: '10px'
                    }}>
                        <Stack p={'20px'} spacing={2} color='white'>
                            <Stack direction={'row'} spacing={8} width={'100%'} justifyContent="space-between">
                                <Box>Winner</Box>
                                <Box>Winner</Box>
                                <Box>Winner</Box>
                            </Stack>
                            <Stack direction={'row'} spacing={2} width={'100%'} justifyContent="space-between">
                                <Box>Counter</Box>
                                <Box>Counter</Box>
                                <Box>Counter</Box>
                            </Stack>
                            <Stack direction={'row'} spacing={2} width={'100%'} justifyContent="space-between">
                                <Box>Blocker</Box>
                                <Box>Blocker</Box>
                                <Box>Blocker</Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Collapse>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
                        <Stack direction={'row'}
                            className='navbarController_home'
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            sx={{
                                animation: open?'scaleRowUP ease-out 0.1s': 'scaleRowDown ease-out 0.1s',
                                width: '100%' ,
                                backgroundColor: 'black',
                                borderRadius: '9px'
                            }}
                        >
                            <Typography
                                fontSize={'1rem'}
                                noWrap
                                component="a"
                                href="#"
                                sx={{
                                    ml: '15px',
                                    display: 'flex',
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                Home
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, color: 'white' }} justifyContent="flex-end">
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                    color="inherit"
                                >
                                    {open == false ? <MenuIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} /> : <CloseIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />}
                                </IconButton>
                            </Box>
                        </Stack>

                        {hide && (
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }} justifyContent="flex-end">
                                <Stack
                                    sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    {pages.map((page, index) => (
                                        <Button
                                            key={index}
                                            sx={{ my: 1, color: 'white', display: 'block' }}
                                            href={page.idComponent}
                                        >
                                            {page.namebtn}
                                        </Button>
                                    ))}
                                </Stack>
                            </Box>
                        )}
                    </Toolbar>
                </Container>
            </Box>
        </Container>
    );
}
