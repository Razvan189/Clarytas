import { Link } from "react-router-dom";

//image
import logo from "@src/assets/images/logo-clarytas.png";

// components
import { AuthBGLayout, PageMetaData } from "../../components";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

const ErrorNotFound = () => {
    return (
        <>
            <PageMetaData title="Error 404" />
            <AuthBGLayout>
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "90vh",
                    }}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ maxWidth: "448px" }}>
                            <Card sx={{ borderRadius: 2, width: 416 }}>
                                <CardContent sx={{ backgroundColor: "white", p: "36px", height: "100px" }}>
                                    <Link to="/" style={{ display: "flex", justifyContent: "center" }}>
                                        <img src={logo} alt="logo" height={150} />
                                    </Link>
                                </CardContent>
                                <CardContent sx={{ px: "24px", py: "40px" }}>
                                    <Box sx={{ textAlign: "center" }}>
                                        <Typography
                                            component={"h4"}
                                            sx={{
                                                color: "error.main",
                                                fontSize: "18px",
                                                textTransform: "uppercase",
                                                my: "28px",
                                                fontWeight: 600,
                                            }}>
                                            Informations are not available
                                        </Typography>
                                        <Link to={"/pages/starter"}>
                                            <Button
                                                sx={{ mt: "40px" }}
                                                size="medium"
                                                variant="contained"
                                                color="info">
                                                Back to search
                                            </Button>
                                        </Link>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Box>
            </AuthBGLayout>
        </>
    );
};

export default ErrorNotFound;
