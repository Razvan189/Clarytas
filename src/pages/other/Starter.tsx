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




export const Starter = () => {
    const [query, setQuery] = useState("");
    const [companyData, setCompanyData] = useState({});
    const [value, setValue] = useState('company');
    const [dynamic, setDynamic] = useState("")
    const [checked, setChecked] = useState(false);

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
        console.log(array)
    }

    return (
        <>
            <Box sx={{typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', display: "flex", justifyContent: "center", top: "35%", left: "45%", position: "absolute" }}>
                        <TabList onChange={changeTab} aria-label="lab API tabs example">
                            <Tab label="Company" value="company" />
                            <Tab label="Person" value="person" />
                        </TabList>
                    </Box>
                    <TabPanel value="company">
                        <Paper
                            component="form"
                            sx={{ p: '10px 15px', display: 'flex', alignItems: 'center', width: 1000, height: 50, position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Enter a company name"
                                value = {query}
                                onChange={handleChange}
                            />
                            <IconButton type="button" sx={{    ml: 1,
                                "&.MuiButtonBase-root:hover": {
                                    bgcolor: "transparent"
                                }, backgroundColor: 'transparent', p: '5px', align: "center" }} aria-label="search">
                                <Divider sx={{ height: 70, m: 0.5 }} orientation="vertical" />
                                <SearchIcon
                                    onClick={() => clickSearch()}
                                    sx={{  marginLeft: '12px', width: 55, height: 50 }} />
                            </IconButton>
                        </Paper>
                        <FormControlLabel sx={{ p: '10px 15px', display: 'flex', alignItems: 'center', width: 300, height: 50, position: "absolute", left: "70%", top: "42%", transform: "translate(-50%, -50%)"}} control={<Switch checked={checked} onChange={toggle} />} label="Advanced filter" />
                        <Collapse orientation="horizontal" in={checked}>
                            <div style={{backgroundColor: "black"}}>
                                <Box sx={{position: "absolute", top: "60%", left:"20%", }}>
                                    <Paper
                                        component="form"
                                        sx={{ marginBottom: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Full Business Name"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginBottom: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="DBA Name"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form">
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Former business names"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                    sx={{marginTop: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Registration number"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginTop: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Country"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                </Box>
                                <Box sx={{position: "absolute", top: "60%", left:"60%"}}>
                                    <Paper
                                        component="form"
                                        sx={{ marginBottom: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Company Type"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginBottom: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Date Of Incorporation"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form">
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Current Status"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginTop: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Subsidiaries"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                </Box>
                            </div>


                        </Collapse>
                    </TabPanel>
                    <TabPanel value="person">
                        <Paper
                            component="form"
                            sx={{ p: '10px 15px', display: 'flex', alignItems: 'center', width: 1000, height: 50, position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Enter a person name"
                                value = {query}
                                onChange={handleChange}
                            />
                            <IconButton type="button" sx={{    ml: 1,
                                "&.MuiButtonBase-root:hover": {
                                    bgcolor: "transparent"
                                }, backgroundColor: 'transparent', p: '5px', align: "center" }} aria-label="search">
                                <Divider sx={{ height: 70, m: 0.5 }} orientation="vertical" />
                                <SearchIcon
                                    onClick={() => clickSearch()}
                                    sx={{  marginLeft: '12px', width: 55, height: 50 }} />
                            </IconButton>
                        </Paper>
                        <FormControlLabel sx={{ p: '10px 15px', display: 'flex', alignItems: 'center', width: 300, height: 50, position: "absolute", left: "70%", top: "42%", transform: "translate(-50%, -50%)"}} control={<Switch checked={checked} onChange={toggle} />} label="Advanced filter" />
                        <Collapse orientation="horizontal" in={checked}>
                            <div style={{backgroundColor: "black"}}>
                                <Box sx={{position: "absolute", top: "57%", left: "20%", }}>
                                    <Paper
                                        component="form"
                                        sx={{ marginBottom: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Full Name"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginBottom: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Alias"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form">
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Former name"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{marginTop: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Date Of Birth"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginTop: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Doing Business In"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginTop: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Former Employer"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginTop: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Current Corporate Affiliations"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                </Box>
                                <Box sx={{position: "absolute", top: "57%", left:"60%"}}>
                                    <Paper
                                        component="form"
                                        sx={{ marginBottom: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Address(es)"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginBottom: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Citizens"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form">
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Phone Number(s)"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginTop: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Email address(es)"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginTop: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Universities attended"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginTop: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Current Employer"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginTop: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Previous Corporate Affiliations"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                    <Paper
                                        component="form"
                                        sx={{ marginTop: "25px"}}>
                                        <InputBase
                                            sx={{ ml: 1, flex: 1 }}
                                            placeholder="Business Partners or Associates"
                                            value ={dynamic}
                                            onChange={addFilter}

                                        />
                                        <Button variant="contained" color="primary" disable={query} size={"small"} onClick={(e) => add(e)}>
                                            ADD
                                        </Button>
                                    </Paper>
                                </Box>
                            </div>


                        </Collapse>
                    </TabPanel>

                </TabContext>
            </Box>


        </>
    );
};

export default Starter;
