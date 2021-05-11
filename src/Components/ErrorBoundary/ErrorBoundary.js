import React from "react";
import CustomButton from "../CustomButton";
import ErrorBoundaryImage from "../../assets/ErrorBoundary/errorBoundary.png";
import MagnitLogo from "../../assets/MagnitLogo.png";
import ErrorBoundaryStyles from "./ErrorBoundaryStyles";
import {errorBoundaryText} from '../../Utils/Constants/Language/index'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: "",
      errorInfo: <pre></pre>,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    this.setState({ error: error, errorInfo: errorInfo });
    console.log(error, errorInfo);
  }

  render() {
    const {
      root,
      header,
      logo,
      errorImage,
      textWrapper,
      errorDetails,
    } = ErrorBoundaryStyles;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={root}>
          <div style={header}>
            <CustomButton
              href={window.location.origin}
              size={"Large"}
              variant={"none"}
              color="transparent"
              text={<img src={MagnitLogo} alt="magnit_logo" style={logo} />}
            />
            <CustomButton href={window.location.origin} text="Home" />
          </div>
          <img src={ErrorBoundaryImage} alt="error-image" style={errorImage} />
          <div style={textWrapper}>
            <h1>{errorBoundaryText.heading}</h1>
            <h3>{errorBoundaryText.error}</h3>
            <span>{this.state.error.toString()}</span>
            <h3>{errorBoundaryText.errorInformationHeading}</h3>
            <details style={errorDetails}>
              {this.state.errorInfo.componentStack}
            </details>
          </div>
          <CustomButton
            href={window.location.origin}
            size={"Large"}
            variant={"none"}
            color="transparent"
            text={<img src={MagnitLogo} alt="magnit_logo" style={logo} />}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
