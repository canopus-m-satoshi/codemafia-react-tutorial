import { createContext, useContext, useReducer } from 'react'

const CalcContext = createContext()
const CalcDispatchContext = createContext()

const CalcProvider = ({ children }) => {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'change': {
        const { name, value } = payload
        return { ...state, [name]: value }
      }
      case 'add': {
        return { ...state, result: parseInt(state.a) + parseInt(state.b) }
      }
      case 'minus': {
        return { ...state, result: state.a - state.b }
      }
      case 'divide': {
        return { ...state, result: state.a / state.b }
      }
      case 'multiply': {
        return { ...state, result: state.a * state.b }
      }
      default:
        throw new Error('operator is invalid')
    }
  }

  const initState = {
    a: 1,
    b: 2,
    result: 3,
  }

  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <CalcContext.Provider value={state}>
      <CalcDispatchContext.Provider value={dispatch}>
        {children}
      </CalcDispatchContext.Provider>
    </CalcContext.Provider>
  )
}

const CalcState = () => useContext(CalcContext)
const CalcDispatch = () => useContext(CalcDispatchContext)

export { CalcProvider, CalcState, CalcDispatch }
