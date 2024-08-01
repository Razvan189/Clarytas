import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    IconButton, InputBase,
    Pagination, Paper,
    Popover,
    styled, Tab,
    Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import Link from '@mui/material/Link';
import { useLocation, useNavigate} from "react-router-dom";
import {Menu, MenuItem, Sidebar} from "react-pro-sidebar";
import { PageBreadcrumb} from "@src/components";
import SearchIcon from "@mui/icons-material/Search";
import ErrorNotFound from "@src/pages/error/ErrorNotFound.tsx";
import {TabContext, TabList, TabPanel} from "@mui/lab";


const Statistics = () => {
    const { state } = useLocation();
    const [currentView, setView] = useState('profile');
    if (!state) {
        return <ErrorNotFound/>
    }
    const [personInformations, setPersonInfo] = useState(state.data.oc);
    const [negativeNews, setNegativeNews] = useState(state.data.gc);
    const [openSanctions, setOpenSanctions] = useState(state.data.os);
    const navigate = useNavigate();


    const [currentPage, setCurrentPage] = useState(1);
    const [currentNgPage, setCurrentNgPage] = useState(1);
    const [currenOsPage, setCurrentOsPage] = useState(1);
    const currentPersonInfo = personInformations[currentPage - 1];
    const currentNegativeNews = negativeNews[currentNgPage - 1];
    const currentOpenSanction = openSanctions[currenOsPage - 1];
    const [query, setQuery] = useState("");
    const [value, setValue] = useState('person');

    const fetchData = (name: string) => {
        try {
            fetch(`https://api.clarytas.online/search?schema=${value}&search_text=${name}&api_key=993fffa7-172b-411d-8267-b3d512343a92`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(async response => {
                console.log(response)

                const data = await response.json();
                setPersonInfo(data.oc);
                setNegativeNews(data.gc);
                if(response.ok && value === 'company') {
                    navigate('/pages/Statistics', {state: {data: data, from: "/pages/Statistics"}})
                }

            });
        }
        catch (e) {
            console.error(e)
        }
    }

    const setCurrentView = (view: string) => {
        setView(view);
    };

    useEffect(() => {
    }, [query]);



    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const searchClick = () => {
        fetchData(query);
    }

    const changeTab = (event, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <PageBreadcrumb title="Person statistics"  subName="Home" path={"/pages/Starter"}/>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center", top: "10px", height: 45, left: "15%", position: "absolute", zIndex: 3 }}>
                    <TabList onChange={changeTab} aria-label="lab API tabs example">
                        <Tab label="Company" value="company" />
                        <Tab label="Person" value="person" />
                    </TabList>
                </Box>
                <TabPanel value="company">
                    <Paper
                        component="form"
                        sx={{  display: 'flex', alignItems: 'center', width: "30%", height: 45, position: "absolute", left: "40%", top: 0, transform: "translate(-40%, 40%)", zIndex: 3}}>
                        <InputBase
                            sx={{ ml: 1, flex: 1, zIndex: 3}}
                            placeholder="Enter a company name"
                            value = {query}
                            onChange={handleChange}
                        />
                        <IconButton type="button" sx={{    ml: 1,
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }, backgroundColor: 'transparent', p: '5px', align: "center" }} aria-label="search">
                            <Divider sx={{ height: 40, m: 0.5 }} orientation="vertical" />
                            <SearchIcon
                                onClick={() => searchClick()}
                                sx={{  marginLeft: '12px', width: 55, height: 40 }} />
                        </IconButton>
                    </Paper>
                </TabPanel>
                <TabPanel value="person">
                    <Paper
                        component="form"
                        sx={{  display: 'flex', alignItems: 'center', width: "30%", height: 45, position: "absolute", left: "40%", top: 0, transform: "translate(-40%, 40%)", zIndex: 3}}>
                        <InputBase
                            sx={{ ml: 1, flex: 1, zIndex: 3}}
                            value = {query}
                            onChange={handleChange}
                            placeholder="Enter a person name"
                        />
                        <IconButton type="button" sx={{    ml: 1,
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }, backgroundColor: 'transparent', p: '5px', align: "center" }} aria-label="search">
                            <Divider sx={{ height: 40, m: 0.5 }} orientation="vertical" />
                            <SearchIcon
                                onClick={() => searchClick()}
                                sx={{  marginLeft: '12px', width: 55, height: 40 }} />
                        </IconButton>
                    </Paper>
                </TabPanel>
            </TabContext>
            <Sidebar>
                <Menu
                    menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            // only apply styles on first level elements of the tree
                            if (level === 0)
                                return {
                                    backgroundColor: active ? '#dee2e6' : undefined,
                                };
                        },
                    }}>
                    <MenuItem active={currentView === 'profile'} onClick={() => setCurrentView('profile')}> Profile </MenuItem>
                    <Divider />
                    <MenuItem active={currentView === 'news'} onClick={() => setCurrentView('news')}> Negative News </MenuItem>
                    <Divider />
                    <MenuItem  active={currentView === 'sanctions'} onClick={() => setCurrentView('sanctions')}> Sanctions & Watchlists </MenuItem>
                </Menu>
            </Sidebar>
            {currentPersonInfo && currentView === 'profile' &&
                <Box sx={{ flexGrow: 1 }}>

                    <Grid container spacing={0}  sx={{ direction:"column", justifyContent: "center", height: "100%"}}>
                        <Grid item xs={4} >
                            <Grid item>
                                <Card sx={{ textAlign: "center" }}>
                                    <CardContent sx={{ padding: "48px" }}>
                                        <Box marginTop={"12px"}>
                                            {currentPersonInfo.name}
                                        </Box>
                                        <Box textAlign={"start"} marginTop={"24px"}>
                                            {currentPersonInfo.address &&
                                                <Typography
                                                    display={"flex"}
                                                    fontWeight={600}
                                                    color={"grey.600"}
                                                    component={"p"}
                                                    marginBottom={"12px"}>
                                                    Address :
                                                    <Typography marginLeft={"8px"} variant="body1">
                                                        {currentPersonInfo.address}
                                                    </Typography>
                                                </Typography>
                                            }
                                            <Typography
                                                display={"flex"}
                                                fontWeight={600}
                                                color={"grey.600"}
                                                component={"p"}
                                                marginBottom={"12px"}>
                                                Date of birth :
                                                {currentPersonInfo.date_of_birth &&
                                                <Typography marginLeft={"8px"} variant="body1">
                                                    {currentPersonInfo.date_of_birth}
                                                </Typography>
                                                }
                                            </Typography>
                                            <Typography
                                                display={"flex"}
                                                fontWeight={600}
                                                color={"grey.600"}
                                                component={"p"}
                                                marginBottom={"12px"}>
                                                Position :
                                                <Typography marginLeft={"8px"} variant="body1">
                                                    {currentPersonInfo.position}
                                                </Typography>
                                            </Typography>
                                            <Typography
                                                display={"flex"}
                                                fontWeight={600}
                                                color={"grey.600"}
                                                component={"p"}
                                                marginBottom={"12px"}>
                                                Status :
                                                {currentPersonInfo.current_status &&
                                                    <Typography marginLeft={"8px"} variant="body1">
                                                        {currentPersonInfo.current_status}
                                                    </Typography>
                                                }
                                            </Typography>
                                            <Typography
                                                display={"flex"}
                                                fontWeight={600}
                                                color={"grey.600"}
                                                component={"p"}
                                                marginBottom={"12px"}>
                                                Nationality :
                                                {currentPersonInfo.nationality &&
                                                    <Typography marginLeft={"8px"} variant="body1">
                                                        {currentPersonInfo.nationality}
                                                    </Typography>
                                                }
                                            </Typography>
                                            <Typography
                                                display={"flex"}
                                                fontWeight={600}
                                                color={"grey.600"}
                                                component={"p"}
                                                marginBottom={"12px"}>
                                                Company :
                                                {currentPersonInfo.company &&
                                                    <Typography marginLeft={"8px"} variant="body1">
                                                        {currentPersonInfo.company.name}
                                                    </Typography>
                                                }
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>

                    </Grid>
                    <Pagination
                        size="medium"
                        sx={{ display: "flex", justifyContent: "center",  position: "relative", marginTop: "30px"}}
                        onChange={(_, newPage) => setCurrentPage(newPage)}
                        count={state.data.oc.length}
                        page={currentPage}
                    />
                </Box>
            }

            {currentView === 'news' && currentNegativeNews &&
                <Box>
                    <Grid container spacing={0}  sx={{ direction:"column", justifyContent: "center",  height: "100%"}}>
                        <Grid item xs={4} >
                            <Grid item>
                                <Card sx={{ textAlign: "center" }}>
                                    <CardContent sx={{ padding: "48px" }}>
                                        <Box marginTop={"12px"}>
                                            {currentNegativeNews.title}
                                        </Box>
                                        <Box textAlign={"start"} marginTop={"24px"}>
                                            <Link href={currentNegativeNews.link} variant="body2">
                                                {currentNegativeNews.snippet}
                                            </Link>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>

                    </Grid>
                    <Pagination
                        size="medium"
                        sx={{ display: "flex", justifyContent: "center",  position: "relative", marginTop: "30px"}}
                        onChange={(_, newPage) => setCurrentNgPage(newPage)}
                        count={negativeNews.length}
                        page={currentNgPage}
                    />
                </Box>
            }
            {currentView === 'sanctions' && currentOpenSanction &&
                <Box>
                    <Grid container spacing={0}  sx={{ direction:"column", justifyContent: "center", width: "100%"}}>
                        <Grid item xs={4} >
                            <Grid item>
                                <Card sx={{ textAlign: "center" }}>
                                    <CardContent sx={{ padding: "48px" }}>
                                        <Box
                                            marginTop={"24px"}>
                                            {currentOpenSanction.caption}
                                        </Box>
                                        <Typography
                                            display={"flex"}
                                            fontWeight={600}
                                            color={"grey.600"}
                                            component={"p"}
                                            marginBottom={"12px"}>
                                            Type :
                                            {currentOpenSanction.schema &&
                                                <Typography marginLeft={"8px"} variant="body1">
                                                    {currentOpenSanction.schema}
                                                </Typography>
                                            }
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Pagination
                        size="medium"
                        sx={{ display: "flex", justifyContent: "center",  position: "relative", marginTop: "30px"}}
                        onChange={(_, newPage) => setCurrentOsPage(newPage)}
                        count={openSanctions.length}
                        page={currenOsPage}
                    />
                </Box>
            }
        </>
    );
};

export default Statistics;
