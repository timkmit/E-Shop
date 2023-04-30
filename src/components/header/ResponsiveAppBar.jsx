import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IMG from './3333.png'
import {Link} from "@mui/material";
import Content from './../body/Content'

function ResponsiveAppBar() {

    return (
        <AppBar position="static" style={{background: '#fff', lineHeight: 0,}}>
            <Container>

                <Container maxWidth="xl">
                    <Toolbar disableGutters={true}>

                        <Box
                            sx={{
                                marginTop: 0.5,
                                marginBottom: 0.5
                            }}>
                            <img src={IMG} width={80}></img>
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: {
                                    xs: "center",
                                    md: "fixed"
                                },
                                justifyContent: "center"
                            }}>
                            <Typography
                                href="/"
                                className="textHeader"
                                fontSize={28}
                                component="a"
                                sx={{
                                    mr: 3,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    fontFamily: "monospace",
                                    fontWeight: 500,
                                    letterSpacing: ".2rem",
                                    color: "#2E3B55",
                                    textDecoration: "none",
                                    display: "inherit",
                                    marginRight: "90px",
                                    marginLeft: "10px"
                                }}>

                                БАЗА СТРОИТЕЛЬНЫХ МАТЕРИАЛОВ

                            </Typography>

                        </Box>
                        {/*<Box className='buttonNumber' sx={{ flexGrow: 0 , margin: 0, fontSize: '80px', marginRight: '-80px'}}>
          <Button variant="contained">Заказать звонок</Button>

          </Box>*/
                        }

                    </Toolbar>

                </Container>

            </Container>

        </AppBar>

    );
}
export default ResponsiveAppBar;