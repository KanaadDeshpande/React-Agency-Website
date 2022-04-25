import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import InputBase from "@material-ui/core/InputBase";
import NativeSelect from "@material-ui/core/NativeSelect";
import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ServicesTab from "../../componentsJSX/Home/ServicesTab";
import data from "../../data/Home/Services.json";
import AppDesignIcon from "../../images/svg/Home/Services/points/AppDesign.svg";
import AppDevIcon from "../../images/svg/Home/Services/points/AppDev.svg";
import GoogleAdwordsIcon from "../../images/svg/Home/Services/points/GoogleAdwords.svg";
import LeadGenerationIcon from "../../images/svg/Home/Services/points/LeadGeneration.svg";
import LogoDesignIcon from "../../images/svg/Home/Services/points/LogoDesign.svg";
import OfficeKitsIcon from "../../images/svg/Home/Services/points/OfficeKits.svg";
import PromoVideoIcon from "../../images/svg/Home/Services/points/PromoVideo.svg";
import SEOIcon from "../../images/svg/Home/Services/points/SEOIcon.svg";
import SoftwareDevIcon from "../../images/svg/Home/Services/points/SoftwareDev.svg";
import WebDesignIcon from "../../images/svg/Home/Services/points/WebDesign.svg";
import WebDevIcon from "../../images/svg/Home/Services/points/WebDev.svg";
import GraphicTabImage from "../../images/svg/Home/Services/Tab/GraphicTab.svg";
import ITServicesTabImage from "../../images/svg/Home/Services/Tab/ITServicesTab.svg";
import MarketingTabImage from "../../images/svg/Home/Services/Tab/MarketingTab.svg";
import UIUXTabImage from "../../images/svg/Home/Services/Tab/UIUXTab.svg";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#9AC5FE",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      backgroundColor: "#9AC5FE",
    },
  },
}))(InputBase);

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
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function SimpleTabs() {
  const [value, setValue] = useState(0);

  const images = [
    ITServicesTabImage,
    GraphicTabImage,
    MarketingTabImage,
    UIUXTabImage,
  ];
  const icons = [
    [WebDevIcon, AppDevIcon, SoftwareDevIcon],
    [LogoDesignIcon, OfficeKitsIcon, PromoVideoIcon],
    [SEOIcon, GoogleAdwordsIcon, LeadGenerationIcon],
    [WebDesignIcon, AppDesignIcon],
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeResponsive = (evt) => {
    setValue(parseInt(evt.target.value));
  };

  return (
    <div className="root">
      <h1 className="home_title dfa jcca aica taca white-title">
        Services to Amplify Your Growth
      </h1>
      <AppBar position="static" className="appbar" elevation={0} border={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="IT Services" {...a11yProps(0)} className="nav-tab" />
          <Tab
            label="Graphic Designing"
            {...a11yProps(1)}
            className="nav-tab"
          />
          <Tab
            label="Digital Marketing"
            {...a11yProps(2)}
            className="nav-tab"
          />
          <Tab label="UI/UX Designing" {...a11yProps(3)} className="nav-tab" />
        </Tabs>
      </AppBar>
      <hr className="divider"></hr>
      <FormControl className="dropdown_button">
        <NativeSelect
          className="native-select"
          onChange={handleChangeResponsive}
          input={<BootstrapInput />}
        >
          <option value={0}>IT Services</option>
          <option value={1}>Graphic Designing</option>
          <option value={2}>Digital Marketing</option>
          <option value={3}>UI/UX Designing</option>
        </NativeSelect>
      </FormControl>
      {data.services.map((service, index) => (
        <TabPanel value={value} index={index} key={service.tabHeading}>
          <ServicesTab
            tabHeading={service.tabHeading}
            description={service.description}
            mainsvg={images[index]}
            points={service.points}
            icons={icons[index]}
            link={service.link}
          />
        </TabPanel>
      ))}
    </div>
  );
}
