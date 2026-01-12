import { useState } from 'react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import CalendarView from './components/CalendarView';
import AnalysisView from './components/AnalysisView';

function App() {
  const [activeView, setActiveView] = useState('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView />;
      case 'calendar':
        return <CalendarView />;
      case 'analysis':
        return <AnalysisView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-[#0f1419]">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      {renderView()}
    </div>
  );
}

export default App;
