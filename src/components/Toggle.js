// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {toggleDiv} from ""

const App = () => {
  const dispatch = useDispatch();
  const divsVisible = useSelector((state) => state.toggleDiv.divsVisible);

  const handleToggleDiv = (divId) => {
    dispatch(toggleDiv({ divId }));
  };

  return (
    <div>
      <div>
        <button onClick={() => handleToggleDiv("div1")}>Toggle Div 1</button>
        {divsVisible.div1 && <div className="div1">This is Div 1</div>}
      </div>
      <div>
        <button onClick={() => handleToggleDiv("div2")}>Toggle Div 2</button>
        {divsVisible.div2 && <div className="div2">This is Div 2</div>}
      </div>
    </div>
  );
};

export default App;
