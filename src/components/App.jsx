//1. import useState
import React, { useState } from "react";

function App() {
  //2. create state variable that is a JS object with both name input variables as items
  const [fullName, setFullName] = useState({
    nameInput1: "",
    nameInput2: ""
  });

  //5. create basic function and check by console.logging value of input's name attribute when input is entered
  function inputEntered(event) {
    console.log(event.target.name);
    setFullName(event.target.name);
  }

  return (
    <div className="container">
      {/* 6. Add variables representing input values to heading and test by entering*/}
      <h1>
        Hello {fullName.nameInput1} {fullName.nameInput2}{" "}
      </h1>
      <form>
        {/* 3. Add state object item field names as value attributes to control variables */}
        {/* 4. Add event to call function that will run when user inputs anything */}
        <input
          onChange={inputEntered}
          name="fName"
          placeholder="First Name"
          value={fullName.nameInput1}
        />
        <input
          onChange={inputEntered}
          name="lName"
          placeholder="Last Name"
          value={fullName.nameInput2}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
