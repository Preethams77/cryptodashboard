// import React from "react";
// import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
// import "./styles.css";
// function BackToTop() {
//   let mybutton = document.getElementById("myBtn");

//   // When the user scrolls down 20px from the top of the document, show the button
//   window.onscroll = function () {
//     scrollFunction();
//   };

//   function scrollFunction() {
//     if (
//       document.body.scrollTop > 300 ||
//       document.documentElement.scrollTop > 300
//     ) {
//       mybutton.style.display = "flex";
//     } else {
//       mybutton.style.display = "none";
//     }
//   }

//   // When the user clicks on the button, scroll to the top of the document
//   function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }

//   return (
//     <div className="back-top-top-btn" id="myBtn" onClick={() => topFunction()}>
//       <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
//     </div>
//   );
// }

// export default BackToTop;


import { useState, useEffect } from "react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
 import "./styles.css";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="back-top-top-btn"
      style={{ display: visible ? "flex" : "none" }}
      onClick={scrollToTop}
    >
      <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  );
}

export default BackToTop;


