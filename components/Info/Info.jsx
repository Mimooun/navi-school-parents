"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from '../Info/info.module.css';
import Button from '@mui/material/Button';
import {BsFillTelephoneFill , BsShareFill} from 'react-icons/bs'
import {GrLocation} from 'react-icons/gr'

import Description from '../../pages/Description/Description'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} className={styles.info}>
      <div className={styles.container}>
        <div className={styles.titre}>Ecole la plume</div>
        <div className={styles.description}>école maternelle privée, école primaire privée, collège privée</div>
        <Button variant="contained">Contained</Button>
        <div className={styles.icons}>
            <div> <BsFillTelephoneFill /> </div>
            <div><GrLocation /></div>
            <div> <BsShareFill /></div>
        </div>
      </div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab
          label="Tab 1"
          {...a11yProps(0)}
          sx={{ marginRight: "100px" }} 
        />
        <Tab
          label="Tab 2"
          {...a11yProps(1)}
          sx={{ marginLeft: "100px" }} 
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Description />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Content for Tab 2
      </TabPanel>
    </Box>
  );
}
