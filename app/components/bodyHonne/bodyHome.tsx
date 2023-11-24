'use client'
import React, { useState } from 'react'
import { Container, Stack, Divider, Box, Typography, Grid, Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import PriceChangeIcon from '@mui/icons-material/ContentCopy';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './bodyHome.css'

const achievements = [
    {
        numberGot: '300+',
        title: 'Coded Elements',
        description: 'From buttons, to inputs, navbars, alerts or cards, you are covered',
    },
    {
        numberGot: '100+',
        title: 'Design Blocks',
        description: 'Mix the sections, change the colors and unleash your creativity',
    },
    {
        numberGot: '41',
        title: 'Pages',
        description: 'Save 3-4 weeks of work when you use our pre-made pages for your websited',
    }
]

const materialKits = [
    {
        icon: <ContentCopyIcon />,
        title: 'Full Documentation',
        description: 'Built by developers for developers. Check the foundation and you will find everything inside our documentation.'
    },
    {
        icon: <CopyAllIcon />,
        title: 'MUI Ready',
        description: "The world's most popular react components library for building user interfaces."
    },
    {
        icon: <PriceChangeIcon />,
        title: 'Save Time & Money',
        description: 'Creating your design from scratch with dedicated designers can be very expensive. Start with our Design System.'
    },
    {
        icon: <PhonelinkIcon />,
        title: 'Fully Responsive',
        description: 'Regardless of the screen size, the website content will naturally fit the given resolution.'
    },
]

const HugeCollectionOfSections = [
    {
        img: '/images/imgBodyHome3.jpg',
        title: 'Features',
        description: '14 Examples',
    },
    {
        img: '/images/imgBodyHome2.jpg',
        title: 'Page Headers',
        description: '10 Examples',
    },
    {
        img: '/images/imgBodyHome4.jpg',
        title: 'Pricing',
        description: '8 Examples',
    },

]

const complexDocumentation = [
    {
        icon: <ContentCopyIcon />,
        title: 'Getting Started',
        description: 'Check the possible ways of working with our product and the necessary files for building your own project.',
    },
    {
        icon: <ContentCopyIcon />,
        title: 'Getting Started',
        description: 'Check the possible ways of working with our product and the necessary files for building your own project.',
    },
    {
        icon: <ContentCopyIcon />,
        title: 'Getting Started',
        description: 'Check the possible ways of working with our product and the necessary files for building your own project.',
    },
]

export default function bodyHome() {
    const [isShown, setIsShown] = useState([false, 4])
    return (
        <Container sx={{
            position: 'relative',
            maxWidth: '97% !important'
        }}>
            <Box sx={{
                position: 'absolute',
                width: '100%',
                height: 'auto',
                backgroundColor: 'rgb(255 255 255 / 80%)',
                backdropFilter: `blur(20px)`,
                top: '-70px',
                borderRadius: '12px',
                left: '50%',
                transform: 'translate(-50%,0%)',
            }}>
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={8}
                >
                    <Stack
                        direction={{ xs: 'column', sm: 'column', md: 'row' }}
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        sx={{ margin: '50px 20%', textAlign: 'center' }}
                        divider={<Divider orientation="vertical" flexItem
                        />}>
                        {achievements.map((item) => {
                            return <Box>
                                <Stack
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={1}>
                                    <h1 style={{ color: 'rgb(50 140 237)', fontSize: '3rem', fontWeight: '700' }}>{item.numberGot}</h1>
                                    <Typography sx={{ fontSize: 21, fontWeight: '600' }} color="black" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                                        {item.description}
                                    </Typography>
                                </Stack>
                            </Box>
                        })}
                    </Stack>
                    {/* feel-the-material-kit */}
                    <Container id='feel-the-material-kit' >
                        <Box sx={{ mx: '5%' }}>
                            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={8} sm={8} md={4} >
                                    <Box sx={{ height: { xs: '400px', md: '100%' }, width: '100%', }}>
                                        <Box sx={{
                                            backgroundImage: `url(/images/imgBodyHome.jpg)`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center top',
                                            backgroundSize: 'cover',
                                            height: '100%',
                                            width: '100%',
                                            borderRadius: '9px'
                                        }}>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={8}>
                                    <Box>
                                        <Stack spacing={2}>
                                            <Grid container spacing={{ xs: 5, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                                {materialKits.map((item) => {
                                                    return <Grid item sm={6} columnSpacing={{ xs: 1, sm: 2 }}>
                                                        <Box px={'30px'}>
                                                            <Typography sx={{ fontSize: 24, color: 'rgb(50 140 237)' }}>{item.icon}</Typography>
                                                            <Typography sx={{ fontSize: 20, color: 'black', fontWeight: '600', my: '10px' }}>{item.title}</Typography>
                                                            <Typography color="text.secondary">{item.description}</Typography>
                                                        </Box>
                                                    </Grid>
                                                })}
                                            </Grid>
                                        </Stack>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>

                    {/* Huge-collection-of-sections*/}
                    <Container id='huge-collection-of-sections'>
                        <Stack alignItems="center" color={'#344767'} spacing={6}>
                            <Box sx={{
                                textAlign: 'center',
                                width: { xs: '70%', md: '50%' },
                            }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    backgroundColor: 'rgb(174, 206, 247)',
                                    color: 'rgb(9, 91, 198)',
                                    padding: '5px',
                                    borderRadius: '9px'
                                }}>INFINITE COMBINATIONS</span>
                                <Typography sx={{ fontSize: '2.5rem', fontWeight: '700', my: '0.5rem' }}>Huge collection of sections</Typography>
                                <Typography color="text.secondary">We have created multiple options for you to put together and customise into pixel perfect pages.</Typography>
                            </Box>
                            <Box width={'100%'}>
                                <Grid container xs={12} columns={{ xs: 4, sm: 8, md: 12 }} spacing={4}>
                                    <Grid item xs={3}>
                                        <Box width={{ xs: '100%', md: '95%' }} position={'sticky'} top={'80px'}>
                                            <Typography sx={{ fontSize: '1.75rem', fontWeight: '700' }}>Design Blocks</Typography>
                                            <Typography color="text.secondary">A selection of 45 page sections that fit perfectly in any combination</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Box>
                                            <Stack
                                                direction={'column'}
                                                spacing={{ xs: 1, sm: 2, md: 4 }}
                                            >
                                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 4, sm: 2, md: 4 }}>
                                                    {HugeCollectionOfSections.map((item) => {
                                                        return <Box>
                                                            <img src={item.img} alt="image" style={{ height: '80%', borderRadius: '12px', margin: '0px' }} />
                                                            <Typography sx={{ fontSize: '1rem', fontWeight: '700', }}>{item.title}</Typography>
                                                            <Typography fontSize={'0.75rem'} color="text.secondary">{item.description}</Typography>
                                                        </Box>
                                                    })}
                                                </Stack>

                                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 4, sm: 2, md: 4 }}>
                                                    {HugeCollectionOfSections.map((item) => {
                                                        return <Box>
                                                            <img src={item.img} alt="image" style={{ height: '80%', borderRadius: '12px', margin: '0px' }} />
                                                            <Typography sx={{ fontSize: '1rem', fontWeight: '700', }}>{item.title}</Typography>
                                                            <Typography fontSize={'0.75rem'} color="text.secondary">{item.description}</Typography>
                                                        </Box>
                                                    })}
                                                </Stack>
                                            </Stack>
                                        </Box>
                                        <Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box width={'100%'}>
                                <Grid container xs={12} columns={{ xs: 4, sm: 8, md: 12 }} spacing={4}>
                                    <Grid item xs={3}>
                                        <Box width={{ xs: '100%', md: '95%' }} position={'sticky'} top={'80px'}>
                                            <Typography sx={{ fontSize: '1.75rem', fontWeight: '700' }}>Design Blocks</Typography>
                                            <Typography color="text.secondary">A selection of 45 page sections that fit perfectly in any combination</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Box>
                                            <Stack
                                                direction={'column'}
                                                spacing={{ xs: 1, sm: 2, md: 4 }}
                                            >
                                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 4, sm: 2, md: 4 }}>
                                                    {HugeCollectionOfSections.map((item) => {
                                                        return <Box>
                                                            <img src={item.img} alt="image" style={{ height: '80%', borderRadius: '12px', }} />
                                                            <Typography sx={{ fontSize: '1rem', fontWeight: '700', }}>{item.title}</Typography>
                                                            <Typography fontSize={'0.75rem'} color="text.secondary">{item.description}</Typography>
                                                        </Box>
                                                    })}
                                                </Stack>

                                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 4, sm: 2, md: 4 }}>
                                                    {HugeCollectionOfSections.map((item) => {
                                                        return <Box>
                                                            <img src={item.img} alt="image" style={{ height: '80%', borderRadius: '12px', margin: '0px' }} />
                                                            <Typography sx={{ fontSize: '1rem', fontWeight: '700', }}>{item.title}</Typography>
                                                            <Typography fontSize={'0.75rem'} color="text.secondary">{item.description}</Typography>
                                                        </Box>
                                                    })}
                                                </Stack>
                                            </Stack>
                                        </Box>
                                        <Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    </Container>

                    {/* Account Pages for beautiful webapps */}
                    <Box id='account-page-for-beautiful-webapps' width={'100%'}>
                        <Box sx={{ backgroundImage: `url(/images/backgroundBody.png)`, overflow: 'auto', height: '400px', width: 'auto' }}>
                            <Box color={'white'} sx={{ p: '50px 15%' }}>
                                <Grid container direction={{ sm: 'column', xl: 'row' }} spacing={4}>
                                    <Grid item xs={4}>
                                        <Stack>
                                            <Typography sx={{ fontSize: '2rem', lineHeight: '2.5rem', fontWeight: '700' }}>
                                                Account Pages for beautiful webapps
                                            </Typography>
                                            <Typography my={'30px'} color={'lightgray'}>
                                                We created many examples for pages like Signup, Signin, Forgot Password, 2FA Authentification and so on. Just choose between a Basic Design, an illustration or a cover and you are good to go!
                                            </Typography>
                                        </Stack>
                                        <Stack direction={'row'} spacing={4}>
                                            <Button variant="contained" sx={{ fontSize: '0.75rem', fontWeight: '600', backgroundColor: 'rgb(73, 163, 241) !important', borderRadius: '6px' }}>VIEW PAGES</Button>
                                            <Button sx={{ fontSize: '0.75rem', fontWeight: '600', color: 'white' }}>VIEW SIGNUP PAGES</Button>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Box height={'100%'}>
                                            <Stack direction={{ sm: 'column', md: 'row' }} spacing={4} justifyContent="center" alignItems="center" height={'100%'}>
                                                {HugeCollectionOfSections.map((item) => {
                                                    return <Box>
                                                        <img src={item.img} alt="image" style={{ height: '100%', borderRadius: '12px', }} />
                                                    </Box>
                                                })}
                                            </Stack>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>

                    {/* With our coded pages                             */}
                    <Container id='with-our-coded-pages'>
                        <Stack alignItems="center" color={'#344767'} spacing={6}>
                            <Box sx={{
                                textAlign: 'center',
                                width: { xs: '70%', md: '50%' },
                            }}>
                                <span style={{
                                    fontSize: '0.75rem',
                                    fontWeight: '700',
                                    backgroundColor: 'rgb(174, 206, 247)',
                                    color: 'rgb(9, 91, 198)',
                                    padding: '5px',
                                    borderRadius: '9px'
                                }}>INFINITE COMBINATIONS</span>
                                <Typography sx={{ fontSize: '2.5rem', fontWeight: '700', my: '0.5rem' }}>With our coded pages</Typography>
                                <Typography color="text.secondary">We have created multiple options for you to put together and customise into pixel perfect pages.</Typography>
                            </Box>
                            <Box width={'100%'}>
                                <Grid container xs={12} columns={{ xs: 4, sm: 8, md: 12 }} spacing={4} direction="row-reverse">
                                    <Grid item xs={3}>
                                        <Box width={{ xs: '100%', md: '95%' }} position={'sticky'} top={'80px'}>
                                            <Typography sx={{ fontSize: '1.75rem', fontWeight: '700' }}>Design Blocks</Typography>
                                            <Typography color="text.secondary">A selection of 45 page sections that fit perfectly in any combination</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Box>
                                            <Stack
                                                direction={'column'}
                                                spacing={{ xs: 1, sm: 2, md: 4 }}
                                            >
                                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 4, sm: 2, md: 4 }}>
                                                    {HugeCollectionOfSections.map((item) => {
                                                        return <Box>
                                                            <img src={item.img} alt="image" style={{ height: '80%', borderRadius: '12px', margin: '0px' }} />
                                                            <Typography sx={{ fontSize: '1rem', fontWeight: '700', }}>{item.title}</Typography>
                                                            <Typography fontSize={'0.75rem'} color="text.secondary">{item.description}</Typography>
                                                        </Box>
                                                    })}
                                                </Stack>

                                                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 4, sm: 2, md: 4 }}>
                                                    {HugeCollectionOfSections.map((item) => {
                                                        return <Box>
                                                            <img src={item.img} alt="image" style={{ height: '80%', borderRadius: '12px', margin: '0px' }} />
                                                            <Typography sx={{ fontSize: '1rem', fontWeight: '700', }}>{item.title}</Typography>
                                                            <Typography fontSize={'0.75rem'} color="text.secondary">{item.description}</Typography>
                                                        </Box>
                                                    })}
                                                </Stack>
                                            </Stack>
                                        </Box>
                                        <Stack>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Stack>
                    </Container>

                    {/* Complex Documentation */}
                    <Container>
                        <Box >
                            <Stack direction='row' spacing={4} justifyContent="space-between" alignItems="center">
                                {
                                    HugeCollectionOfSections.map((item, index) => {
                                        return <Box key={index} sx={{
                                            backgroundImage: `url(${item.img})`,
                                            width: '30%',
                                            height: '200px',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            borderRadius: '12px',

                                        }}
                                            onMouseEnter={() => setIsShown([true, index])}
                                            onMouseLeave={() => setIsShown([false, index])}
                                        >
                                            {(isShown[1] == index ? isShown[0] : false) && (
                                                <Box className={'complex_animation'}
                                                    sx={{
                                                        backgroundColor: 'rgb(0,0,0,0.2)',
                                                        height: '100%',
                                                        borderRadius: '12px',
                                                    }}>
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        justifyContent="flex-end"
                                                        alignItems="center"

                                                        sx={{
                                                            height: '100%',
                                                            width: '100%',
                                                            p: '10px 30px'
                                                        }}>
                                                        <Box>
                                                            <Button variant="contained" sx={{ backgroundColor: 'rgb(9, 91, 198) !important' }}><ArrowForwardIcon></ArrowForwardIcon>Vote Now</Button>
                                                        </Box>
                                                        <Stack
                                                            direction="row"
                                                            justifyContent="space-between"
                                                            alignItems="flex-end"
                                                            spacing={2}
                                                            sx={{
                                                                width: '100%',
                                                            }}
                                                        >
                                                            <Box>
                                                                <Typography>WEBSITE</Typography>
                                                                <Typography>Fork & Good</Typography>
                                                            </Box>
                                                            <Box sx={{ fontSize: '3rem' }}>
                                                                <ArrowOutwardIcon></ArrowOutwardIcon>
                                                                <BookmarkBorderIcon></BookmarkBorderIcon>
                                                            </Box>
                                                        </Stack>
                                                    </Grid>
                                                </Box>
                                            )}
                                        </Box>
                                    })
                                }
                            </Stack>
                        </Box>
                    </Container>
                </Stack>
            </Box>
        </Container>
    )
}
