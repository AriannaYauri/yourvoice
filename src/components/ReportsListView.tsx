import { useState } from 'react';
import { Search, Upload, MoreVertical, List, Grid, FileText, Calendar } from 'lucide-react';

interface Report {
  id: string;
  title: string;
  date: string;
  time: string;
  size: string;
  type: 'meeting' | 'sprint';
}

interface ReportsListViewProps {
  onReportSelect: (reportId: string) => void;
}

export default function ReportsListView({ onReportSelect }: ReportsListViewProps) {
  const reports: Report[] = [
    { id: '1', title: 'Sprint 40 Retrospective', date: '10 Oct', time: '10:09pm', size: '2 GB', type: 'sprint' },
    { id: '2', title: 'Backlog Review Meeting', date: '9 Oct', time: '3:45pm', size: '1.5 GB', type: 'meeting' },
    { id: '3', title: 'Daily Standup - Week 41', date: '8 Oct', time: '9:30am', size: '850 MB', type: 'meeting' },
    { id: '4', title: 'Sprint 39 Planning', date: '5 Oct', time: '2:15pm', size: '2.2 GB', type: 'sprint' },
    { id: '5', title: 'Team Sync Meeting', date: '4 Oct', time: '11:20am', size: '1.1 GB', type: 'meeting' },
    { id: '6', title: 'Sprint 38 Review', date: '1 Oct', time: '4:00pm', size: '1.8 GB', type: 'sprint' },
    { id: '7', title: 'Architecture Discussion', date: '28 Sep', time: '10:00am', size: '950 MB', type: 'meeting' },
    { id: '8', title: 'Sprint 37 Retrospective', date: '25 Sep', time: '3:30pm', size: '2.1 GB', type: 'sprint' },
    { id: '9', title: 'Product Review', date: '22 Sep', time: '1:45pm', size: '1.3 GB', type: 'meeting' },
    { id: '10', title: 'Sprint 36 Planning', date: '18 Sep', time: '2:00pm', size: '1.9 GB', type: 'sprint' },
    { id: '11', title: 'Tech Lead Meeting', date: '15 Sep', time: '11:00am', size: '750 MB', type: 'meeting' },
    { id: '12', title: 'Sprint 35 Review', date: '12 Sep', time: '4:30pm', size: '2.0 GB', type: 'sprint' },
  ];

  const totalSize = '12 GB';
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const getIcon = (type: string) => {
    return type === 'sprint' ? FileText : Calendar;
  };

  const getIconColor = (type: string) => {
    return type === 'sprint' ? 'text-blue-600' : 'text-green-600';
  };

  return (
    <div className="flex-1 bg-gray-50 text-gray-900 overflow-y-auto">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex-1 w-full sm:max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            
          </div>
        </div>

        {/* Title and Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Reports</h1>
            <p className="text-gray-600 text-sm lg:text-base">Total: {totalSize}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-600 hover:text-gray-900 text-sm font-medium">Name ↑</button>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
            >
              <List size={20} />
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Grid size={20} />
            </button>
          </div>
        </div>

        {/* Reports Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {reports.map((report) => {
              const Icon = getIcon(report.type);
              const iconColor = getIconColor(report.type);
              return (
                <div
                  key={report.id}
                  onClick={() => onReportSelect(report.id)}
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg ${iconColor.replace('text-', 'bg-').replace('-600', '-100')}`}>
                      <Icon className={iconColor} size={24} />
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <MoreVertical size={18} />
                    </button>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{report.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{report.size}</span>
                    <span>{report.time}, {report.date}</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-200">
            {reports.map((report) => {
              const Icon = getIcon(report.type);
              const iconColor = getIconColor(report.type);
              return (
                <div
                  key={report.id}
                  onClick={() => onReportSelect(report.id)}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className={`p-2 rounded-lg ${iconColor.replace('text-', 'bg-').replace('-600', '-100')}`}>
                    <Icon className={iconColor} size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1">{report.title}</h3>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>{report.size}</span>
                      <span>{report.time}, {report.date}</span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreVertical size={18} />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
