import { useState } from "react";
import {Accordion} from "./Accordion";
import {Profile} from "./Profile";
import { Hobbies } from "./Hobbies";

function App() {
  const [openAccordionId, setOpenAccordionId] = useState(null);
  
  const handleAccordionClick = (accordionId) => {
    setOpenAccordionId((prevValue) => {
      return prevValue === accordionId ? null : accordionId;
    });
  };
  return (
    <div>
      <Accordion 
      id="my-profile" 
      labelText="My Profile" 
      open={openAccordionId === "my-profile"}
      onClick={handleAccordionClick}
      > 
        <Profile/>
      </Accordion>
      <Accordion 
      id="my-hobbies" 
      labelText="My Hobbies" 
      open={openAccordionId === "my-hobbies"}
      onClick={handleAccordionClick}
      > 
        <Hobbies/>
      </Accordion>
    </div>
  );
}

export default App;
