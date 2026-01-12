import { Grid3x3, Calendar, FileText, Bell, Settings, User } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', icon: Grid3x3 },
    { id: 'calendar', icon: Calendar },
    { id: 'analysis', icon: FileText },
  ];

  return (
    <div className="w-16 bg-[#0a0e1a] flex flex-col items-center py-6 space-y-6">
      <div className="text-white font-semibold text-sm mb-8">sync</div>

      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeView === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`p-3 rounded-lg transition-colors ${
              isActive ? 'bg-pink-400' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Icon size={20} />
          </button>
        );
      })}

      <div className="flex-1" />

      <button className="text-gray-400 hover:text-white p-3">
        <Bell size={20} />
      </button>

      <button className="text-gray-400 hover:text-white p-3">
        <Settings size={20} />
      </button>

      <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm">
        N
      </button>
    </div>
  );
}
