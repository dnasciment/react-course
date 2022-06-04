import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props: { title: string ; amount: number; date: Date}[]) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props[0].date}
        amount={props[0].amount}
        title={props[0].title}
      ></ExpenseItem>
      <ExpenseItem
        date={props[1].date}
        amount={props[1].amount}
        title={props[1].title}
      ></ExpenseItem>
      <ExpenseItem
        date={props[2].date}
        amount={props[2].amount}
        title={props[2].title}
      ></ExpenseItem>
      <ExpenseItem
        date={props[3].date}
        amount={props[3].amount}
        title={props[3].title}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
