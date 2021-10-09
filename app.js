//selectors
let expense_array = []
let income_array = []
let input_text = document.querySelector( ".name" )
let input_amount = document.querySelector( ".amount" );
let income_button = document.querySelector( ".amount__button" );
let expense_button = document.querySelector( ".expense__button" );
let expense_value = document.querySelector( ".maindiv__control-expense__text" );
let income_value = document.querySelector( ".maindiv__control-income__text" );
let budget_value = document.querySelector(".maindiv__control-balance__text");
let some_var = ""

// ---------- expense and income objects ----------
function Expense (name, amount, type)
{ 
    this.name = name
    this.amount = amount
    this.type = type
    
}

function Income (name, amount, type) {
  this.name = name;
  this.amount = amount;
  this.type = type;
}



// ---------- function to create new income ----------
const create_Income = () =>
{
  let entry_name = input_text.value;
  let entry_amount = input_amount.value;
  let newIncome = new Income(entry_name, entry_amount, "income");
  console.log(newIncome);

  //check if there exist an eincome entry in localstorage
  if ( !localStorage.getItem( "income" ) )
  {
    income_array.push(newIncome);
    console.log(income_array);
    localStorage.setItem("income", JSON.stringify(income_array));
  } else
  {
    //if there is ge the entry form the storage
    income_array = JSON.parse(localStorage.getItem("income")); //parse the value and save into array variable
    income_array.push(newIncome);//save income object in the array
    localStorage.setItem("income", JSON.stringify(income_array));// push back into the storage
  }

  console.log(localStorage.getItem("income"));
}



// ---------- function to create new expense ----------

const create_Expense = () =>
{ 
  let entry_name = input_text.value
  let entry_amount = input_amount.value
  let newExpense = new Expense( entry_name, entry_amount, "expense" )

  //check of there exsits an expense entry in local storage
  if ( !localStorage.getItem( "expense_" ) )
  {
    expense_array.push( newExpense )
    localStorage.setItem( "expense_", JSON.stringify( expense_array ) )
  } else
  { 
    //if there is, get the entry from the storage
    expense_array = JSON.parse( localStorage.getItem( "expense_" ) )
    expense_array.push( newExpense )
    localStorage.setItem("expense_", JSON.stringify(expense_array))
    
  }
  console.log(localStorage.getItem('expense_'))
  
  
}


// ---------- function to calculate the total income values  ----------
const calculate_Income = () =>
{ 
  let sum = 0
  var amount;
  //get the array from localstorage
  income_array = JSON.parse( localStorage.getItem( 'income' ) )
  income_array.forEach( e =>
  {
    amount = + e.amount
    sum+=amount 
    
  } );
  console.log( sum )
  return sum
}

// ---------- function to calculate the total expense values  ----------

const calculate_Expenses = () => {
  let sum = 0;
  var amount;
  //get the array from localstorage
  income_array = JSON.parse(localStorage.getItem("expense_"));
  income_array.forEach(e => {
    amount = +e.amount;
    sum += amount;
  });
  console.log(sum);
  return sum;
};


// ---------- function to displayvalues  ----------
const display_Values = () =>
{ 
  let total_expense = calculate_Expenses()
  let total_income = calculate_Income()
  let budget = total_income - total_expense
  expense_value.innerHTML = `$${total_expense}`
  budget_value.innerHTML = `$${budget}`
  income_value.innerHTML = `$${total_income}`;

}




// ---------- function to display entries  ----------

const display_Entries = () => {
   /*
   i need to get access to the storage
   loop through the array and perint out the divs
   with the delete function being passed into the div
   remember to add a function to edit the entry
   
   
   
   */
};
















income_button.onclick = () =>
{ 
  create_Income()
  display_Values();
  
}

expense_button.onclick = () =>
{ 
  create_Expense()
  display_Values();
}