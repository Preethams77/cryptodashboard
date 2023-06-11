import { CircularProgress } from "@mui/material";
import{withStyles} from "@mui/styles";
import React from "react";
import "./styles.css";

const CustomCircularProgress = withStyles((theme) => ({
  root: {
    color: '#9900ff', // Replace 'red' with your desired color
  },
}))(CircularProgress);

function Loader() {
  return (
    <div className="loader-container">
      <CustomCircularProgress/>
    </div>
  );
}

export default Loader;






