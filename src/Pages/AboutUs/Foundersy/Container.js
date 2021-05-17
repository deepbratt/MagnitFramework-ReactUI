import React from 'react'
import { useStyles } from "../NumberContext/numberStyles";
import { FoundersyStyles } from "./foundersyStyles";
import Heading5 from "../../../ContainerStructure/Headings/Heading5";
import Heading6 from "../../../ContainerStructure/Headings/Heading6";
import {
  Card,
  CardContent,
  Hidden,
} from "@material-ui/core";
import Paragraph from "../../../ContainerStructure/Headings/Paragraphs/Paragraph";
import { MainData } from "../../../Utils/Constants/Language/AboutUsData";
import CustomImage from '../../../Components/CustomImage';


const Container = () => {
    const { cardSec, devSec } = useStyles();
    const { card, Icon, dev } = FoundersyStyles();
    const { Img, subTitle, span, paragraph } = MainData;
    return (
        <>
          <section className={cardSec}>
          <Hidden lgUp>
            <Card className={card}>
              <CardContent>
                <section className={devSec}>
                  <CustomImage className={Icon} src={Img} alt="Icon" />
                  <section className={dev}>
                    <Heading6 title={subTitle} />
                    <Heading5 subTitle={span} />
                  </section>
                  <Paragraph para={paragraph} />
                </section>
              </CardContent>
            </Card>
          </Hidden>
          <Hidden mdDown>
            <Card className={card}>
              <CardContent>
                <section className={devSec}>
                  <CustomImage className={Icon} src={Img} alt="Icon" />
                  <section className={dev}>
                    <Heading6 title={subTitle} />
                    <Heading5 subTitle={span} />
                  </section>
                  <Paragraph para={paragraph} />
                </section>
              </CardContent>
            </Card>
            <Card className={card}>
              <CardContent>
                <section className={devSec}>
                  <CustomImage className={Icon} src={Img} alt="Icon" />
                  <section className={dev}>
                    <Heading6 title={subTitle} />
                    <Heading5 subTitle={span} />
                  </section>
                  <Paragraph para={paragraph} />
                </section>
              </CardContent>
            </Card>
            <Card className={card}>
              <CardContent>
                <section className={devSec}>
                  <CustomImage className={Icon} src={Img} alt="Icon" />
                  <section className={dev}>
                    <Heading6 title={subTitle} />
                    <Heading5 subTitle={span} />
                  </section>
                  <Paragraph para={paragraph} />
                </section>
              </CardContent>
            </Card>
          </Hidden>
        </section> 
        </>
    )
}

export default Container
