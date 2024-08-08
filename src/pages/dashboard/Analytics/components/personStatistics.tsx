import * as React from 'react';
import {
    Avatar, Badge,
    Box,
    Button,
    Card,
    CardContent, Checkbox, CircularProgress,
    Divider, Drawer, Fade,
    Grid,
    IconButton, InputBase, Modal,
    Pagination, Paper,
    Popover,
    SwipeableDrawer, Tab,
    Typography
} from "@mui/material";
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import { useEffect, useState} from "react";
import Link from '@mui/material/Link';
import { useLocation, useNavigate} from "react-router-dom";
import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";
import {ComponentContainerCard, PageBreadcrumb} from "@src/components";
import SearchIcon from "@mui/icons-material/Search";
import ErrorNotFound from "@src/pages/error/ErrorNotFound.tsx";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import { styled, css } from '@mui/system';
import {LuDownload, LuKeyboard, LuMail, LuPrinter, LuX} from "react-icons/lu";
import {Plus} from "lucide-react";
import { Page, Text, View, Document, StyleSheet, PDFViewer  } from '@react-pdf/renderer';
import TotalSalesChart from "@src/pages/dashboard/ecommerce/components/TotalSalesChart.tsx";
import ReactApexCharts from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import ReactApexChart from "react-apexcharts";
import {
    basicRadialBarOpts,
    gradientCircularOpts,
    multipleRadialBarsOpts
} from "@src/pages/charts/ApexCharts/RadialbarApex/data.ts";


