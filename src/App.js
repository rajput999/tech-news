import logo from './logo.svg';
import './App.css';
import Stories from './component/stories';
import "./component/style.css";
import Search from './component/search';
import Pagination from './component/Pagination';

function App() {

  return (
    <div>
      <Search />
      <Pagination/>
      <Stories></Stories>
    </div>
  );
}

export default App;
