import React from 'react'
import Header from './Component/Header'
import Object from './Component/Object'
import Array from './Component/Array'
import ArrayOfObject from './Component/ArrayOfObject'

const App = () => {
  return (
    <div className='text-slate-50'>
      <Header /><hr />
      <div className="bg-slate-700 py-5 w-full flex justify-around box-border">
        <Object />
        <Array />
        <ArrayOfObject />
      </div>
    </div>
  )
}
export default App
