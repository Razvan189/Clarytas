import * as React from 'react';
import {
  Avatar, Badge,
  Box,
  Button,
  Card,
  CardContent, Checkbox,
  Divider, Drawer, Fade,
  Grid,
  IconButton, InputBase, LinearProgress, List, ListItem, ListItemButton, ListItemText, Modal,
  Pagination, Paper,
  Popover, Slide,
  SwipeableDrawer, Switch, Tab,
  Typography
} from "@mui/material";
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import {Fragment, useEffect, useState} from "react";
import Link from '@mui/material/Link';
import { useLocation, useNavigate} from "react-router-dom";
import {Menu, MenuItem, MenuItemStyles, Sidebar, SubMenu} from "react-pro-sidebar";
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
import PersonStatistics from "@src/pages/dashboard/Analytics/components/personStatistics.tsx";
import {TransitionProps} from "@mui/material/transitions";





const Statistics = () => {
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


  type Theme = 'light' | 'dark';

  const themes = {
    light: {
      sidebar: {
        backgroundColor: '#ffffff',
        color: '#607489',
      },
      menu: {
        menuContent: '#fbfcfd',
        icon: '#0098e5',
        hover: {
          backgroundColor: '#c5e4ff',
          color: '#44596e',
        },
        disabled: {
          color: '#9fb6cf',
        },
      },
    },
    dark: {
      sidebar: {
        backgroundColor: '#0b2948',
        color: '#8ba1b7',
      },
      menu: {
        menuContent: '#082440',
        icon: '#59d0ff',
        hover: {
          backgroundColor: '#00458b',
          color: '#b6c8d9',
        },
        disabled: {
          color: '#3e5e7e',
        },
      },
    },
  };

  const [companyData, setCompanyData] = useState(state.data.oc);

  console.log(companyData)
  const [negativeNews, setNegativeNews] = useState(state.data.gc);
  const [openSanctions, setOpenSanctions] = useState(state.data.os);
  console.log(openSanctions)


  const [currentNgPage, setCurrentNgPage] = useState(1);
  const [currenOsPage, setCurrentOsPage] = useState(1);
  const [value, setValue] = useState('company');
  const [query, setQuery] = useState("");

  const [count, setCount] = useState(0);
  const [report, setReport] = useState('company');

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  const [reports, setReports] = useState([]);

  const [open, setOpen] = useState(undefined);
  const [openDocument, setOpenDocument] = useState(false)

  const [isItemChecked, setItemChecked] = useState(false)

  const [theme, setTheme] = useState<Theme>('light');

  const [rtl, setRtl] = useState(false);


  const [loading, setLoading] = useState(false);
  const handleOpen = (id) => setOpen(id);
  const handleClose = () => setOpen(undefined);


  const Transition = React.forwardRef(function Transition(
      props: TransitionProps & {
        children: React.ReactElement<any, any>;
      },
      ref: React.Ref<unknown>,
  ) {
    return <Slide direction="left" ref={ref} {...props} />;
  });



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

  const selectAll = (e) => {
    const {checked} = e.target;
    const collection = []
    console.log(checked)
    if(checked) {
      companyData.forEach((item) => {
        collection.push(item.name);
      })
    }
    setReports(collection)
    setItemChecked(checked)
  }


  const selectAllNews = (e) => {
    const {checked} = e.target;
    const collection = []
    if(checked) {
      negativeNews.forEach((item) => {
        collection.push(item.title);
      })
    }
    setReports(collection)
    setItemChecked(checked)
  }

  const selectAllOpenSanctions = (e) => {
    const {checked} = e.target;
    const collection = []
    if(checked) {
      openSanctions.forEach((item) => {
        collection.push(item.caption);
      })
    }
    setReports(collection)
    setItemChecked(checked)
  }

  const fetchData = (name: string) => {
    try {
      fetch(`https://api.clarytas.online/search?schema=${value}&search_text=${name}&api_key=8c684101-29be-4b90-96f9-414c12e998f4`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      }).then(async response => {
        console.log(response)

        const data = await response.json();
        setCompanyData(data.oc);
        setNegativeNews(data.gc);
        setOpenSanctions(data.os);

        if(response.ok && value === 'person') {
          navigate('/pages/personStatistics', {state: {data: data, from: "/pages/Statistics"}})
        }

      });
    }



    catch (e) {
      console.error(e)
    }

  }

  const addReport = (name: string) => {
    setLoading(true);
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


    finally {
        setLoading(false);
      }
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
      float: "right",
      right: 0,
      position: "absolute",
      margin:0
    }
  }));

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

    const selectCompany = (event, index) => {
        return companyData[index].name
    }


  useEffect(() => {
  }, [loading]);

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };


  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '16px',
      fontWeight: 400,
      color: "black"
    },
    icon: {
      color: themes[theme].menu.icon
    },

    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
          level === 0
              ? hexToRgba(themes[theme].menu.menuContent,  1)
              : 'transparent',
    }),
    button: {
      '&.active' :{
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor,  1)
      },
      '&:hover': {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor,  1),
        color: themes[theme].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  const handleRTLChange = (e) => {
    setRtl(e.target.checked);
  };

  // handle on theme change event
  const handleThemeChange = (e ) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };



  const searchClick = () => {
    console.log(query)
    fetchData(query);
  }

  return (
      <>
        <Sidebar
            rtl={rtl}
            breakPoint="md"
            backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, 1)}
            rootStyles={{
              color: themes[theme].sidebar.color,
              width: "380px",
              position: "absolute",
              height: "800px"
            }}
        >
          <Menu menuItemStyles={menuItemStyles}>
            <SubMenu label="Categories">
              <MenuItem
                  active={currentView === 'news'} onClick={() => setCurrentView('news')}
                  suffix={
                    <Badge variant="danger" shape="circle">
                      {negativeNews.length}
                    </Badge>
                  }> Negative News </MenuItem>
              <MenuItem
                  suffix={
                    <Badge variant="danger" shape="circle">
                      {companyData.length}
                    </Badge>
                  }
                  active={currentView === 'profile'} onClick={() => setCurrentView('profile')}> Company
                Sources </MenuItem>
              <MenuItem
                  suffix={
                    <Badge variant="danger" shape="circle">
                      {openSanctions.length}
                    </Badge>
                  } active={currentView === 'sanctions'} onClick={() => setCurrentView('sanctions')}> Sanctions &
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
              <Tab label="Company" value="company" sx={
                {"&.MuiButtonBase-root": {color: "white"}}}/>
              <Tab label="Person" value="person"
                   sx={{
                     "&.MuiButtonBase-root": {
                       color: "white"
                     }
                   }}/>
            </TabList>
          </Box>
          <TabPanel sx={{padding: 0}} value="company">
            <Paper
                component="form"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: "30%",
                  height: 45,
                  padding: 0,
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
                  padding: 0,
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
        {report !== 'company' && <PDFViewer fileName="report.pdf" style={{
          justifyContent: "center",
          display: 'flex',
          position: 'absolute',
          height: "100%",
          left: "20%",
          zIndex: 400,
          width: "70%",
          display: `${openDocument ? 'block' : 'none'}`
        }}>
          <Document title={companyData[count].name}>
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
        <IconButton
            onClick={() => setOpenDocument(false)}
            sx={{
              color: "white",
              paddingInlineStart: 0,
              justifyContent: "center",
              alignItems: "center",
              display: 'flex',
              position: 'relative',
              left: "80.6%",
              marginTop: "11px",
              zIndex: 400,
              display: `${openDocument ? 'block' : 'none'}`
            }}>
          <LuX/>
        </IconButton>
        <Box
            sx={{justifyContent: "center", display: 'flex', position: "absolute", left: "70%", top: "12%"}}>
          <Badge badgeContent={count} color="primary">
            <Button variant="outlined" color="secondary"
                    size="large"
                    onClick={() => setOpenDocument(true)}
                    sx={{width: "180px", height: "40px", border: "2px solid black", color: "black"}}>
              Your Report
            </Button>
          </Badge>
        </Box>

        <Box
            sx={{justifyContent: "center", display: 'flex', position: "absolute", left: "40%", top: "13%"}}>
          {currentView === 'profile' && <Typography sx={{
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            left: "-198px",
            marginTop: "0px"
          }}><Checkbox
              checked={isItemChecked}
              onClick={(e) => {
                selectAll(e)
              }}
              inputProps={{'aria-label': 'controlled'}}
          />
          </Typography>
          }
          {currentView === 'news' && <Typography sx={{
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            left: "14%",
            marginTop: "0px"
          }}><Checkbox
              checked={isItemChecked}
              onClick={(e) => {
                selectAllNews(e)
              }}
              inputProps={{'aria-label': 'controlled'}}
          />
          </Typography>
          }
          {currentView === 'sanctions' && <Typography sx={{
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            left: "14%",
            marginTop: "0px"
          }}><Checkbox
              checked={isItemChecked}
              onClick={(e) => {
                selectAllOpenSanctions(e)
              }}
              inputProps={{'aria-label': 'controlled'}}
          />
          </Typography>
          }

          <LuDownload style={{cursor: "pointer", zIndex: 4, width: 100, height: 25, color:"grey"}}/>
          <Divider sx={{height: 70, m: 0.5}} orientation="vertical"/>
          <LuPrinter style={{cursor: "pointer", zIndex: 4, width: 100, height: 25, color:"grey"}}/>
          <Divider sx={{height: 70, m: 0.5}} orientation="vertical"/>
          <LuMail style={{cursor: "pointer", zIndex: 4, width: 100, height: 25, color:"grey"}}/>
        </Box>
        {currentView === 'profile' && companyData.map((item, index) => (
            <Box sx={{flexGrow: 1, backgroundColor: "#f2f4f7"}}>
              <Typography sx={{
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                gap: "8px",
                justifyContent: "center",
                position: "absolute",
                left: "27%",
                marginTop: "90px",
                zIndex: 300
              }}><Checkbox
                  checked={reports.includes(item.name)}
                  onClick={(e) => {
                    selectCompany(e, index)
                  }}
                  inputProps={{'aria-label': 'controlled'}}
              />
                <h3 style={{
                  color:"grey"
                }}>{index + 1 + "."}</h3>
              </Typography>
              <Grid container spacing={3} sx={{
                justifyContent: "center",
                marginTop: 0,
                display: 'flex',
                position: "relative",
                left: 0,
                top: "60px",
                backgroundColor: "#f2f4f7"
              }}>
                <Grid item xs={6} md={4}>
                  <Grid item sx={{justifyContent: "center"}}>
                    <Card sx={{textAlign: "center"}}>
                      <CardContent sx={{padding: "48px"}}>
                        <Box
                            marginTop={"24px"}>
                          {item.name}
                        </Box>
                        <Typography
                            display={"flex"}
                            fontWeight={600}
                            color={"grey.600"}
                            marginTop={"24px"}
                        >
                          Address:
                          <Typography marginLeft={"8px"} variant="body1">
                            {item.registered_address_in_full ? item.registered_address_in_full : ""}
                          </Typography>
                        </Typography>
                        <Typography
                            display={"flex"}
                            fontWeight={600}
                            color={"grey.600"}
                        >
                          Registration Number:
                          <Typography marginLeft={"8px"} variant="body1">
                            {item.company_number}
                          </Typography>
                        </Typography>
                        <Typography
                            display={"flex"}
                            fontWeight={600}
                            color={"grey.600"}
                        >
                          SIC(Cod Caen):
                          <Typography marginLeft={"8px"} variant="body1">
                            {item.industry_codes.length > 0 &&
                                item.industry_codes.map((val) => (
                                    <Typography variant="body1">
                                      {val.industry_code.code}
                                    </Typography>
                                ))}
                          </Typography>
                        </Typography>
                        <Typography
                            display={"flex"}
                            fontWeight={600}
                            color={"grey.600"}
                        >
                          Date of Incorporation:
                          <Typography marginLeft={"8px"} variant="body1">
                            {item.incorporation_date ? item.incorporation_date : ""}
                          </Typography>
                        </Typography>
                        <Typography
                            display={"flex"}
                            fontWeight={600}
                            color={"grey.600"}
                        >
                          Status:
                          <Typography marginLeft={"8px"} variant="body1">
                            {item.current_status ? item.current_status : ""}
                          </Typography>
                        </Typography>
                        <Typography
                            display={"flex"}
                            fontWeight={600}
                            color={"grey.600"}
                        >
                          Jurisdiction:
                          <Typography marginLeft={"8px"} variant="body1">
                            {item.jurisdiction_code[Object.keys(item.jurisdiction_code)].country}
                          </Typography>
                        </Typography>
                        <Box textAlign={"start"} marginTop={"24px"}>
                          <Button sx={{position: "absolute", zIndex: 3, left: "58%", top: "55%"}}
                                  onClick={() => handleOpen(index)}
                                  className="project-card card p-0 border-5 border-dark shadow-lg">
                            Preview
                          </Button>
                          <Button variant="outlined" color="secondary"
                                  sx={{position: "absolute", zIndex: 3, left: "55%", top: "15%", border: "2px solid black", color: "black"}}
                                  onClick={() => addReport(item.name)}
                                  className="project-card card p-0 border-5 border-dark shadow-lg">
                            <Plus style={{marginRight: "6px"}}/> Add to Report
                          </Button>
                          <BootstrapDialog
                              TransitionComponent={Transition}
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
                                {item.company_number}
                              </Typography>
                              <Typography marginLeft={"8px"} variant="body1">
                                {item.registered_address_in_full ? item.registered_address_in_full.toUpperCase() : ""}
                              </Typography>
                              <Typography marginLeft={"8px"} variant="body1">
                                {item.registered_address ? item.registered_address.country.toUpperCase() : ""}
                              </Typography>
                              <Typography marginLeft={"8px"} variant="body1">
                                {item.jurisdiction_code.name}
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
                                  <Link href={item.source.url} variant="body2">
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
                                  {item.industry_codes.length > 0 &&
                                      item.industry_codes.map((val) => (
                                          <Typography marginLeft={"8px"} variant="body1">
                                            {val.industry_code.code}
                                          </Typography>
                                      ))}
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

        {currentView === 'news' && negativeNews.map((item, index) => (
            <Box sx={{flexGrow: 1, backgroundColor: "#f2f4f7"}}>
              <Typography sx={{
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                left: "27%",
                marginTop: "50px"
              }}><Checkbox
                  checked={reports.includes(item.title)}
                  onClick={(e) => {
                    selectCompany(e, index)
                  }}
                  inputProps={{'aria-label': 'controlled'}}
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
                                  onClick={() => addReport(item.title)}
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
                                      sx={{
                                        textAlign: "center",
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        top: "0"
                                      }}
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
            <Box sx={{flexGrow: 1, backgroundColor: "#f2f4f7"}}>
              <Typography sx={{
                textAlign: "center",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                left: "27%",
                marginTop: "30px"
              }}><Checkbox
                  checked={reports.includes(item.caption)}
                  onClick={(e) => {
                    selectCompany(e, index)
                  }}
                  inputProps={{'aria-label': 'controlled'}}
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
                <Box sx={{position: "absolute", left: "-35%", top: "12%"}} width={"100%"}>
                  <ReactApexChart
                      className="apex-charts"
                      options={basicRadialBarOpts}
                      height={140}
                      series={[item.score]}
                      type="radialBar"
                  />
                </Box>
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
                                  onClick={() => addReport(item.caption)}
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
                                      sx={{
                                        textAlign: "center",
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        top: "0"
                                      }}
                                      onClick={() => addReport(item.caption)}
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
                                  {Object.keys(item.the_dot.datasets).length > 0 && item.the_dot.datasets[item.datasets[0]].publisher ? item.the_dot.datasets[item.datasets[0]].publisher : ""}
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

export default Statistics;
