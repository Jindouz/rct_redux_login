import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectMyCount,addFour,subFour, selectMyStatus, incrementAsync } from './fourSlice'
import { incrementByAmount } from './fourSlice'
import logo from '../../logo.svg';

const Four = () => {
    const count = useSelector(selectMyCount)
    const status = useSelector(selectMyStatus)
    const dispatch = useDispatch()

    const [first, setfirst] = useState(0)
    const [secondary, setsecondary] = useState(0)

  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{status}</h1>
        <input type="number" value={first} onChange={(e) => setfirst(e.target.value)} />
        <input type="number" value={secondary} onChange={(e) => setsecondary(e.target.value)} />
        <button onClick={() => dispatch(subFour())}>Sub 4</button>
        <button onClick={() => dispatch(addFour())}>Add 4</button>
        <button onClick={() => dispatch(incrementByAmount({first: first, second: secondary}))}>Sum of Numbers</button>
        <button onClick={() => dispatch(incrementAsync({first: first, second: secondary}))}>ASync Bigger Number</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Four