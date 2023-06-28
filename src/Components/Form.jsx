import "./Form.css";

import { useState } from "react";


function MyForm() {
    const [name, setName] = useState("");

    return (
      <form>
        <label>Enter your name:
          <input className="inputStyle"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    )
 
  };

  export default MyForm