const PersonStatistics = () => {
    type Country = {
        US: "us_de"
        NO: "no",
        GER: "ger",
        FR: "fr"
    }
    const navigate = useNavigate();
    const { state } = useLocation();
    const [currentView, setView] = useState('profile');
    if (!state) {
        return <ErrorNotFound/>
    }


    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const ModalContent = styled('div')(
        ({ theme }) => css`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    text-align: start;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    float: right;    
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border-radius: 8px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 4px 12px
      ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
    padding: 24px;
    color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};

    & .modal-title {
      margin: 0;
      line-height: 1.5rem;
      margin-bottom: 8px;
    }

    & .modal-description {
      margin: 0;
      line-height: 1.5rem;
      font-weight: 400;
      color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
      margin-bottom: 4px;
    }
  `,
    );

    const [personData, setPersonData] = useState(state.data.oc);

    const [negativeNews, setNegativeNews] = useState(state.data.gc);
    const [openSanctions, setOpenSanctions] = useState(state.data.os);


    const [currentNgPage, setCurrentNgPage] = useState(1);
    const [currenOsPage, setCurrentOsPage] = useState(1);
    const [value, setValue] = useState('person');
    const [query, setQuery] = useState("");

    const [count, setCount] = useState(0);
    const [report, setReport] = useState('person');

    const [progress, setProgress] = useState(false);

    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);

    const [open, setOpen] = useState(undefined);
    const [openDocument, setOpenDocument] = useState(false)
    const handleOpen = (id) => setOpen(id);
    const handleClose = () => setOpen(undefined);

    let [reports, setReports] = useState([]);
    let [multipleReports, setMultipleReports] = useState([]);


    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    const apexOpts: ApexOptions = {
        chart: {
            type: "radialBar",
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                dataLabels: {
                    name: {
                        fontSize: "14px",
                        color: undefined,
                        offsetY: 100,
                    },
                    value: {
                        offsetY: 55,
                        fontSize: "24px",
                        color: undefined,
                        formatter: function (val) {
                            return val + "%";
                        },
                    },
                },
                track: {
                    background: "rgba(170,184,197, 0.2)",
                    margin: 0,
                },
            },
        },
        fill: {
            gradient: {
                // enabled: true,
                shade: "dark",
                shadeIntensity: 0.2,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91],
            },
        },
        stroke: {
            dashArray: 4,
        },
        colors: ["#3e60d5", "#47ad77", "#fa5c7c", "#16a7e9"],
        responsive: [
            {
                breakpoint: 380,
                options: {
                    chart: {
                        height: 170,
                    },
                },
            },
        ],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        },
    };

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    }


    const setCurrentView = (view: string) => {
        setView(view);
    };

    const changeTab = (event, newValue: string) => {
        setValue(newValue);
    };

    const fetchData = (name: string) => {
        try {
            fetch(`https://api.clarytas.online/search?schema=${value}&search_text=${name}&api_key=8c684101-29be-4b90-96f9-414c12e998f4`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(async response => {

                const data = await response.json();
                setPersonData(data.oc);
                setNegativeNews(data.gc);
                setOpenSanctions(data.os);

                if(response.ok && value === 'company') {
                    navigate('/pages/Statistics', {state: {data: data, from: "/pages/Statistics"}})
                }

            });
        }



        catch (e) {
            console.error(e)
        }
    }

    const addReport = (name: string) => {
        try {
            fetch(`https://api.clarytas.online/report?schema=${value}&search_text=${name}&api_key=a1e3b546-77ac-4eed-96c8-5c3b9aa076ef`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(async response => {
                setCount(count => count + 1)
                const data = await response.text();
                setReport(data);
                reports.push(data);

            });
        }
        catch (e) {
            console.error(e)
        }
    }

    const addMutipleReports = async (report: []) => {
        for await (let name of report) {
            await fetch(`https://api.clarytas.online/report?schema=${value}&search_text=${name}&api_key=a1e3b546-77ac-4eed-96c8-5c3b9aa076ef`, {
                method: "GET"
            }).then(async response => {
                setCount(count => count + 1)
                const data = await response.text();
                setReport(data);
                multipleReports.push(data);
            });
        }
        console.log(multipleReports)

    }

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2)

        },
        '& .MuiDialogActions-root': {
            justifyContent: 'center',
            display: "flex",
            textAlign: "center",
            fontFamily: "'IBM Plex Sans', sans-serif"
        },
        '& .MuiDialog-paper': {
            maxWidth: "900px",
            float: "right"
        }
    }));

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const selectPerson = (event, index) => {
        return personData[index].name
    }

    const selectAll = (e) => {
        const {checked} = e.target;
        const collection = []
        console.log(checked)
        if(checked) {
             personData.forEach((item) => {
                 collection.push(item.name);

            })
        }
        setReports(collection)
        setProgress(checked)
    }


    useEffect(() => {
    }, [query]);

    const searchClick = () => {
        fetchData(query);
    }

    return (
        <>
            <PageBreadcrumb title="Statistics" subName="Home" path={"/pages/Starter"}/>
            <Sidebar rootStyles={{
                position: "absolute",
                height: "100%",
            }}>
                <Menu
                    menuItemStyles={{
                        button: ({level, active, disabled}) => {
                            // only apply styles on first level elements of the tree
                            if (level === 0)
                                return {
                                    backgroundColor: active ? '#dee2e6' : undefined,
                                };
                        },
                    }}>
                    <SubMenu label="Categories">
                        <MenuItem active={currentView === 'news'} onClick={() => setCurrentView('news')}> Negative
                            News </MenuItem>
                        <MenuItem active={currentView === 'profile'} onClick={() => setCurrentView('profile')}> Company
                            Sources </MenuItem>
                        <MenuItem active={currentView === 'sanctions'} onClick={() => setCurrentView('sanctions')}> Sanctions &
                            Watchlists </MenuItem>
                        <MenuItem active={currentView === 'exposed'} onClick={() => setCurrentView('exposed')}> Politically
                            Exposed Persons </MenuItem>
                        <MenuItem active={currentView === 'legal'} onClick={() => setCurrentView('legal')}> Legal
                            Sources </MenuItem>
                    </SubMenu>
                    <SubMenu label="Search Within Results">
                    </SubMenu>
                    <SubMenu label="Date Range">

                    </SubMenu>
                    <SubMenu label="Company">

                    </SubMenu>
                    <SubMenu label="Source Type">

                    </SubMenu>
                    <SubMenu label="Source">

                    </SubMenu>
                </Menu>
            </Sidebar>
            <TabContext value={value}>
                <Box sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    display: "flex",
                    justifyContent: "center",
                    top: "10px",
                    height: 45,
                    left: "15%",
                    position: "absolute",
                    zIndex: 3
                }}>
                    <TabList onChange={changeTab} aria-label="lab API tabs example">
                        <Tab label="Company" value="company"/>
                        <Tab label="Person" value="person"/>
                    </TabList>
                </Box>
                <TabPanel value="company">
                    <Paper
                        component="form"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: "30%",
                            height: 45,
                            position: "absolute",
                            left: "40%",
                            top: 0,
                            transform: "translate(-40%, 40%)",
                            zIndex: 3
                        }}>
                        <InputBase
                            sx={{ml: 1, flex: 1, zIndex: 3}}
                            placeholder="Enter a company name"
                            value={query}
                            onChange={handleChange}
                        />
                        <IconButton type="button" sx={{
                            ml: 1,
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }, backgroundColor: 'transparent', p: '5px', align: "center"
                        }} aria-label="search">
                            <Divider sx={{height: 40, m: 0.5}} orientation="vertical"/>
                            <SearchIcon
                                onClick={() => searchClick()}
                                sx={{marginLeft: '12px', width: 55, height: 40}}/>
                        </IconButton>
                    </Paper>
                </TabPanel>
                <TabPanel value="person">
                    <Paper
                        component="form"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: "30%",
                            height: 45,
                            position: "absolute",
                            left: "40%",
                            top: 0,
                            transform: "translate(-40%, 40%)",
                            zIndex: 3
                        }}>
                        <InputBase
                            sx={{ml: 1, flex: 1, zIndex: 3}}
                            value={query}
                            onChange={handleChange}
                            placeholder="Enter a person name"
                        />
                        <IconButton type="button" sx={{
                            ml: 1,
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }, backgroundColor: 'transparent', p: '5px', align: "center"
                        }} aria-label="search">
                            <Divider sx={{height: 40, m: 0.5}} orientation="vertical"/>
                            <SearchIcon
                                onClick={() => searchClick()}
                                sx={{marginLeft: '12px', width: 55, height: 40}}/>
                        </IconButton>
                    </Paper>
                </TabPanel>
            </TabContext>
            {report !== 'person' && reports.length > 0 && <PDFViewer fileName={personData[count].name} style={{justifyContent: "center", display: 'flex', position: 'absolute', height: "100%", left: "20%", zIndex: 30, width: "70%",  display: `${openDocument ? 'block' : 'none'}`}}>
                <Document  title={personData[count].name}>
                    {reports.map((item) => (
                        <Page size="A4" style={styles.page}>
                            <View style={styles.section}>
                               <Text>{item}</Text>
                            </View>
                        </Page>
                    ))}
                </Document>
            </PDFViewer>
            }
            {report !== 'person' && multipleReports.length > 0 && <PDFViewer fileName={personData[count].name} style={{justifyContent: "center", display: 'flex', position: 'absolute', height: "100%", left: "20%", zIndex: 30, width: "70%",  display: `${openDocument ? 'block' : 'none'}`}}>
                <Document  title={personData[count].name}>
                    {multipleReports.map((item) => (
                        <Page size="A4" style={styles.page}>
                            <View style={styles.section}>
                                <Text>{item}</Text>
                            </View>
                        </Page>
                    ))}
                </Document>
            </PDFViewer>
            }
            <IconButton
                onClick={() => setOpenDocument(false)}
                sx={{color: "white", paddingInlineStart:0, justifyContent: "center", alignItems: "center", display: 'flex', position: 'absolute', left: "84.3%", marginTop:"10px", zIndex: 30, display: `${openDocument ? 'block' : 'none'}`}}>
                <LuX />
            </IconButton>
            <Grid container xs={8}
                  sx={{justifyContent: "center", display: 'flex', position: "absolute", left: "40%", top: "10%"}}>
                <Badge badgeContent={count} color="primary">
                    <Button variant="outlined" color="secondary"
                            size="large"
                            onClick={() => setOpenDocument(true)}>
                        Your Report
                    </Button>
                </Badge>
            </Grid>

            <Grid container xs={6}
                  sx={{justifyContent: "center", display: 'flex', position: "absolute", left: "20%", top: "12%"}}>
                <Typography sx={{ textAlign: "center",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    left: "14%",
                    marginTop: "0px"
                }}><Checkbox
                    checked={progress}
                    onClick={(e) => {selectAll(e)}}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                </Typography>

                <LuDownload
                    onClick={() => addMutipleReports(reports)}
                    style={{cursor: "pointer", zIndex: 4, width: 100, height: 25}}/>
                <LuPrinter style={{cursor: "pointer", zIndex: 4, width: 100, height: 25}}/>
                <LuMail style={{cursor: "pointer", zIndex: 4, width: 100, height: 25}}/>
            </Grid>
            <Divider sx={{width: "100%", my: 2, left: "0", top: "14%", position: "absolute"}}/>
            {currentView === 'profile' && personData.map((item, index) => (
                <Box sx={{backgroundColor: "#f2f4f7", flexGrow: 1}}>
                    <Typography sx={{ textAlign: "center",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        left: "27%",
                        marginTop: "30px"
                    }}><Checkbox
                        checked={reports.includes(item.name)}
                        onClick={(e) => {selectPerson(e, index)}}
                        inputProps={{ 'aria-label': 'controlled' }}
                        />
                        <h3>{index + 1 + "."}</h3>
                    </Typography>

                    <Grid container spacing={3} sx={{
                        justifyContent: "center",
                        marginTop: 0,
                        display: 'flex',
                        position: "relative",
                        left: 0,
                        top: 0
                    }}>
                        <Grid item xs={5}>
                            <Grid item sx={{justifyContent: "center"}}>
                                <Card sx={{textAlign: "center"}}>
                                    <CardContent sx={{padding: "48px"}}>
                                        <Box
                                            marginTop={"24" +
                                                "px"}>
                                            {item.name}
                                        </Box>
                                        <Box textAlign={"start"} marginTop={"24px"}>
                                            <Button sx={{position: "absolute", zIndex: 3, left: "60%", top: "50%"}}
                                                    onClick={() => handleOpen(index)}
                                                    className="project-card card p-0 border-5 border-dark shadow-lg">
                                                Preview
                                            </Button>
                                            <Button variant="outlined" color="secondary"
                                                    sx={{position: "absolute", zIndex: 3, left: "58%", top: "20%"}}
                                                    onClick={() => addReport(item.name)}
                                                    className="project-card card p-0 border-5 border-dark shadow-lg">
                                                <Plus style={{marginRight: "6px"}}/> Add to Report
                                            </Button>
                                            <BootstrapDialog
                                                aria-labelledby="customized-dialog-title"
                                                open={open === index}
                                                onClose={handleClose}
                                            >
                                                <DialogContent dividers sx={{width: "800px"}}>
                                                    <Button variant="outlined" color="secondary"
                                                            onClick={() => addReport(item.name)}
                                                            className="project-card card p-0 border-5 border-dark shadow-lg">
                                                        <Plus style={{marginRight: "6px"}}/> Add to Report
                                                    </Button>
                                                    <h1 style={{
                                                        textAlign: "center",
                                                        alignItems: "center",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        top: "0"
                                                    }}>
                                                        {item.name}
                                                    </h1>
                                                    <Typography marginLeft={"8px"} variant="body1">
                                                        {item.name.toUpperCase()}
                                                    </Typography>
                                                    <Typography marginLeft={"8px"} variant="body1">
                                                        {item.id}
                                                    </Typography>
                                                    <Typography marginLeft={"8px"} variant="body1">
                                                        {item.address}
                                                    </Typography>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Communications
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Website:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            <Link href={item.opencorporates_url} variant="body2">
                                                                {item.opencorporates_url}
                                                            </Link>
                                                        </Typography>
                                                    </Typography>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Company Identifiers
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Ticker:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {item.name}
                                                        </Typography>
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        IRS No:
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        CIK:
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        Reuters Instrument Code:
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        Display RIC:
                                                    </Typography>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Company Information
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Name:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {item.company.name}
                                                        </Typography>
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Company number:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {item.company.company_number}
                                                        </Typography>
                                                    </Typography>

                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Description
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                </DialogContent>

                                            </BootstrapDialog>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>

                    </Grid>


                </Box>
            ))}

            {currentView === 'news' && negativeNews.map((item, index) => (
                <Box sx={{flexGrow: 1}}>
                    <Typography sx={{ textAlign: "center",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        left: "27%",
                        marginTop: "30px"
                    }}><Checkbox
                        onClick={
                        (e) => {selectPerson(e, index)}
                    }
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                        <h3>{index + 1 + "."}</h3>
                    </Typography>
                    <Grid container spacing={3} sx={{
                        justifyContent: "center",
                        marginTop: 0,
                        display: 'flex',
                        position: "relative",
                        left: 0,
                        top: 0
                    }}>
                        <Grid item xs={5}>
                            <Grid item sx={{justifyContent: "center"}}>
                                <Card sx={{textAlign: "start"}}>
                                    <CardContent sx={{padding: "48px"}}>
                                        <Box
                                            marginTop={"24" +
                                                "px"}>
                                            {item.snippet}
                                        </Box>
                                        <Box textAlign={"start"} marginTop={"24px"}>
                                            <Button sx={{position: "absolute", zIndex: 3, left: "60%", top: "58%"}}
                                                    onClick={() => handleOpen(index)}
                                                    className="project-card card p-0 border-5 border-dark shadow-lg">
                                                Preview
                                            </Button>
                                            <Button variant="outlined" color="secondary"
                                                    sx={{position: "absolute", zIndex: 3, left: "58%", top: "20%"}}
                                                    onClick={() => addReport(item.name)}
                                                    className="project-card card p-0 border-5 border-dark shadow-lg">
                                                <Plus style={{marginRight: "6px"}}/> Add to Report
                                            </Button>
                                            <BootstrapDialog
                                                aria-labelledby="customized-dialog-title"
                                                open={open === index}
                                                onClose={handleClose}
                                            >
                                                <DialogContent dividers sx={{width: "800px"}}>
                                                    <Button variant="outlined" color="secondary"
                                                            sx={{    textAlign: "center",
                                                                alignItems: "center",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                top: "0"}}
                                                            onClick={() => addReport(item.name)}
                                                            className="project-card card p-0 border-5 border-dark shadow-lg">
                                                        <Plus style={{marginRight: "6px"}}/> Add to Report
                                                    </Button>
                                                    <h1 style={{
                                                        textAlign: "center",
                                                        alignItems: "center",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        top: "0"
                                                    }}>
                                                        {item.name}
                                                    </h1>
                                                    <Typography marginLeft={"8px"} variant="body1">
                                                        {item.title.toUpperCase()}
                                                    </Typography>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Communications
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Website:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            <Link href={item.link} variant="body2">
                                                                {item.link}
                                                            </Link>
                                                        </Typography>
                                                    </Typography>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Company Identifiers
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Ticker:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {item.name}
                                                        </Typography>
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        IRS No:
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        CIK:
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        Reuters Instrument Code:
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        Display RIC:
                                                    </Typography>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Company Information
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Incorporation Date:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {item.incorporation_date}
                                                        </Typography>
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        Place Of Incorporation/Registration:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {item.registered_address ? item.registered_address.region : ""}
                                                        </Typography>
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        Legal Status:

                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        Operating Status:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {item.current_status ? item.current_status : ""}
                                                        </Typography>
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        Employees:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {item.current_status ? item.current_status : ""}
                                                        </Typography>
                                                    </Typography>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Description
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Company type:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {item.company_type ? item.company_type : ""}
                                                        </Typography>
                                                    </Typography>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Market and Industry
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        NAICS Codes:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            33660
                                                        </Typography>
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                    >
                                                        SIC Codes:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            3711
                                                        </Typography>
                                                    </Typography>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Financials
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Income Statement
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Classification
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Company:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {item.name}
                                                        </Typography>
                                                    </Typography>
                                                </DialogContent>

                                            </BootstrapDialog>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>

                    </Grid>


                </Box>
            ))}
            {currentView === 'sanctions' && openSanctions.map((item, index) => (
                <Box sx={{flexGrow: 1}}>
                    <Typography sx={{ textAlign: "center",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                        position: "absolute",
                        left: "27%",
                        marginTop: "30px"
                    }}><Checkbox
                        onClick={(e) => {selectPerson(e, index)}}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                        <h3>{index + 1 + "."}</h3>
                    </Typography>
                    <Grid container spacing={3} sx={{
                        justifyContent: "center",
                        marginTop: 0,
                        display: 'flex',
                        position: "relative",
                        left: 0,
                        top: 0
                    }}>
                        <Grid item xs={5}>
                            <Grid item sx={{justifyContent: "center"}}>
                                <Card sx={{textAlign: "center"}}>
                                    <CardContent sx={{padding: "48px"}}>
                                        <Box
                                            marginTop={"24" +
                                                "px"}>
                                            {item.caption}
                                        </Box>
                                        <Box textAlign={"start"} marginTop={"24px"}>
                                            <Button sx={{position: "absolute", zIndex: 3, left: "60%", top: "50%"}}
                                                    onClick={() => handleOpen(index)}
                                                    className="project-card card p-0 border-5 border-dark shadow-lg">
                                                Preview
                                            </Button>
                                            <Button variant="outlined" color="secondary"
                                                    sx={{position: "absolute", zIndex: 3, left: "58%", top: "20%"}}
                                                    onClick={() => addReport(item.name)}
                                                    className="project-card card p-0 border-5 border-dark shadow-lg">
                                                <Plus style={{marginRight: "6px"}}/> Add to Report
                                            </Button>
                                            <BootstrapDialog
                                                aria-labelledby="customized-dialog-title"
                                                open={open === index}
                                                onClose={handleClose}
                                            >
                                                <DialogContent dividers sx={{width: "800px", height: "800px"}}>
                                                    <Button variant="outlined" color="secondary"
                                                            sx={{    textAlign: "center",
                                                                alignItems: "center",
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                top: "0"}}
                                                            onClick={() => addReport(item.caption)}
                                                            className="project-card card p-0 border-5 border-dark shadow-lg">
                                                        <Plus style={{marginRight: "6px"}}/> Add to Report
                                                    </Button>
                                                    <Box width={"100%"}>
                                                        <ReactApexChart
                                                            className="apex-charts"
                                                            options={basicRadialBarOpts}
                                                            height={160}
                                                            series={[item.score]}
                                                            type="radialBar"
                                                        />
                                                    </Box>

                                                    <h1 style={{
                                                        textAlign: "center",
                                                        alignItems: "center",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                        top: "0"
                                                    }}>
                                                        {item.caption}
                                                    </h1>
                                                    <Typography marginLeft={"8px"} variant="body1">
                                                        {item.company_number}
                                                    </Typography>
                                                    <Typography marginLeft={"8px"} variant="body1">
                                                        {item.properties.address ? item.properties.address[0] : ""}
                                                    </Typography>
                                                    <Typography marginLeft={"8px"} variant="body1">
                                                        {item.properties.swiftBic ? item.properties.swiftBic[0] : ""}
                                                    </Typography>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Sanctions
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Country:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {Object.keys(item.the_dot.datasets).length > 0 ? item.the_dot.datasets[item.datasets[0]].country : ""}
                                                        </Typography>
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Name:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {Object.keys(item.the_dot.datasets).length > 0 ? item.the_dot.datasets[item.datasets[0]].name : ""}
                                                        </Typography>
                                                    </Typography>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Publisher:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {Object.keys(item.the_dot.datasets).length > 0  && item.the_dot.datasets[item.datasets[0]].publisher ? item.the_dot.datasets[item.datasets[0]].publisher : ""}
                                                        </Typography>
                                                    </Typography>

                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Description
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                    <Typography
                                                        display={"flex"}
                                                        fontWeight={600}
                                                        color={"black.600"}
                                                        marginTop={"10px"}
                                                    >
                                                        Company type:
                                                        <Typography marginLeft={"8px"} variant="body1">
                                                            {item.schema ? item.schema : ""}
                                                        </Typography>
                                                    </Typography>
                                                    <h2 style={{
                                                        textAlign: "left",
                                                        display: "flex",
                                                        justifyContent: "left",
                                                        top: "0"
                                                    }}>
                                                        Score
                                                    </h2>
                                                    <Divider sx={{
                                                        borderWidth: "3px",
                                                        borderColor: "black",
                                                        borderRadius: "30px",
                                                        marginTop: "-20px"
                                                    }}/>
                                                </DialogContent>

                                            </BootstrapDialog>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>

                    </Grid>


                </Box>
            ))}
        </>
    );
};

export default PersonStatistics;
