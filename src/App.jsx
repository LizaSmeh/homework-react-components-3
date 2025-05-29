import { useState } from "react";
import "./App.module.css";
import styles from "./App.module.css";

const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
function App() {
	const [operand1, setOperand1] = useState("");
	const [operand2, setOperand2] = useState("");
	const [operator, setOperator] = useState("");
	const [result, setResult] = useState("");

	const onClear = () => {
		setOperand1("");
		setOperand2("");
		setOperator("");
		setResult("");
	};

	const handleResult = () => {
		switch (operator) {
			case '+':
				setResult(+operand1 + +operand2);
				break;
			case "-":
				setResult(+operand1 - +operand2);
				break;
				default:
				break;
		}
	};

	return (
		<>
			<div className={styles.calculator}>
				<div className={styles.display}>
					{result === ''? operand1 + operator + operand2 : result}
				</div>
				<div className={styles.buttons}>
					<button className={styles["btn-grey"]} onClick={onClear}>
						C
					</button>
					<button className={styles["btn-pink"]} onClick={()=> setOperator('+')}>
						+
					</button>
					<button
						className={styles["btn-pink"]}
						onClick={()=> setOperator('-')}
					>
						-
					</button>
					<button
						className={styles["btn-pink"]}
						onClick={handleResult}
					>
						=
					</button>

					{NUMS.map((namber) => (
						<button
							className={styles.button}
							onClick={() => {
								operator === ""
									? setOperand1(operand1 + namber)
									: setOperand2(operand2 + namber);
							}}
						>
							{namber}
						</button>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
