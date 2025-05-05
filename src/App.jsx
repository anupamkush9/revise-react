import React, { Suspense, lazy, useState } from "react";

// Lazy load components
const Component1 = lazy(() => import("./Component1"));
const Component2 = lazy(() => import("./Component2"));

function App() {
  const [showComponent1, setShowComponent1] = useState(false);
  const [showComponent2, setShowComponent2] = useState(false);

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Lazy Load Components</h1>

      <div className="mb-3">
        <button
          className="btn btn-primary me-3"
          onClick={() => setShowComponent1(true)}
        >
          Load Component 1
        </button>
        <button
          className="btn btn-success"
          onClick={() => setShowComponent2(true)}
        >
          Load Component 2
        </button>
      </div>

      {showComponent1 && (
        <Suspense fallback={<div>Component1 is loading, please wait...</div>}>
          <Component1 />
        </Suspense>
      )}

      {showComponent2 && (
        <Suspense fallback={<div>Component2 is loading, please wait...</div>}>
          <Component2 />
        </Suspense>
      )}
    </div>
  );
}

export default App;
