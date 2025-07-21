import { useState } from "react";
import Button from "./Button"
import Card from "./Card"
import Model from "./Model"
import WithLogger from "./WithLogger";

const Hoc = () => {
  const HelloWithLogger = WithLogger(Card);

  const [model, setModel] = useState(false);

  const handleEvent = ()=>{
    setModel(!model);
  }
  return (
    <div className="p-4 relative">
      <div className="flex gap-3">
        <Card>
          <h2>Hello</h2>
          <p>This is a paragraph.</p>
        </Card>
        <HelloWithLogger/>
      </div>
      <Button onclick={handleEvent}/>
      {
        model && <Model/>
      }
    </div>
  )
}

export default Hoc