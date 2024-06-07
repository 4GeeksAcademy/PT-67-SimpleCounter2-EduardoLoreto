import React from "react";
import SecondsCounter from "./secondscounter.jsx";
import Timer from "./countdown.jsx";



//create your first component
const Home = () => {
	return (
		<div className="container-fluid justify-content-center pt-5 pb-5 w-50 bg-success">
			< SecondsCounter />
			<Timer/>
		</div>
	);
};

export default Home;
