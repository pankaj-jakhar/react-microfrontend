import React, { lazy, Suspense } from "react";
import "./App.css";

const FirstApp = lazy(() => import("FIRST_APP/App"));
const FirstApp1 = lazy(() => import("FIRST_APP/App1"));

const App = () => {
  const [name, setName] = React.useState(null);

  return (
    <div className="App">
      <h1>This is second app</h1>
      <h2>Micro host app is integrated here</h2>
      { name ? <p>Your name is: {name}</p> : null }
      <div>
        <Suspense fallback={<span>Loading...</span>}>
          <FirstApp onChange={(e) => setName(e.target.value)} />
          <FirstApp1 onChange={(e) => setName(e.target.value)} />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
