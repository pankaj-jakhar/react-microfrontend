import React from "react";
import dynamic from 'next/dynamic'

const FirstApp = dynamic(() => import("FIRST_APP/App"), { ssr: false });
const FirstApp1 = dynamic(() => import("FIRST_APP/App1"), { ssr: false });

const App = () => {
  const [name, setName] = React.useState(null);
  console.log("hi i m here");
  return (
    <div className="App">
      <h1>This is the second app</h1>
      <h2>Micro host app is integrated here</h2>
      {name ? <p>Your name is: {name}</p> : null}
      <div>
        <FirstApp onChange={(e) => setName(e.target.value)} />
        <FirstApp1 onChange={(e) => setName(e.target.value)} />
      </div>
    </div>
  );
};

export default App;
