import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import OptionTabStyles from "./style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const { root, tabs, tab, tabPanel } = OptionTabStyles();

  return (
    <div
      className={tabPanel}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function OptionsTab() {
  const { root, tabs, tab, tabPanel } = OptionTabStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={root}>
      <Tabs
        className={tabs}
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab className={tab} label="Item One" {...a11yProps(0)} />
        <Tab className={tab} label="Item Two" {...a11yProps(1)} />
        <Tab className={tab} label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel className={tabPanel} value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel className={tabPanel} value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
