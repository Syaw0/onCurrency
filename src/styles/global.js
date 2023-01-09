import { globalCss } from "./@stitches.config";
import { ldsRoller } from "./keyframes";

export default globalCss({
  "*": {
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
    transition: "$coAndBg",
  },
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap')",
  "#holder": {
    height: "100vh",
    minWidth: "100vw",
    flex_c: "",
    jfs_ac: "",
  },
  ".lds-roller": {
    display: "inline-block",
    position: " relative",
    width: "80px",
    height: "80px",
  },

  ".lds-roller div": {
    animation: `${ldsRoller} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    transformOrigin: `40px 40px`,
  },
  ".lds-roller div:after": {
    content: " ",
    display: "block",
    position: "absolute",
    width: "7.2px",
    height: "7.2px",
    borderRadius: " 50%",
    background: "currentColor",
    margin: "-3.6px 0 0 -3.6px",
  },
  ".lds-roller div:nth-child(1)": {
    animationDelay: "-0.036s",
  },
  ".lds-roller div:nth-child(1):after": {
    top: "62.62742px",
    left: "62.62742px",
  },
  ".lds-roller div:nth-child(2)": {
    animationDelay: "-0.072s",
  },
  ".lds-roller div:nth-child(2):after": {
    top: "67.71281px",
    left: "56px",
  },
  ".lds-roller div:nth-child(3)": {
    animationDelay: "-0.108s",
  },
  ".lds-roller div:nth-child(3):after": {
    top: "70.90963px",
    left: "48.28221px",
  },
  ".lds-roller div:nth-child(4)": {
    animationDelay: "-0.144s",
  },
  ".lds-roller div:nth-child(4):after": {
    top: "72px",
    left: "40px",
  },
  ".lds-roller div:nth-child(5)": {
    animationDelay: "-0.18s",
  },
  ".lds-roller div:nth-child(5):after": {
    top: "70.90963px",
    left: "31.71779px",
  },
  ".lds-roller div:nth-child(6)": {
    animationDelay: "-0.216s",
  },
  ".lds-roller div:nth-child(6):after": {
    top: "67.71281px",
    left: "24px",
  },
  ".lds-roller div:nth-child(7)": {
    animationDelay: "-0.252s",
  },
  ".lds-roller div:nth-child(7):after": {
    top: "62.62742px",
    left: "17.37258px",
  },
  ".lds-roller div:nth-child(8)": {
    animationDelay: "-0.288s",
  },
  ".lds-roller div:nth-child(8):after": {
    top: " 56px",
    left: "12.28719px",
  },

  "#table": {
    width: "100%",
    borderCollapse: "collapse",
    "& th": {
      borderBottom: "1px solid $onBg300",
      textAlign: "center",
      padding: "1rem",
    },
    "& tbody tr:hover": {
      backgroundColor: "$onBg100",
    },

    "& td": {
      borderBottom: "1px solid $onBg100",
      textAlign: "center",
      subhead1: "500",
    },
  },
});
