import { Grid } from "@material-ui/core";
import React from "react";
import useStyles from "./useStyles";
import { ReactComponent as MiddleImgBtn } from "../../assets/CaseStudies/middle.svg";
import CircleImageText from "../../Components/CircleImageText";
import { useHistory } from "react-router";

const ResponsiveInterActiveSection = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;

  return (
    <Grid
      container
      style={{ display: "flex" }}
      justify="space-evenly"
      wrap="wrap"
      spacing={0}
    >
      <Grid item xs={12}>
        <MiddleImgBtn
          className={classes.middleImage}
          onClick={() => {
            history.push("/");
          }}
        />
      </Grid>
      {data.map((item, index) => (
        <CircleImageText
          key={"responsiveInteractive-" + index}
          innerImg={item.image}
          text={item.title}
          textRight
          clickHandler={() => {
            props.scrollRef.current[index].current.scrollIntoView();
          }}
        />
      ))}
    </Grid>
  );
};

export default ResponsiveInterActiveSection;
