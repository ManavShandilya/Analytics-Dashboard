import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap';
import { Header } from "./components/Header";
import { BarChart } from "./components/BarChart";
import { Insights } from './components/Insights';
import { UserLeaderboard } from './components/UserLeaderboard';
import { Traffic } from './components/Traffic';
import { SignupLocation } from './components/SignupLocation';
import { Behaviour } from './components/Behaviour';

function App() {
  return (
    <div className="App">
      <Header/>
      <BarChart/>
      <Insights />
      <div className='statistics'>
        <Row>
          <Col style={{marginRight:17}}>
            <UserLeaderboard/>
          </Col>
          <Col>
            <Traffic/>
          </Col>
        </Row>
        <Row>
          <Col style={{marginRight:17}}>
            <SignupLocation/>
          </Col>
          <Col>
            <Behaviour/>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;