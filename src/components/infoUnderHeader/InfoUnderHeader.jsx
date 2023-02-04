import './style.css'
import {Box, Typography} from '@mui/material';
import './banner.png'
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from 'react-bootstrap/Card';
import card from './card.png'
import delivery from './delivery.png'
import cal from './cal.png'

const InfoUnderHeader = () => {

    const Item = styled(Paper)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark'
            ? '#1A2027'
            : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }));

    return (

        <Box>

            <Box className="contentt">
                <Box className="gridContent" gap={2}>
                    <Box className="gridItem">
                        <Typography
                            paddingTop={5}
                            variant="h3"
                            sx={{
                                fontWeight: 300,
                                color: "#2E3B55"
                            }}>
                            Доставка щебня и нерудных строительных материалов
                        </Typography>
                    </Box>
                    <Box className="gridItem">
                        <Typography
                            paddingTop={3}
                            paddingBottom={5}
                            variant="h4"
                            sx={{
                                fontWeight: 300,
                                color: "#2E3B55"
                            }}>
                            по Ростовской области
                        </Typography>
                    </Box>

                </Box>

                <Box className="itemsOfUnd">

                    <Box className="itemHeader">
                        <Card.Img className='cardImg2' variant="top" src={card}/>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 500,
                                color: "#2E3B55"
                            }}>
                            Приятные цены
                        </Typography>
                    </Box>

                    <Box className="itemHeader">
                        <Card.Img className='cardImg2' variant="top" src={delivery}/>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 500,
                                color: "#2E3B55"
                            }}>
                            Быстрая доставка
                        </Typography>
                    </Box>

                    <Box className="itemHeader">
                        <Card.Img className='cardImg2' variant="top" src={cal}/>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 500,
                                color: "#2E3B55"
                            }}>
                            Универсальный график
                        </Typography>
                    </Box>

                </Box>

            </Box>

        </Box>
    );
}

export default InfoUnderHeader;