
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AdminPanel from './pages/Admin/AdminPanel';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import Dashboard from './pages/Dashboard/Dashboard';
import MyApplicationsList from './pages/MyApplicationsList';
import AdmitCardList from './pages/AdmitCard/AdmitCardList';
import SubAdmin from './pages/SubAdmin';
import Footer from './components/Footer/Footer';
import InterviewSchedule from './pages/InterviewSchedule/InterviewSchedule';
function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Admin Panel Routes */}
        
        <Route path='/login' element={<Login/> }/>
        <Route path='/register' element={<Register/> }/>
        <Route path='/forgot-password' element={<ForgotPassword/> }/>
        <Route path='/reset-password' element={<ResetPassword/> }/>
        <Route path='/' element={<AdminPanel/> }/>
        <Route path='/dashboard' element={<Dashboard/> }/>
        <Route path='/myApplicants' element={<MyApplicationsList/> }/>
        <Route path='/admit-card-list' element={<AdmitCardList/> }/>
        <Route path='/interview-schedule' element={<InterviewSchedule/> }/>
        {/* <Route path='/interview-feedback' element={<InterviewAndFeedback/> }/> */}
        {/* <Route path='/selection-letter' element={<selectionLetter/> }/> */}
        {/* <Route path='/confirmation-letter' element={<ConfirmationLetter/> }/> */}
        {/* <Route path='/enquiries' element={<Enquiries/> }/> */}
        <Route path='/sub-admin' element={<SubAdmin/> }/>

        <Route />
      </Routes>
    </Router>
    <div className="App">
    </div>
    </>
  );
}

export default App;
