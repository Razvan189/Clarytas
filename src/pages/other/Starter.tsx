/*
 * Copyright (c) 2023.
 * File Name: starter.tsx
 * Author: Coderthemes
 */

import React, {useEffect, useState} from "react";
import {
    Avatar,
    Box, Button, Collapse,
    Divider,
    FormControlLabel, Grid,
    IconButton,
    InputBase,
    MenuItem,
    Paper,
    styled,
    Switch,
    Tab,
    TextField
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useLocation, useNavigate} from "react-router-dom";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import avatar1 from "@src/assets/images/avatars/avatar1.png";
import "../../assets/css/plugins/dropdown.css";




export const Starter = () => {
    const [query, setQuery] = useState("");
    const [companyData, setCompanyData] = useState({});
    const [value, setValue] = useState('company');
    const [dynamic, setDynamic] = useState("")
    const [checked, setChecked] = useState(false);
    const [showFilter, setFilter] = useState(false)

    const [array, setArray] = useState([]);

    const toggle = () => {
        setChecked((prev) => !prev);
    };


    const changeTab = (event, newValue: string) => {
        setValue(newValue);
    };
    const navigate = useNavigate();
    const {state} = useLocation();
    useEffect(() => {
    }, [query]);
    const fetchData = (name: string) => {
        try {
            fetch(`https://api.clarytas.online/search?schema=${value}&search_text=${name}&filters=[${array}]&api_key=e10bbee5-b8b0-4d4f-bea7-8aba7eed5cef`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(async response => {
                console.log(response)

                const data = await response.json();
                setCompanyData(data);
                if(response.ok && value === 'company') {
                    navigate('/pages/statistics', {state: {data: data, from: "/pages/starter"}})
                }
                if(response.ok && value === 'person') {
                    navigate('/pages/personStatistics', {state: {data: data, from: "/pages/starter"}})
                }

            });
        }



        catch (e) {
            console.error(e)
        }
    }
    const clickSearch = () => {
        fetchData(query);
    }
    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    const addFilter = (event) => {
        setDynamic(event.target.value)
    }

    const add = () => {
        setArray([...array, dynamic]);
    }

    const rotate = !showFilter ? "rotate(90deg)" : "rotate(-90deg)"

    return (
        <>
            <Box sx={{typography: 'body1', width: "100%", height: "100%", backgroundImage: "linear-gradient(to bottom, #046380, #004e75, #003967, #002456, #050d42)" }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center", top: "20%", left: "50%", position: "absolute", transform: "translate(-50%, 50%)" }}>
                        <TabList onChange={changeTab} aria-label="lab API tabs example">
                            <Tab label="Company" value="company" sx={{"&.MuiButtonBase-root" :{
                                color: "white", fontSize: "28px"}
                                }} />
                            <Tab label="Person" value="person" sx={{"&.MuiButtonBase-root" :{
                                    color: "white", fontSize: "28px"}
                            }}/>
                        </TabList>
                    </Box>
                    <TabPanel value="company">
                        <button
                            onClick={() => setFilter(!showFilter)}
                            className="button">
                            Search Options
                            <svg fill="currentColor" viewBox="0 0 24 24" className="icon" style={{transform: rotate}}>
                                <path clip-rule="evenodd"
                                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                      fill-rule="evenodd"></path>
                            </svg>
                        </button>
                    <Paper
                        component="form"
                        sx={{
                            p: '10px 15px',
                            display: 'flex',
                            alignItems: 'center',
                            width: 1000,
                            height: 50,
                                position: "absolute",
                                left: "50%",
                                top: "40%",
                                transform: "translate(-50%, -50%)"
                            }}>
                            <InputBase
                                sx={{ml: 1, flex: 1}}
                                placeholder="Enter a company name"
                                value={query}
                                onChange={handleChange}
                            />
                            <IconButton type="button" sx={{
                                ml: 1,
                                "&.MuiButtonBase-root:hover": {
                                    bgcolor: "transparent"
                                }, p: '5px', align: "center"
                            }} aria-label="search">
                                <Divider sx={{height: 70, m: 0.5}} orientation="vertical"/>
                                <SearchIcon
                                    onClick={() => clickSearch()}
                                    sx={{marginLeft: '12px', width: 55, height: 50}}/>
                            </IconButton>
                        </Paper>
                        {showFilter &&
                            <Box>
                                <Grid container xs={4} xl={12} sx={{ position: "absolute", top: "60%", transform: "translate(-20%, 50%)"}}>
                                    <div class="container">
                                        <div class="container__item">
                                            <form className="form">
                                                <input type="email" className="form__field"
                                                       placeholder="Full Business Name"/>
                                                <button type="button" className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                            <form className="form">
                                                <input type="email" className="form__field"
                                                       placeholder="YDoing Business As (DBA) Name"/>
                                                <button type="button" className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                            <form className="form">
                                                <input type="email" className="form__field"
                                                       placeholder="Former business names"/>
                                                <button type="button" className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                            <form className="form">
                                                <input type="email" className="form__field"
                                                       placeholder="Registration Number"/>
                                                <button type="button" className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                            <form className="form">
                                                <input type="email" className="form__field" placeholder="Country"/>
                                                <button type="button" className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </Grid>
                            </Box>
                        }

                        {showFilter && <Box>
                            <Grid container xs={4} xl={12} sx={{ position: "absolute", top: "60%", transform: "translate(25%, 50%)"}}>
                        <div class="container">
                            <div class="container__item">
                                <form className="form">
                                    <input type="email" className="form__field"
                                           placeholder="Company Type"/>
                                    <button type="button" className="btn btn--primary btn--inside uppercase">add
                                    </button>
                                </form>
                                <form className="form">
                                    <input type="email" className="form__field"
                                           placeholder="Date of Incorporation"/>
                                    <button type="button" className="btn btn--primary btn--inside uppercase">add
                                    </button>
                                </form>
                                <form className="form">
                                    <input type="email" className="form__field"
                                           placeholder="Current Status"/>
                                    <button type="button" className="btn btn--primary btn--inside uppercase">add
                                    </button>
                                </form>
                                <form className="form">
                                    <input type="email" className="form__field"
                                           placeholder="Subsidiaries"/>
                                    <button type="button" className="btn btn--primary btn--inside uppercase">add
                                    </button>
                                </form>
                            </div>
                        </div>
                    </Grid>
            </Box>
                        }



                    </TabPanel>
                    <TabPanel value="person">
                        <button
                            onClick={() => setFilter(!showFilter)}
                            className="button">
                            Search Options
                            <svg fill="currentColor" viewBox="0 0 24 24" className="icon" style={{transform: rotate}}>
                                <path clip-rule="evenodd"
                                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                      fill-rule="evenodd"></path>
                            </svg>
                        </button>
                        <Paper
                            component="form"
                            sx={{
                                p: '10px 15px',
                                display: 'flex',
                                alignItems: 'center',
                                width: 1000,
                                height: 50,
                                position: "absolute",
                                left: "50%",
                                top: "40%",
                                transform: "translate(-50%, -50%)"
                            }}>
                            <InputBase
                                sx={{ml: 1, flex: 1}}
                                placeholder="Enter a person name"
                                value={query}
                                onChange={handleChange}
                            />
                            <IconButton type="button" sx={{
                                ml: 1,
                                "&.MuiButtonBase-root:hover": {
                                    bgcolor: "transparent"
                                }, backgroundColor: 'transparent', p: '5px', align: "center"
                            }} aria-label="search">
                                <Divider sx={{height: 70, m: 0.5}} orientation="vertical"/>
                                <SearchIcon
                                    onClick={() => clickSearch()}
                                    sx={{marginLeft: '12px', width: 55, height: 50}}/>
                            </IconButton>
                        </Paper>
                        {showFilter &&
                            <Box sx={{ transition: "all 5s ease-in-out"}}>
                                <Grid container xs={4} xl={12} sx={{ position: "absolute", top: "60%", transform: "translate(-20%, 50%)"}}>
                                    <div class="container">
                                        <div class="container__item">
                                            <form className="form">
                                                <input type="email" className="form__field"
                                                       placeholder="Full Name"/>
                                                <button type="button"
                                                        className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                            <form className="form">
                                                <input type="email" className="form__field"
                                                       placeholder="Alias"/>
                                                <button type="button"
                                                        className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                            <form className="form">
                                                <input type="email" className="form__field"
                                                       placeholder="Maiden or former name"/>
                                                <button type="button"
                                                        className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                            <form className="form">
                                                <input type="email" className="form__field"
                                                       placeholder="Phone Number(s)"/>
                                                <button type="button"
                                                        className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                            <form className="form">
                                                <input type="email" className="form__field"
                                                       placeholder="Date of Birth"/>
                                                <button type="button"
                                                        className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                            <form className="form">
                                                <input type="email" className="form__field"
                                                       placeholder="Doing Business in"/>
                                                <button type="button"
                                                        className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                            <form className="form">
                                                <input type="email" className="form__field"
                                                       placeholder="Address(es)"/>
                                                <button type="button"
                                                        className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                            <form className="form">
                                                <input type="email" className="form__field"
                                                       placeholder="Citizenships"/>
                                                <button type="button"
                                                        className="btn btn--primary btn--inside uppercase">add
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </Grid>
                            </Box>
                        }
                        {showFilter &&
                            <Box>
                                <Grid container xs={4} xl={12}
                                      sx={{position: "absolute", top: "60%", transform: "translate(25%, 50%)"}}>
                                <div class="container">
                                    <div class="container__item">
                                        <form className="form">
                                            <input type="email" className="form__field"
                                                   placeholder="Email address(es)"/>
                                            <button type="button" className="btn btn--primary btn--inside uppercase">add
                                            </button>
                                        </form>
                                        <form className="form">
                                            <input type="email" className="form__field"
                                                   placeholder="Universities attended"/>
                                            <button type="button" className="btn btn--primary btn--inside uppercase">add
                                            </button>
                                        </form>
                                        <form className="form">
                                            <input type="email" className="form__field"
                                                   placeholder="Current Employer"/>
                                            <button type="button" className="btn btn--primary btn--inside uppercase">add
                                            </button>
                                        </form>
                                        <form className="form">
                                            <input type="email" className="form__field"
                                                   placeholder="Current Employer"/>
                                            <button type="button" className="btn btn--primary btn--inside uppercase">add
                                            </button>
                                        </form>
                                        <form className="form">
                                            <input type="email" className="form__field"
                                                   placeholder="Former Employer(s)"/>
                                            <button type="button" className="btn btn--primary btn--inside uppercase">add
                                            </button>
                                        </form>
                                        <form className="form">
                                            <input type="email" className="form__field"
                                                   placeholder="Current Corporate Affiliations"/>
                                            <button type="button" className="btn btn--primary btn--inside uppercase">add
                                            </button>
                                        </form>
                                        <form className="form">
                                            <input type="email" className="form__field"
                                                   placeholder="Previous Corporate Affiliations"/>
                                            <button type="button" className="btn btn--primary btn--inside uppercase">add
                                            </button>
                                        </form>
                                        <form className="form">
                                            <input type="email" className="form__field"
                                                   placeholder="Business Partners or Associates"/>
                                            <button type="button" className="btn btn--primary btn--inside uppercase">add
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </Grid>
                        </Box>
                        }

                    </TabPanel>

                </TabContext>
            </Box>


        </>
    );
};

export default Starter;
