import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'common.black', color: 'grey.700'}}>
            
            <Container maxWidth="md" sx={{ py: 6, mt: 8 }}>

                <Grid container spacing={4} sx={{ mb: 4, textAlign: 'left' }}>
                    <Grid item xs={6} md={3}>
                        <Stack spacing={2}>
                            <Typography variant="caption" component="a" href="#">
                                Audio and Subtitles
                            </Typography>
                            <Typography variant="caption" component="a" href="#">
                                Media Center
                            </Typography>
                            <Typography variant="caption" component="a" href="#">
                                Security
                            </Typography>
                            <Typography variant="caption" component="a" href="#">
                                Contact us
                            </Typography>
                            <Select
                            name="lang"
                            variant="outlined"
                            size="small"
                            defaultValue="DEFAULT"
                            sx={{ 
                                borderWidth: '2px',
                                borderStyle: 'solid',
                                borderColor: 'common.white',
                                color: 'common.white',
                                '& .MuiSelect-icon': {
                                    color: 'common.white'
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none'
                                }
                            }}
                    >
                        <MenuItem value="DEFAULT">Service Provider</MenuItem>
                        <MenuItem value="ID">Bahasa Indonesia</MenuItem>
                        <MenuItem value="EN">English</MenuItem>
                    </Select>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                    <Stack spacing={2}>
                            <Typography variant="caption" component="a" href="#">
                                Audio Description
                            </Typography>
                            <Typography variant="caption" component="a" href="#">
                                Investor Relations
                            </Typography>
                            <Typography variant="caption" component="a" href="#">
                                Legal Provisions
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                    <Stack spacing={2}>
                            <Typography variant="caption" component="a" href="#">
                                Help center
                            </Typography>
                            <Typography variant="caption" component="a" href="#">
                                Jobs
                            </Typography>
                            <Typography variant="caption" component="a" href="#">
                                Cookie Preferences
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} md={3}>
                    <Stack spacing={2}>
                            <Typography variant="caption" component="a" href="#">
                                Gift Cards
                            </Typography>
                            <Typography variant="caption" component="a" href="#">
                                Terms of Use
                            </Typography>
                            <Typography variant="caption" component="a" href="#">
                                Corporate Information
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
             

                <Typography variant="caption" sx={{  float: 'left' }}> 
                © 2022 Movies, All Right Reserved
                </Typography>
            </Container>
            
        
        </Box>
    )
}

export default Footer;