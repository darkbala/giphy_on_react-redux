import React from 'react'
import InputSearch from './InputSearch'
import Output from './Output'

export default function App() {
  return (
    <div  style={{
      background:'url(https://thumbs.dreamstime.com/b/%D0%B1%D0%B5%D0%B7%D1%88%D0%BE%D0%B2%D0%BD%D0%B0%D1%8F-%D0%B3%D0%B5%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%B0-d-%D0%B8%D0%BB%D0%BB%D1%8E%D0%B7%D0%B8%D0%BE%D0%BD-%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8-%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B5-%D0%B8-%D1%81%D0%B5%D1%80%D1%8B%D0%B5-131438820.jpg)',
      height:'100%',
    }}>
      <InputSearch/>
      <Output/>
    </div>
  )
}
