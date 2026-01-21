import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Assessments } from './pages/Assessments';
import { ReportsNew } from './pages/ReportsNew';
import { ClassesNew } from './pages/ClassesNew';
import { ClassDetails } from './pages/ClassDetails';
import { Accounts } from './pages/Accounts';
import { AccountDetails } from './pages/AccountDetails';
import { Documentation } from './pages/Documentation';
import { ClassSummaryReport } from './pages/ClassSummaryReport';
import { StudentPerformanceReport } from './pages/StudentPerformanceReport';
import { StudentPerformanceSelection } from './pages/StudentPerformanceSelection';
import { StudentReportSelection } from './pages/StudentReportSelection';
import { ItemDistributionReport } from './pages/ItemDistributionReport';
import { PathwaysSignIn } from './pages/PathwaysSignIn';
import { PathwaysSignInLight } from './pages/PathwaysSignInLight';
import { PathwaysDashboard } from './pages/PathwaysDashboard';
import { StudentDashboard } from './pages/StudentDashboard';
import { ComponentLibrary } from './pages/ComponentLibrary';
import { ReportQueue } from './pages/ReportQueue';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* K-12 Pathways Portal Routes (No Header) */}
        <Route path="/pathways-signin" element={<PathwaysSignIn />} />
        <Route path="/pathways-signin-light" element={<PathwaysSignInLight />} />
        <Route path="/pathways-dashboard" element={<PathwaysDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        
        {/* EdAssess Application Routes (With Header) */}
        <Route path="/*" element={
          <div className="min-h-screen flex flex-col bg-white">
            <Header />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/assessments" element={<Assessments />} />
              <Route path="/assessment/:id" element={<Home />} />
              <Route path="/reports" element={<ReportsNew />} />
              <Route path="/reports/class-summary" element={<ClassSummaryReport />} />
              <Route path="/reports/student-performance" element={<StudentPerformanceReport />} />
              <Route path="/reports/student-performance-selection" element={<StudentPerformanceSelection />} />
              <Route path="/reports/student-report-selection" element={<StudentReportSelection />} />
              <Route path="/reports/item-distribution" element={<ItemDistributionReport />} />
              <Route path="/reports/queue" element={<ReportQueue />} />
              <Route path="/classes" element={<ClassesNew />} />
              <Route path="/class/:id" element={<ClassDetails />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/account/:id" element={<AccountDetails />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/components" element={<ComponentLibrary />} />
            </Routes>
          </div>
        } />
      </Routes>
    </Router>
  );
}