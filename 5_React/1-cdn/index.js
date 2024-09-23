import calculator from "./calculator.js";
import lodash from "lodash";
import reactTest from "";
// 별칭 부여해서 ."이름" 으로 호출 가능

console.log("Hello, Node!");
console.log(calculator.a, calculator.b, calculator.plus(), calculator.minus());

const arr = [1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 43, 5, 6, 7, 8];
const unique = lodash.uniqBy(arr);

console.log(unique);
console.log(reactTest);
export default reactTest;
