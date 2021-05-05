import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import OptionTabStyles from "./style";
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
        orientation={Breakpoints === "medium" ? "horizontal" : "vertical"}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab className={tab} label="Full Time Hiring" {...a11yProps(0)} />
        <Tab className={tab} label="Pay as you Go Hiring" {...a11yProps(1)} />
        <Tab className={tab} label="Fixed Cost Hiring" {...a11yProps(2)} />
      </Tabs>
      <TabPanel className={tabPanel} value={value} index={0}>
        <Typography variant="h3" gutterBottom>
          Full Time Hiring
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          The developer works for total 160 hours in a month (20 days a month
          and 8 hours per day)
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Online time sheet is maintained and shared with you
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Developer communicates through your preferred communication channel
          (Email/Skype/WhatsApp/TeamViewer)
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Monthly Billing
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          No minimum commitment
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Anytime contract cancellation
        </Typography>
      </TabPanel>
      <TabPanel className={tabPanel} value={value} index={1}>
        <Typography variant="h3" gutterBottom>
          Pay as you Go Hiring
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          The developer works for total 160 hours in a month (20 days a month
          and 8 hours per day)
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Online time sheet is maintained and shared with you
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Developer communicates through your preferred communication channel
          (Email/Skype/WhatsApp/TeamViewer)
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Monthly Billing
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          No minimum commitment
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Anytime contract cancellation
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h3" gutterBottom>
          Fixed Cost Hiring
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          The developer works for total 160 hours in a month (20 days a month
          and 8 hours per day)
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Online time sheet is maintained and shared with you
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Developer communicates through your preferred communication channel
          (Email/Skype/WhatsApp/TeamViewer)
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Monthly Billing
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          No minimum commitment
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Anytime contract cancellation
        </Typography>
      </TabPanel>
    </div>
  );
}
