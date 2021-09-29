import React from "react";

function App() {
  const list = [];
  const [maxNumber, setMaxNumber] = React.useState(0);
  const [fizz, setFizz] = React.useState("Fizz");
  const [buzz, setBuzz] = React.useState("Buzz")
  const doMaxNumber = (event) => {
    setMaxNumber(event.target.value)
  }
  const doSetFizz = (event) => {
    setFizz(event.target.value)
  }
  const doSetBuzz = (event) => {
    setBuzz(event.target.value)
  }

  for(let i = 1; i<= maxNumber; i++){
    if(i % 5 === 0 && i % 3 === 0){
      list.push(<li>{fizz}{buzz}</li>);
    } else if (i % 5 === 0){
      list.push(<li>{buzz}</li>);
    } else if (i % 3 === 0){
      list.push(<li>{fizz}</li>);
    } else {
      list.push(<li>{i}</li>);
    }
  }

  return (
    <div>
      <div>
        <div>
          <span>入力値：</span><input type="text" value={maxNumber} onChange={doMaxNumber} />
        </div>
        <div>
          <span>Fizz：</span><input type="text" value={fizz} onChange={doSetFizz} />
        </div>
        <div>
          <span>Buzz：</span><input type="text" value={buzz} onChange={doSetBuzz} />
        </div>
      </div>
      <ol>
        {list}
      </ol>
    </div>
  )
}

export default App;