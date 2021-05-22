import React from "react";
import useStyles from "./useStyles";
import { Grid, Typography, List, ListItem } from "@material-ui/core";
import CustomButton from "../../Components/CustomButton";
import CustomImage from "../../Components/CustomImage";

const PricingContext = ({ data }) => {
  const { wrapper, box, price, list, button , Img,span} = useStyles();
  return (
    <> 
 
      <Grid spacing={0} container>
        <Grid item className={wrapper}>
          {data.map((content, index) => {
            return (
              <Grid 
                key={index}
                style={{
                  background: `linear-gradient(-181.96deg ,
                     ${content.color1} -98.18%, 
                     ${content.color2} 85.96%)`,
                     position: "relative"
                }}
                item
                className={box}
                lg={3}
                md={5}
                xs={12}
              >
                <Grid  item xs={12}>
                  <Typography
                    style={{
                      background: `linear-gradient(-181.96deg , 
                        ${content.main1} -98.18%, 
                        ${content.main2} 85.96%)`,
                      position: "absolute",
                      left: "0",
                      right: "0"
                    }}
                    variant="body1"
                  >
                    {content.Icon ? <img alt="img" className={Img} src={content.Icon} /> : null}
                    {content.popular}
                  </Typography>
                </Grid>

                <CustomImage
                  style={{ padding: "10px 0 0 0" ,width: "180px"}}
                  alt="img"
                  src={content.Img}
                />

                <Grid item className={price}>
                  <Typography  variant="h2">{content.price}</Typography>
                  <Typography className={span} variant="h5">{content.span}</Typography>
                </Grid>
                <Grid item >
                  <Typography className={list} variant="h4">
                    {content.title}
                  </Typography>
                  <Typography className={list} variant="body2">
                    {content.subTitle}
                  </Typography>
                  <List style={{marginTop: "20px"}}>
                    <ListItem className={list}>
                      <img className={Img} alt="img" src={content.check} />
                      <Typography variant="h5">{content.item1}</Typography>
                    </ListItem>
                    <ListItem className={list}>
                      <img className={Img} alt="img" src={content.check} />
                      <Typography variant="h5">{content.item2}</Typography>
                    </ListItem>
                    <ListItem className={list}>
                      <img className={Img} alt="img" src={content.check} />
                      <Typography variant="h5">{content.item3}</Typography>
                    </ListItem>
                    <ListItem className={list}>
                      <img className={Img} alt="img" src={content.check} />
                      <Typography variant="h5">{content.item4}</Typography>
                    </ListItem>
                    <ListItem className={list}>
                      <img className={Img} alt="img" src={content.check} />
                      <Typography variant="h5">{content.item5}</Typography>
                    </ListItem>
                  </List>
                </Grid>
                <CustomButton className={button}>
                  {content.buttonText}
                </CustomButton>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default PricingContext;
