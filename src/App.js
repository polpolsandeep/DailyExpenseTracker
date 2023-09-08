import React,{useState} from 'react';
import Expenses from './component/Expenses';
import NewExpense from './component/NewExpenses/NewExpense';
import './App.css';

let DUMMY_EXPENSE=[
  {
    id:'e1',
    title:'school fees',
    amount:2500,
    date:new Date(2023,9,6)
  },
  {
    id:'e2',
    title:'Food fees',
    amount:3500,
    date:new Date(2023,8,16)
  },
  {
    id:'e3',
    title:'Dress fees',
    amount:4500,
    date:new Date(2023,7,26)
  },
  {
    id:'e4',
    title:'Transport fees',
    amount:6500,
    date:new Date(2023,9,16)
  }
 ];
const App=()=>{
 
  const [expenses,setExpenses]=useState(DUMMY_EXPENSE);

  const addExpenseHandler=(expense)=>{
    const updatedExpense=[expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
     <Expenses item={expenses}/>
    </div>
  );
}

export default App;
