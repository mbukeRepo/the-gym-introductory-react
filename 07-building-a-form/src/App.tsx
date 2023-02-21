import "./App.css";
import { useState } from "react";

interface CustomFormState {
  firstName: string
  lastName: string
}

function CustomForm() {
  const [{firstName, lastName}, setFullName] = useState<CustomFormState>({
    firstName: "",
    lastName: ""
  });

  const getGreetingMsg = (firstName: string, lastName: string) => {
    return `Hello ${firstName} ${lastName}!`;
  }

  const handleSubmit = (firstName: string, lastName: string) => {
    const msg = getGreetingMsg(firstName, lastName);
  
    alert(msg);
  };
  
  

  return (
    <form>
      <div>
        <input
          id="firstNameInput"
          value={firstName}
          onChange={(event) => {
            setFullName({
              firstName: event.target.value,
              lastName,
            });
          }}
          type="text"
          placeholder="First name"
        />
      </div>
      <div>
        <input
          id="lastNameInput"
          value={lastName}
          onChange={(event) => {
            setFullName({
              firstName,
              lastName: event.target.value,
            });
          }}
          type="text"
          placeholder="Last name"
        />
      </div>
      <button
        type="button"
        onClick={() => handleSubmit(firstName, lastName)}
      >
        Greet me
      </button>
    </form>
  );
}



function App() {
  return <CustomForm />;
}

export default App;
