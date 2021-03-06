import { useEffect, useState } from "react";
import "./MainContent.css";
import DashBoard from "../DashBoard/DashBoard";
import SideBar from "../SideBar/SideBar";



const DUMMY_EXPENSES = [
  {
    category: "Food",
    amount: 10000,
    notes: "Mcdo delivery",
    date: new Date(2021, 5, 19),
    type: "expense",
    id: 40
  },
  {
    category: "Utilities",
    amount: 100000,
    notes: "Bill for this month",
    date: new Date(2021, 6, 19),
    type: "expense",
    id: 30
  },
  {
    category: "Insurance",
    amount: 100000,
    notes: "life insurance monthly",
    date: new Date(2022, 9, 19),
    type: "expense",
    id: 20
  },
  {
    category: "Housing",
    amount: 100000,
    notes: "travel to mars",
    date: new Date(2023, 3, 25),
    type: "expense",
    id: 10
  },
];


const DUMMY_BUDGET = [
  {
    category: "Food",
    amount: 1000000,
    date: new Date(2021, 5),
    type: "budget",
    id: 40
  },
  {
    category: "Utilities",
    amount: 1000000,
    date: new Date(2021, 6),
    type: "budget",
    id: 30
  },
  {
    category: "Insurance",
    amount: 100000,
    date: new Date(2021, 6),
    type: "budget",
    id: 20
  },
  {
    category: "Housing",
    amount: 1000000,
    date: new Date(2021, 6),
    type: "budget",
    id: 10
  },
  {
    category: "Food",
    amount: 1000000,
    date: new Date(2021, 6),
    type: "budget",
    id: 40
  },
  {
    category: "Utilities",
    amount: 1000000,
    date: new Date(2021, 6),
    type: "budget",
    id: 30
  },
  {
    category: "Insurance",
    amount: 100000,
    date: new Date(2022, 9),
    type: "budget",
    id: 20
  },
  {
    category: "Housing",
    amount: 1000000,
    date: new Date(2023, 6),
    type: "budget",
    id: 10
  }
]


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const categories = ["Housing", "Transportation", "Food", "Utilities", "Insurance", "Medical", "Savings"]



const MainContent = (props) => {

  // console.log(JSON.parse(localStorage.getItem("accountsDataBase")))
  let initialExpenses = DUMMY_EXPENSES ? DUMMY_EXPENSES : [];
  let initialBudget = DUMMY_BUDGET ? DUMMY_BUDGET : [];


  const [expenses, setExpenses] = useState(initialExpenses);
  useEffect(() => {props.expensesHandler([expenses, "expenses"]);}, [expenses])

  const [budget, setBudget] = useState(initialBudget);
  useEffect(() => {props.expensesHandler([]);}, [budget])

  //save nwe or edited expense
  const saveNewExpense = (expense) => {
    setExpenses((previousExpenses) => {
      if(expense.edited === true) {
        const indexOfEdited = expenses.map(expense => { return expense.id; }).indexOf(expense.id);
        previousExpenses[indexOfEdited] = expense;
        return [...previousExpenses];
      } else { 
        return [expense, ...previousExpenses]; 
      }
    })
  }

  //save new budget
  const saveNewBudget = (newBudget) => {
    setBudget((previousBudget) => {
      return [newBudget, ...previousBudget];
    })
    props.budgetHandler([budget, "budget"]);
    console.log(budget)
  }
 

  //update expenses and budget after deleting an item
  const deletedItemHandler = (deletedItem) => {
    const [type, id] = deletedItem;

    if(type === "expense") {
      const indexOfDeleted = expenses.map(expense => { return expense.id; }).indexOf(id);
      setExpenses(expenses => {
        return [...expenses.slice(0, indexOfDeleted), ...expenses.slice(indexOfDeleted + 1)];
      });

    }
    if(type === "budget") {
      const indexOfDeleted = budget.map(budget => { return budget.id; }).indexOf(id);
      setBudget(budget => {
        return [...budget.slice(0, indexOfDeleted), ...budget.slice(indexOfDeleted + 1)];
      });
    }
  }

  //show sections in dashboard area;
  const [dashBoardDisplay, setDashBoardDisplay] = useState("overview");
  const dashBoardDisplayHandler = (section) => {
    setDashBoardDisplay(section)
  }

  return(
      <div className="main-content">
          <DashBoard expenses={expenses} budget={budget} saveExpenseHandler={saveNewExpense} saveBudgetHandler={saveNewBudget} deletedItems={deletedItemHandler} displaySection={dashBoardDisplay} />
          <SideBar expenses={expenses} budget={budget} dashBoardDisplay={dashBoardDisplayHandler} displaySection={dashBoardDisplay}/>
      </div>
  );
};




export default MainContent;
export {months, categories};