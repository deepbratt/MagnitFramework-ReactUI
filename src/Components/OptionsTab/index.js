/* eslint-disable no-undef */
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import OptionTabStyles from "./style";
import { TabText } from "./TabText";
import Breakpoints from "../../Theme/theme.breakpoints";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const { tabPanel } = OptionTabStyles();

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
export default function OptionsTab({ data }) {
  const { root, tabs, tab, tabPanel } = OptionTabStyles();
  const [value, setValue] = React.useState(0);
  const item1 = data[0];
  const item2 = data[1];
  const item3 = data[2];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={root}>
      <Tabs
        className={tabs}
        orientation={Breakpoints === "medium" ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab className={tab} label="Full Time Hiring" {...a11yProps(0)} />
        <Tab className={tab} label="Pay as you go hiring" {...a11yProps(1)} />
        <Tab className={tab} label="Fixed cost hiring" {...a11yProps(2)} />
      </Tabs>

      {item1 && item2 && item3 && (
        <>
          <TabPanel className={tabPanel} value={value} index={0}>
            <TabText
              heading={item1.heading}
              text={item1.text}
              buttonLabel={item1.buttonLabel}
              buttonLink={item1.buttonLink}
              payload={item1.items}
            />
          </TabPanel>
          <TabPanel className={tabPanel} value={value} index={1}>
            <TabText
              heading={item2.heading}
              text={item2.text}
              buttonLabel={item2.buttonLabel}
              buttonLink={item2.buttonLink}
              payload={item2.items}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TabText
              heading={item3.heading}
              text={item3.text}
              buttonLabel={item3.buttonLabel}
              buttonLink={item3.buttonLink}
              payload={item3.items}
            />
          </TabPanel>
        </>
      )}
    </div>
  );
}
