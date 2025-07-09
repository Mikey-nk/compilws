import { useState } from "react";

function Home() {
    const [showmore, setshowmore] = useState(false);

    return (
      <div className="home-bg" style={{ textAlign: "center" }}>
          <img src="/nature3.jpeg" alt="nature" width="400" style={{ borderRadius: "50%" }} />
          <h1>Welcme to Thee portfolio</h1>
          <p>I am a react dev!</p>
          {showmore && <p>i enjoy frontend development and playing.</p>}
          <button onClick={() => setshowmore(!showmore)}>
              {showmore ? "Show less" : "Show more"}
          </button>
      </div>
    );
}
export default Home;