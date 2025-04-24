import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, isLoading] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/data", {
      headers: {
        "X-App-Secret": "secret-key-not-expose-backend-outside-app",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.message);
        isLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setData("ERROR FETCHING DATA");
        isLoading(false);
      });
  }, []);

  return (
    <>
      <div className="">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="data">{data}</div>
        )}
      </div>
    </>
  );
}

export default App;
