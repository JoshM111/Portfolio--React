import './App.css';
import { Router, Link } from '@reach/router';
import Index from './components/index';
import Questions from './components/questions';
import Interview from './components/interview';

function App() {
  return (
    <div className="App">
      <Router>
        <Index default/>
        <Questions path='/questions' />
        <Interview path='/interview' />
      </Router>
    </div>
  );
}

export default App;
