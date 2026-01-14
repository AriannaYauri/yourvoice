import { Grid3x3, Calendar, FileText, Bell, Settings, Menu, X } from 'lucide-react';
import { useEffect } from 'react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ activeView, onViewChange, sidebarOpen, setSidebarOpen }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', icon: Grid3x3, label: 'Dashboard' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
    { id: 'analysis', icon: FileText, label: 'Analysis' },
  ];

  const handleViewChange = (view: string) => {
    onViewChange(view);
    // Only close on mobile/tablet
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  // Close sidebar with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && sidebarOpen && window.innerWidth < 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [sidebarOpen, setSidebarOpen]);

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (sidebarOpen && window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    <>
      {/* Overlay for mobile/tablet */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2.5 bg-white rounded-lg text-gray-700 hover:bg-gray-100 transition-colors shadow-lg border border-gray-200"
        aria-label="Toggle menu"
        aria-expanded={sidebarOpen}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-90 md:w-72 lg:w-20
          bg-white border-r border-gray-200
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          shadow-xl lg:shadow-none
        `}
      >
        <div className="flex items-center justify-between p-4 md:p-5 lg:justify-center lg:py-6">
          <div className="text-gray-900 font-bold text-xl md:text-2xl lg:text-sm"></div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-900 transition-colors p-1"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex-1 px-4 md:px-5 lg:px-0 space-y-2 md:space-y-3 lg:space-y-6 overflow-y-auto flex flex-col items-stretch lg:items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleViewChange(item.id)}
                className={`
                  w-full lg:w-full
                  flex items-center lg:justify-center
                  px-4 py-3 md:py-3.5 lg:px-3 lg:py-3
                  rounded-xl lg:rounded-lg
                  transition-all duration-200
                  ${
                    isActive
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 bg-transparent'
                  }
                `}
              >
                <Icon size={22} className="md:w-5 md:h-5 lg:w-5 lg:h-5" />
                <span className="ml-3 lg:hidden font-medium text-base md:text-lg">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 md:p-5 lg:px-0 lg:py-6 space-y-2 md:space-y-3 lg:space-y-6 border-t border-gray-200 flex flex-col items-stretch lg:items-center">
          <button className="w-full lg:w-full flex items-center lg:justify-center px-4 py-3 md:py-3.5 lg:px-3 lg:py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 bg-transparent rounded-xl lg:rounded-lg transition-all duration-200">
            <Bell size={22} className="md:w-5 md:h-5 lg:w-5 lg:h-5" />
            <span className="ml-3 lg:hidden font-medium text-base md:text-lg">Notifications</span>
          </button>

          <button className="w-full lg:w-full flex items-center lg:justify-center px-4 py-3 md:py-3.5 lg:px-3 lg:py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 bg-transparent rounded-xl lg:rounded-lg transition-all duration-200">
            <Settings size={22} className="md:w-5 md:h-5 lg:w-5 lg:h-5" />
            <span className="ml-3 lg:hidden font-medium text-base md:text-lg">Settings</span>
          </button>

          <button className="w-full lg:w-full flex items-center lg:justify-center px-4 py-3 md:py-3.5 lg:px-3 lg:py-3 hover:bg-gray-50 bg-transparent rounded-xl lg:rounded-lg transition-all duration-200">
            <div className="w-10 h-10 md:w-11 md:h-11 lg:w-10 lg:h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-sm md:text-base lg:text-sm shadow-lg">
              N
            </div>
            <span className="ml-3 lg:hidden font-medium text-gray-900 text-base md:text-lg">Profile</span>
          </button>
        </div>
      </div>
    </>
  );
}
