import * as React from 'react';
import {
  Avatar, Badge,
  Box,
  Button,
  Card,
  CardContent,
  Divider, Drawer, Fade,
  Grid,
  IconButton, InputBase, Modal,
  Pagination, Paper,
  Popover,
  SwipeableDrawer, Tab,
  Typography
} from "@mui/material";
import {forwardRef, Fragment, ReactNode, useEffect, useState} from "react";
import Link from '@mui/material/Link';
import { useLocation, useNavigate} from "react-router-dom";
import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";
import {ComponentContainerCard, PageBreadcrumb} from "@src/components";
import SearchIcon from "@mui/icons-material/Search";
import ErrorNotFound from "@src/pages/error/ErrorNotFound.tsx";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import { styled, css } from '@mui/system';
import {LuDownload, LuFilePlus2, LuMail, LuPrinter} from "react-icons/lu";
import {Plus} from "lucide-react";
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import {useDemoData} from "@mui/x-data-grid-generator";



const Statistics = () => {
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

  const [companyData, setCompanyData] = useState(state.data.oc);
  const [negativeNews, setNegativeNews] = useState(state.data.gc);
  const [openSanctions, setOpenSanctions] = useState(state.data.os);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentNgPage, setCurrentNgPage] = useState(1);
  const [currenOsPage, setCurrentOsPage] = useState(1);
  const [value, setValue] = useState('company');
  const [query, setQuery] = useState("");
  const currentNegativeNews = negativeNews[currentNgPage - 1];
  const currentOpenSanction = openSanctions[currenOsPage - 1];

  const [count, setCount] = useState(0);

  const [open, setOpen] = useState(undefined);
  const handleOpen = (id) => setOpen(id);
  const handleClose = () => setOpen(undefined);


  const setCurrentView = (view: string) => {
    setView(view);
  };

  const changeTab = (event, newValue: string) => {
    setValue(newValue);
  };

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
    try {
      fetch(`https://api.clarytas.online/report?schema=${value}&search_text=${name}&api_key=993fffa7-172b-411d-8267-b3d512343a92`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      }).then(async response => {
        setCount(count => count + 1)
        const data = await response.text();

        console.log('DATA', JSON.parse(data));
      });
    }



    catch (e) {
      console.error(e)
    }
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }


  useEffect(() => {
      console.log(companyData);
  }, [query]);

  const searchClick = () => {
    fetchData(query);
  }

  const Backdrop = React.forwardRef<HTMLDivElement, { open?: boolean }>(
      (props, ref) => {
        const { open, ...other } = props;
        return (
            <Fade in={open}>
              <div ref={ref} {...other} />
            </Fade>
        );
      },
  );



    return (
      <>
        <PageBreadcrumb title="Statistics"  subName="Home" path={"/pages/Starter"}/>
        <Sidebar  rootStyles={{
          position: "absolute",
          height: "100%",
        }}>
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
            <SubMenu label="Categories" >
              <MenuItem active={currentView === 'news'} onClick={() => setCurrentView('news')}> Negative News </MenuItem>
              <MenuItem active={currentView === 'profile'} onClick={() => setCurrentView('profile')}> Company Sources </MenuItem>
              <MenuItem  active={currentView === 'sanctions'} onClick={() => setCurrentView('sanctions')}> Sanctions & Watchlists </MenuItem>
              <MenuItem  active={currentView === 'exposed'} onClick={() => setCurrentView('exposed')}> Politically Exposed Persons </MenuItem>
              <MenuItem  active={currentView === 'legal'} onClick={() => setCurrentView('legal')}> Legal Sources </MenuItem>
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
        <Grid container xs={6}  sx={{ justifyContent: "center", display: 'flex', position: "absolute", left: "40%", top: "10%"}}>
          <Badge badgeContent={count} color="primary">
            <Button variant="outlined" color="secondary">
              Your Report
            </Button>
          </Badge>
        </Grid>
        <Grid container xs={6}  sx={{ justifyContent: "center", display: 'flex', position: "absolute", left: "20%", top: "10%"}}>
          <LuDownload style={{ cursor: "pointer", zIndex: 4, width: 100, height: 25 }}  />
          <LuPrinter style={{ cursor: "pointer", zIndex: 4, width: 100, height: 25 }}  />
          <LuMail style={{ cursor: "pointer", zIndex: 4, width: 100, height: 25  }}  />
        </Grid>
        <Divider sx={{ width: "50%", my: 2, left: "25%", top: "15%", position: "absolute" }}/>
          {currentView === 'profile' && companyData.map((item, index) => (
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}  sx={{ justifyContent: "center", marginTop: 0, display: 'flex', position: "relative", left: 0, top: 0}}>
                <Grid item xs={4}  >
                  <Grid item  sx={{ justifyContent: "center"}}>
                    <Card sx={{ textAlign: "center" }}>
                      <CardContent sx={{ padding: "48px" }}>
                        <Box
                            marginTop={"24" +
                                "px"}>
                          {item.name}
                        </Box>
                        <Box textAlign={"start"} marginTop={"24px"}>
                          <Button sx={{position: "absolute", zIndex: 3, left: "60%", top: "50%"}} onClick={()=>handleOpen(index)} className="project-card card p-0 border-5 border-dark shadow-lg">
                            Preview
                          </Button>
                          <Button variant="outlined" color="secondary" sx={{position: "absolute", zIndex: 3, left: "58%", top: "20%"}} onClick={()=>addReport(item.name)} className="project-card card p-0 border-5 border-dark shadow-lg">
                            <Plus style={{ marginRight: "6px" }} /> Add to Report
                          </Button>
                          <Modal
                              aria-labelledby="unstyled-modal-title"
                              aria-describedby="unstyled-modal-description"
                              open={open === index}
                              onClose={handleClose}
                          >
                            <ModalContent sx={{ width: 1000, height: 1000 }}>
                          <Typography
                              display={"flex"}
                              fontWeight={600}
                              color={"grey.600"}
                              component={"p"}
                              marginBottom={"12px"}>
                            Registration number :
                            <Typography marginLeft={"8px"} variant="body1">
                              {item.company_number}
                            </Typography>
                          </Typography>
                          <Typography
                              display={"flex"}
                              fontWeight={600}
                              color={"grey.600"}
                              component={"p"}
                              marginBottom={"12px"}>
                            Date of incorporation :
                            <Typography marginLeft={"8px"} variant="body1">
                              {item.incorporation_date}
                            </Typography>
                          </Typography>
                          <Typography
                              display={"flex"}
                              fontWeight={600}
                              color={"grey.600"}
                              component={"p"}
                              marginBottom={"12px"}>
                            Status :
                            {item.current_status &&
                                <Typography marginLeft={"8px"} variant="body1">
                                  {item.inactive ? "Active" : "Inactive"}
                                </Typography>
                            }
                          </Typography>
                          <Typography
                              display={"flex"}
                              fontWeight={600}
                              color={"grey.600"}
                              component={"p"}
                              marginBottom={"12px"}>
                            Jurisdiction :
                            {item.jurisdiction_code &&
                                <Typography marginLeft={"8px"} variant="body1">
                                  {item.jurisdiction_code}
                                </Typography>
                            }
                          </Typography>
                          <Typography
                              display={"flex"}
                              fontWeight={600}
                              color={"grey.600"}
                              component={"p"}
                              marginBottom={"12px"}>
                            Source :
                            {item.source &&
                                <Typography marginLeft={"8px"} variant="body1">
                                  <Link href={item.source.url} variant="body2">
                                    {item.source.publisher}
                                  </Link>
                                </Typography>
                            }
                          </Typography>
                            </ModalContent>
                          </Modal>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>

                </Grid>

              </Grid>



            </Box>
          ))}

        {currentView === 'news' && currentNegativeNews &&
          <Box>
            <Grid container spacing={0}  sx={{ direction:"column", justifyContent: "center", width: "100%"}}>
              <Grid item xs={4} >
                <Grid item>
                  <Card sx={{ textAlign: "center" }}>
                    <CardContent sx={{ padding: "48px" }}>
                      <Box
                        marginTop={"24px"}>
                        {currentNegativeNews.title}
                      </Box>
                      <Typography
                          textAlign={"start"}
                          component={"h2"}
                          marginBottom={"4px"}
                          marginTop={"12px"}
                          fontSize={"24px"}
                          lineHeight={"28px"}>
                        {currentNegativeNews.snippet}
                        <Link href={currentNegativeNews.link} variant="body2">link</Link>
                      </Typography>
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
                        <Box marginTop={"12px"}>
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
