import React from "react";
import { useStyles, THEME } from "./sectionStyles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Colors } from "../../Theme/color.constants";
import CustomImage from "../../Components/CustomImage";
const {Mirage}=Colors;
const SecondarySection = (props) => {
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
                  <Typography variant="h5" >
                    {text.title}
                  </Typography>
                  <Typography paragraph={true} style={{color:Mirage}}>
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

export default SecondarySection;
