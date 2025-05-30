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

	const handleResult = (value) => {
		const getResult = () => {
			if (operator === "+") {
				const result = +(operand1) + +(operand2);
				setResult(String(result));
			} else if (operator === "-") {
				const result = +(operand1) - +(operand2);
				setResult(String(result));
			}
		};

		const installOperator = () => {
			if (result === "") {
				setOperator(value);
			} else {
				setOperand1(result);
				setOperand2("");
				setOperator(value);
				setResult("");
			}
		};

		if (value === "=") {
			getResult();
		} else {
			installOperator();
		}
	};

	return (
		<>
			<div className={styles.calculator}>
				<div className={styles.display}>
					{operand1 + operator + operand2}
				</div>
				<div className={styles.result}>{result}</div>
				<div className={styles.buttons}>
					<button className={styles["btn-grey"]} onClick={onClear}>
						C
					</button>
					<button
						className={styles["btn-pink"]}
						onClick={() => handleResult("+")}
					>
						+
					</button>
					<button
						className={styles["btn-pink"]}
						onClick={() => handleResult("-")}
					>
						-
					</button>
					<button
						className={styles["btn-pink"]}
						onClick={() => handleResult("=")}
					>
						=
					</button>

					{NUMS.map((namber) => (
						<button key={namber}
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
