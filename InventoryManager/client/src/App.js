import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import ItemList from './components/ItemList';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path = "/" element = {<ItemList />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
