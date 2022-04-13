import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    console.log(value, name+"---");

    setContact((prevValue) => {
      console.log(prevValue);
      return {
        ...prevValue,
        [name]: value
      };

    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          value={contact.fName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          name="email"
          value={contact.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <button onClick={(event) => event.preventDefault()}>Submit</button>
      </form>
    </div>
  );
}
export default App;
