import { Card, Button, Typography } from "@material-ui/core";
import InputField from "../FormInputs/InputField";
import NewsletterStyle from "./style";
import QuarterCircle from "../../assets/images/QuarterCircle.png";
import HalfCircle from "../../assets/images/HalfCircle.png";
import Triangle from "../../assets/images/Triangle.png";

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
      <img className={quarterCircle} src={QuarterCircle} />
      <img className={halfCircle} src={HalfCircle} />
      <img className={triangle} src={Triangle} />
      <form className={form}>
        <InputField
          className={input}
          id="input-email"
          fullWidth
          placeholder="Your Email Address"
        />
        <Button type="submit" color="primary" variant="contained">
          <Typography
            style={{ textAlign: "center", color: "#fff" }}
            variant="button"
          >
            Get Started
          </Typography>
        </Button>
      </form>
    </Card>
  );
};

export default NewsletterForm;
