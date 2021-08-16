import React from "react";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
	return (
		<div className="App">
			<h1>The Footy Oracle</h1>
			<p>Coming soon...</p>
			<Button
				variant="contained"
				color="secondary"
				href="#"
				onClick={() => alert("hello")}
                size="large"
                style={{
                    fontSize: 14
                }}
			>
				I am a Button
			</Button>
		</div>
	);
}

export default App;
