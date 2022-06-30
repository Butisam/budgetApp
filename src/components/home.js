import AddItem from "./addItem";
import {DisplayTransaction} from "./displayTransaction";

// import {BrowserRouter as Router , Switch, route } from 'react-router-dom';
function Home(props){

    return(
    <div className="Container">
      <DisplayTransaction list={props.list} />
      <AddItem  add={props.add} />     
        </div>
    );
    
    
}

export default Home;