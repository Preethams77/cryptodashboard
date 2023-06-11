import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/system';

import React from "react";
import "./styles.css";

const CustomCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: '#9900ff', // Replace 'red' with your desired color
}));


function Loader() {
  return (
    <div className="loader-container">
      <CustomCircularProgress/>
    </div>
  );
}

export default Loader;







