import React from "react";

function App() {
  const list = [];
  const [maxNumber, setMaxNumber] = React.useState(0);
  const doMaxNumber = (event) => {
    setMaxNumber(event.target.value)
  }

  for(let i = 1; i<= maxNumber; i++){
    if(i % 5 === 0 && i % 3 === 0){
      list.push(<li>FizzBuzz</li>);
    } else if (i % 5 === 0){
      list.push(<li>Buzz</li>);
    } else if (i % 3 === 0){
      list.push(<li>Fizz</li>);
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
      </div>
      <ol>
        {list}
      </ol>
    </div>
  )
}

export default App;