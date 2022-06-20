import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import ItemList from './components/ItemList';
import NewItem from './components/NewItem';
import Item from './components/ItemInfo';
import EditItem from './components/editItem';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path = "/" element = {<ItemList />} />
        <Route path = "/new" element = {<NewItem />} />
        <Route path = "/item/:id" element = {<Item />}/>
        <Route path = "/item/edit/:id" element = {<EditItem />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
