import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import JobList from "./components/JobList";
import JobDetails from "./components/JobDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<JobList/>}></Route>
          <Route path="/jobs/:id" element={<JobDetails/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
