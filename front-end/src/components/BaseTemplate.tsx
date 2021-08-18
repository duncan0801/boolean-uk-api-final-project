// import React from "react";
// import "../App.css";
// import useStore from "../store";
// import {
//   FormControl,
//   Select,
//   InputLabel,
//   MenuItem,
//   Grid,
// } from "@material-ui/core";
// import SearchBar from "material-ui-search-bar";
// // import PlayerCardSmall from "./PlayerCardSmall";
// import { Link } from "react-router-dom";
// const theme = createTheme({
//   typography: {
//     h2: {
//       fontSize: 40,
//     },
//   },
//   palette: {
//     primary: {
//       main: "#FABC3C",
//     },
//     secondary: {
//       main: "#E55812",
//     },
//   },
// });

// const useStyles = makeStyles({
//   root: {
//     background: "linear-gradient(45deg, #333, #999)",
//     border: 0,
//     borderRadius: 15,
//     color: "white",
//     padding: "0 30px",
//     marginRight: "10px",
//   },
// });
// function ButtonStyled() {
//   const classes = useStyles();
//   return <Button className={classes.root}>This is a button</Button>;
// }

// function App() {
//   const getSearchPlayers = useStore((store) => store.getSearchPlayers);

//   return (
//     <>
//       <header>
//         <h1>The Footy Oracle</h1>
//       </header>
//       <nav className="top-nav">
//         <ul className="tab-list">
//           <li>
//             <Link href="#">Leagues</Link>
//           </li>
//           <li>
//             <a href="#">Teams</a>
//           </li>
//           <li>
//             <a href="#">Players</a>
//           </li>
//           <li>
//             <a href="#">Managers</a>
//           </li>
//           <li>
//             <a href="#">Fixtures</a>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default App;
