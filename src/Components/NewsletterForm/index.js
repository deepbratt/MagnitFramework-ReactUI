import { Card, Button, Typography, TextField } from "@material-ui/core";
import NewsletterStyle from "./style";
import QuarterCircle from "../../assets/images/QuarterCircle.png";
import HalfCircle from "../../assets/images/HalfCircle.png";
import Triangle from "../../assets/images/Triangle.png";
import CustomButton from "../CustomButton";

const NewsletterForm = () => {
  const {
    root,
    title,
    form,
    input,
    quarterCircle,
    halfCircle,
    triangle,
  } = NewsletterStyle();
  return (
    <Card className={root}>
      <Typography className={title} variant="h2" gutterBottom>
        Ready to Discuss Your Project?
      </Typography>
      <CustomImage className={quarterCircle} src={QuarterCircle} />
      <CustomImage className={halfCircle} src={HalfCircle} />
      <CustomImage className={triangle} src={Triangle} />
      <form className={form}>
        <TextField
          variant="outlined"
          className={input}
          size="small"
          fullWidth
          id="input-email"
          placeholder="Your Email Address"
        />
        <CustomButton type="submit" color="primary" variant="contained">
          <Typography
            style={{ textAlign: "center", color: "#fff" }}
            variant="button"
          >
            Get Started
          </Typography>
        </CustomButton>
      </form>
    </Card>
  );
};

export default NewsletterForm;
