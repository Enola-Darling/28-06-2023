import "./Form.css";

import { useState } from "react";


function MyForm() {
    const [name, setName] = useState("");

    return (
        <div className="modal_Form">
      <form className="Form"> 
        <label className="Label">Enter your mail:
          <input className="inputStyle"
            type="text" 
            value={name}
            placeholder="mail address"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="Label">Password:
          <input className="inputStyle"
            type="text" 
            value={name}
            placeholder="Password"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
      </div>
    )
 
  };

  export default MyForm