import AddTodoForm from "../components/AddTodoForm";
import UpdateTodo from "../components/UpdateTodo";

import DisplayItems from "../components/DisplayItems";
import SearchBar from "../components/SearchBar";


const Home = (props) => {


   return (
      <div className="App">
      <header className="home-header" >
        <h1>To-do Lists</h1>
        
        <AddTodoForm   addTodo={props.add} listItems={props.listItems} searchBar={props.search}  />
        <SearchBar listItems={props.listItems} />
        < UpdateTodo listItems={props.listItems} />
        
        <DisplayItems  listItems={props.listItems} deletetodo={props.delete} updatetodo={props.update}  />
        </header>
      </div>
    );
  };
  export default Home 