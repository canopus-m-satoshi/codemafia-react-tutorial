import { CalcState } from '../context/CalcContext'

const Result = () => {
  const state = CalcState()

  return <h3>結果：{state.result}</h3>
}
export default Result
