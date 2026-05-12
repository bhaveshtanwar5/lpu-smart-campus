import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [incidents, setIncidents] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8000/incidents")
      .then((res) => {
        console.log(res.data);
        setIncidents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (

    <div style={{
      backgroundColor: "#0f172a",
      minHeight: "100vh",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>

      <h1>LPU Smart Campus Dashboard</h1>

      {incidents.map((item) => (

        <div
          key={item.id}
          style={{
            backgroundColor: "#1e293b",
            padding: "20px",
            marginTop: "20px",
            borderRadius: "10px"
          }}
        >

          <h2>{item.location}</h2>
          <p>{item.status}</p>

        </div>

      ))}

    </div>
  );
}

export default App;