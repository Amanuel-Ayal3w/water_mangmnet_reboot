import { createGlobalStyle } from "styled-components";
import poppins100 from "../assets/fonts/Poppins/static/Poppins-Thin.ttf";
import poppins200 from "../assets/fonts/Poppins/static/Poppins-Light.ttf";
import poppins300 from "../assets/fonts/Poppins/static/Poppins-Regular.ttf";
import poppins400 from "../assets/fonts/Poppins/static/Poppins-Medium.ttf";
import poppins500 from "../assets/fonts/Poppins/static/Poppins-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
	  overflowX: hidden;
	  overflowY: auto;
  }
  body {

  justify-content: center;
  align-items: center;
	height:100%;
    background-color:#ecf0ee;
	font-family:Poppins-Regular !important;
    margin:0;
    padding:0;
	color: #374046
  }
  #root {
    min-height:100%;
    min-width:100%;
    position:relative;
  }
  @font-face {
    font-family:'Poppins-Thin';
	font-weight:100;
	src: local('Poppins-Thin'), url(${poppins100}) format('truetype');
  }
  @font-face {
    font-family:'Poppins-Light';
	font-weight:300;
	src: local('Poppins-Light'), url(${poppins200}) format('truetype');
  }
  @font-face {
    font-family:'Poppins-Regular';
	font-weight:400;
    src: local('Poppins-Regular'), url(${poppins300}) format('truetype');
  }
  @font-face {
	font-family:'Poppins-Medium';
	font-weight:500;
	src: local('Poppins-Medium'), url(${poppins400}) format('truetype');
  }
  @font-face {
    font-family:'Poppins-Bold';
	font-weight:700;
	src: local('Poppins-Bold'), url(${poppins500}) format('truetype');
  }
  .ce-toolbar__content{
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-left: 60px !important;
    margin-right: auto !important;
  }
  .ce-block__content{
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-left: 70px !important;
    margin-right: auto !important;
  }
  .ce-block__content{
    max-width: unset;
  } 
  .codex-editor__redactor{
    padding-bottom: ${(props) =>
      props.isFirstEditor ? "300px !important" : "0px !important"}
  }
.ce-toolbar__content{
  display: ${(props) =>
    props.isLocked ? "none !important" : "block !important"}
  }
  .codex-editor{
    z-index: unset
  }
  .ce-example-popup__overlay{
    z-index: 2000
  }
  .ce-example-popup__popup{
    z-index: 3000
  }
`;
// .ce-popover-item[data-item-name="topics"] {
//   display:  ${(props) =>
//     props.isTopicsDisabled ? "none !important" : "flex"};
// }
// .ce-popover-item[data-item-name="lessons"] {
//   display:  ${(props) =>
//     props.isLessonsDisabled ? "none !important" : "flex"};
// }
// .ce-popover-item[data-item-name="points"] {
//   display:  ${(props) =>
//     props.isPointsDisabled ? "none !important" : "flex"};
// }
// .ce-popover-item[data-item-name="subpoints"] {
//   display:  ${(props) =>
//     props.isSubPointsDisabled ? "none !important" : "flex"};
// }
