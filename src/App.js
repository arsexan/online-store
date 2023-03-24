import './App.css';
import { Header } from './components/Layout/Header';
import { Main } from './components/Layout/Main';
import { Footer } from './components/Layout/Footer';

function App() {
  return (
    <><div>
      <header><Header /></header>
      <Main />
    </div><div><Footer /></div></>
  );
}

export default App;
