import { Link } from "react-router-dom";
import CustomTitle from "../Pages/Section/CustomTitle";
import { DoYouWant } from "../Utils/Constants/Language";
import CustomButton from "../Components/CustomButton";

const RequestQuoteSection = () => {
  return (
    <>
      <CustomTitle underlined={true} text={DoYouWant} />
      <span>
        <CustomButton component={Link} to="/request-a-quote">
          Request a Quote
        </CustomButton>
      </span>
    </>
  );
};

export default RequestQuoteSection;
