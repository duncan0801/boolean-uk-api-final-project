import React from "react";
import "./App.css";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import {
	ButtonGroup,
	Button,
	Checkbox,
	FormControlLabel,
	TextField,
	makeStyles,
	ThemeProvider,
	createTheme,
	Typography,
} from "@material-ui/core";
import { orange, green } from "@material-ui/core/colors";
import { useState } from "react";

const theme = createTheme({
    typography: {
        h2: {
            fontSize: 40,
        }
    },
	palette: {
		primary: {
			main: green[400],
		},
		secondary: {
			main: orange[400],
		},
	},
});

const useStyles = makeStyles({
	root: {
		background: "linear-gradient(45deg, #333, #999)",
		border: 0,
		borderRadius: 15,
		color: "white",
		padding: "0 30px",
		marginRight: "10px",
	},
});
function ButtonStyled() {
	const classes = useStyles();
	return <Button className={classes.root}>This is a button</Button>;
}

function CheckboxExample() {
	const [checked, setChecked] = useState(true);
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Typography variant="h2">Welcome To A Test</Typography>
				<Typography variant="subtitle1" component="div">TEST TEST</Typography>
				<ButtonStyled />
				<TextField
					variant="outlined"
					color="secondary"
					type="email"
					label="email"
					placeholder="testing@test.com"
				/>
				<FormControlLabel
					control={
						<Checkbox
							icon={<DeleteIcon />}
							checked={checked}
							onChange={(e) => setChecked(e.target.checked)}
							inputProps={{
								"aria-label": "secondary checkbox",
							}}
						/>
					}
					label="Test"
				/>
			</ThemeProvider>
		</div>
	);
}

function App() {
	return (
		<div className="App">
			<h1>The Footy Oracle</h1>
			<p>Coming soon...</p>
			<ButtonGroup variant="contained" size="large">
				<Button
					startIcon={<DeleteIcon />}
					color="primary"
					href="#"
					onClick={() => alert("hello")}
					size="large"
					style={{
						fontSize: 14,
					}}
				>
					Delete
				</Button>
				<Button
					startIcon={<SaveIcon />}
					color="secondary"
					href="#"
					onClick={() => alert("hello")}
					style={{
						fontSize: 14,
					}}
				>
					Save
				</Button>
			</ButtonGroup>
			<CheckboxExample />
		</div>
	);
}

export default App;
