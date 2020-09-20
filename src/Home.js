import React, { Suspense, useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./Loading";

// Dynamically Import DogImage component
const DogImage = React.lazy(() => import("./DogImage"));

const Home = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div>
      <button
        onClick={() => setShowDetails(true)}
        style={{ marginBottom: "1rem" }}
      >
        Show Dog Image
      </button>
      {showDetails && (
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>
            <DogImage />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
};
export default Home;
