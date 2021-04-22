import { Card, Button, Typography } from "@material-ui/core";
import InputField from "../FormInputs/InputField";
import NewsletterStyle from "./style";
import Vector1 from "../../assets/images/newletterSectionVector1.png";
import Vector2 from "../../assets/images/newletterSectionVector2.png";
import Vector3 from "../../assets/images/newletterSectionVector3.png";
import Vector4 from "../../assets/images/newletterSectionVector4.png";

const NewsletterForm = () => {
  const { root, title, form, input } = NewsletterStyle();
  return (
    <Card className={root}>
      <Typography className={title} variant="h2" gutterBottom>
        Ready to Discuss Your Project?
      </Typography>
      {/* <img style={{ position: "relative", left: "0%", top:"-80%" }} src={Vector4} />
      <img style={{ position: "relative", left: "-20%", top:"20px" }} src={Vector1} />
      {/* <img src={Vector2} />
      <img src={Vector3} /> */}
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
