import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import CalendarView from './components/CalendarView';
import AnalysisView from './components/AnalysisView';
import ReportsListView from './components/ReportsListView';

function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);

  const handleViewChange = (view: string) => {
    setActiveView(view);
    // Reset selected report when switching to analysis (show list) or switching away
    setSelectedReportId(null);
  };

  const handleReportSelect = (reportId: string) => {
    setSelectedReportId(reportId);
  };

  const handleBackToList = () => {
    setSelectedReportId(null);
  };

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'calendar':
        return <CalendarView />;
      case 'analysis':
        if (selectedReportId === null) {
          return <ReportsListView onReportSelect={handleReportSelect} />;
        }
        return <AnalysisView reportId={selectedReportId} onBack={handleBackToList} />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar 
        activeView={activeView} 
        onViewChange={handleViewChange}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex-1 overflow-auto">
        {renderView()}
      </div>
    </div>
  );
}

export default App;
