
import { useState } from 'react'
import './App.css'
const NUMS = ['0', '1', '2', '3', '4','5', '6', '7', '8', '9']
function App() {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');

	const onClear = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
	}
   return (
    <>
      <div className="calculator">
    <div className="display">{operand1 + operator + operand2}</div>
    <div className="buttons">
        <button className="button btn-grey" onClick={onClear}>C</button>
		<button className="button btn-pink" onClick={()=> {setOperator('+')}}>+</button>
		<button className="button btn-pink" onClick={()=> {setOperator('-')}}>-</button>
		<button className="button btn-pink" onClick={()=> eval(`${operand1} ${operator} ${operand2}`)}>=</button>

		{NUMS.map((namber) => <button className="button" onClick={()=>{operator === ''?setOperand1(operand1 + namber):setOperand2(operand2 + namber)}}>{namber}</button> )}

    </div>
   </div>
    </>
  )
}

export default App
