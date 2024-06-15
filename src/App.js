import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Jobs from "./components/Jobs/Jobs";
import JobDetails from "./components/JobDetails/jobDetails";
import CompanyJobs from "./company.json";
import { Nav, Navbar, Container } from "react-bootstrap";
import { RiAccountCircleFill } from "react-icons/ri";
import { IoBriefcase } from "react-icons/io5";
import ApplyForm from "./components/ApplyForm/ApplyForm";

function App() {
  const [jobs, setJobs] = useState(CompanyJobs);
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand>JobPortal</Navbar.Brand>
              <Nav className="justify-content-end" variant="underline">
                {/* <Nav.Link as={Link} to="/"><FaHome/></Nav.Link> */}
                <Nav.Link as={Link} to="/jobs">
                  <IoBriefcase color="white" />
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  <RiAccountCircleFill color="white" />
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            {/* <Route exact path="/" element={<Home/>}/> */}
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/profile" element={<ApplyForm />} />
            <Route path="/job/:id" element={<JobDetails companyData={jobs} />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
