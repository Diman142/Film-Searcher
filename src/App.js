import logo from './logo.svg';
import './App.css';
import { AppHeader } from './components/AppHeader/AppHeader'
import Form from './components/Form/Form'
import FilmList from './components/FilmList.js/FilmList'


function App() {

  return (
    <div className="App">
      <AppHeader text="Film-Searcher with React-Redux" />
      <Form />
      <FilmList />
    </div>
  );
}

export default App;



