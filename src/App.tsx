import { useState } from "react";

import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>INC</button>
			<h1>{count}</h1>
			<button onClick={() => setCount(count - 1)}>DEC</button>
		</div>
	);
}

export default App;
