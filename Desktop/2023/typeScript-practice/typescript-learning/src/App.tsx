import React,{FC} from 'react'
import { LearnProps} from './Practice/LearnProps'
import { UseStatePractice} from './Practice/UseStatePractice'
import { EnumPractice } from './Practice/EnumType'

const App:FC=()=> {
  return (
    <div style={{textAlign:'center',fontSize:'6rem'}}>
      Person 
    <LearnProps age={30} name={'fais'}/>
    <UseStatePractice/>
    <EnumPractice/>
      </div>
  )
}

export default App