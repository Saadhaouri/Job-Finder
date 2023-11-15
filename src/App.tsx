import { useState } from "react";

import "./App.css";
export interface isSignUp {
  email: string;
  password: string;
}

function App() {
  const [formData, setFormData] = useState<isSignUp>({
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="enter your first name "
      />
      <br />
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="enter your last name "
        onChange={handleInputChange}
      />
      <br />
      <button> Submit </button>
      <div>
        <p> Email : {formData.email}</p>
        <p>
          Password:{" "}
          <span>
            {Array.from({ length: formData.password.length }, (_, index) => (
              <span key={index}>*</span>
            ))}
          </span>
        </p>
      </div>
    </>
  );
}

export default App;
