import React from "react";
import { useStyles, THEME } from "./sectionStyles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CustomImage from "../../Components/CustomImage";


const PrimarySection = (props) => {
  const data = props.data
  const classes = useStyles();
  const {
    cardSec,
    card,
    devSec,
    content,
    supportSub,
    para
  } = classes;

  return (
    <>
     {data.map((text,index)=>{
       return(
        <section className={cardSec}>
        <Card className={card}>
          <CardContent key={index} className={content}>
            <section className={devSec}>
              <section
                style={{ backgroundColor: text.color }}
                className={supportSub}
              >
                <CustomImage alt="icon"  src={text.icon} />
              </section>
            </section>
            <MuiThemeProvider theme={THEME}>
              <section className={para}>
                <Typography variant="h5" color="inherit">
                  {text.title}
                </Typography>
                <Typography paragraph={true} color="inherit">
                  {text.desc}
                </Typography>
              </section>
            </MuiThemeProvider>
          </CardContent>
        </Card>
      </section>
      )
     })}
    </>
  );
};

export default PrimarySection;
