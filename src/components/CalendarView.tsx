import { useState } from 'react';
import { ChevronLeft, ChevronRight, MoreVertical } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  assignee: string;
  assigneeInitial: string;
  color: 'purple' | 'light-purple' | 'purple-light' | 'blue' | 'light-blue' | 'blue-light' | 'green' | 'light-green' | 'green-light';
  date: string; // Format: "YYYY-MM-DD"
}

export default function CalendarView() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Get first day of month and number of days
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (number | null)[][] = [];
    let currentWeek: (number | null)[] = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      currentWeek.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        days.push(currentWeek);
        currentWeek = [];
      }
    }

    // Add remaining empty cells for the last week
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null);
      }
      days.push(currentWeek);
    }

    return days;
  };

  const daysInMonth = getDaysInMonth(currentDate);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      if (direction === 'prev') {
        newDate.setMonth(prevDate.getMonth() - 1);
      } else {
        newDate.setMonth(prevDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const getCurrentMonthYear = () => {
    return `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  };

  const isToday = (day: number | null) => {
    if (!day) return false;
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const getDateKey = (day: number) => {
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    return `${year}-${month}-${dayStr}`;
  };

  // Sample tasks for demonstration - using date keys (YYYY-MM-DD format)
  const tasksByDate: Record<string, Task[]> = {
    // January 2026 examples
    '2026-01-04': [
      { id: 1, title: 'Recruit New Talent', assignee: 'Helna Julie', assigneeInitial: 'HJ', color: 'green', date: '2026-01-04' },
    ],
    '2026-01-05': [
      { id: 2, title: 'Market Services', assignee: 'Clair Burge', assigneeInitial: 'CB', color: 'green-light', date: '2026-01-05' },
    ],
    '2026-01-08': [
      { id: 3, title: 'Resolve Payment Disputes', assignee: 'Clair Burge', assigneeInitial: 'CB', color: 'purple-light', date: '2026-01-08' },
      { id: 4, title: 'Train Employees', assignee: 'Craig Curry', assigneeInitial: 'CC', color: 'blue-light', date: '2026-01-08' },
    ],
    '2026-01-09': [
      { id: 5, title: 'Provide Customer Service', assignee: 'Christian Bass', assigneeInitial: 'CB', color: 'purple-light', date: '2026-01-09' },
    ],
    '2026-01-10': [
      { id: 6, title: 'Improve Efficiency', assignee: 'Christian Bass', assigneeInitial: 'CB', color: 'blue-light', date: '2026-01-10' },
    ],
    '2026-01-11': [
      { id: 7, title: 'Develop Processing Plans', assignee: 'Clair Burge', assigneeInitial: 'CB', color: 'purple', date: '2026-01-11' },
    ],
    '2026-01-12': [
      { id: 8, title: 'Develop Processing Plans', assignee: 'Clair Burge', assigneeInitial: 'CB', color: 'purple', date: '2026-01-12' },
    ],
    '2026-01-14': [
      { id: 9, title: 'Report To Management', assignee: 'Clair Burge', assigneeInitial: 'CB', color: 'green-light', date: '2026-01-14' },
    ],
    '2026-01-15': [
      { id: 10, title: 'Develop Strategic Plans', assignee: 'Christian Bass', assigneeInitial: 'CB', color: 'purple', date: '2026-01-15' },
    ],
    '2026-01-20': [
      { id: 11, title: 'Resolve Disputes', assignee: 'Brandon Crawford', assigneeInitial: 'BC', color: 'purple-light', date: '2026-01-20' },
    ],
    '2026-01-21': [
      { id: 12, title: 'Build Relationships', assignee: 'Craig Curry', assigneeInitial: 'CC', color: 'purple', date: '2026-01-21' },
    ],
    '2026-01-22': [
      { id: 13, title: 'Develop Processing Plans', assignee: 'Helna Julie', assigneeInitial: 'HJ', color: 'purple-light', date: '2026-01-22' },
    ],
    '2026-01-23': [
      { id: 14, title: 'Create Training Programs', assignee: 'Brandon Crawford', assigneeInitial: 'BC', color: 'blue', date: '2026-01-23' },
    ],
  };

  const getColorClasses = (color: Task['color']) => {
    switch (color) {
      // Purple variations
      case 'purple':
        return 'bg-purple-500 text-white';
      case 'light-purple':
        return 'bg-purple-100 text-purple-900 border border-purple-300';
      case 'purple-light':
        return 'bg-purple-50 text-purple-800 border border-purple-200';
      // Blue variations
      case 'blue':
        return 'bg-blue-500 text-white';
      case 'light-blue':
        return 'bg-blue-100 text-blue-900 border border-blue-300';
      case 'blue-light':
        return 'bg-blue-50 text-blue-800 border border-blue-200';
      // Green variations
      case 'green':
        return 'bg-green-500 text-white';
      case 'light-green':
        return 'bg-green-100 text-green-900 border border-green-300';
      case 'green-light':
        return 'bg-green-50 text-green-800 border border-green-200';
      default:
        return 'bg-gray-50 text-gray-900 border border-gray-200';
    }
  };

  const isDarkColor = (color: Task['color']) => {
    return color === 'purple' || color === 'blue' || color === 'green';
  };

  return (
    <div className="min-h-full bg-gray-50 text-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2">Calendar</h1>
        <p className="text-gray-500 text-sm sm:text-base">Daily Operation</p>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-sm">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <button 
            onClick={() => navigateMonth('prev')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
            {getCurrentMonthYear()}
          </h2>
          <button 
            onClick={() => navigateMonth('next')}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-2 lg:gap-3 mb-4">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-gray-500 text-xs sm:text-sm font-semibold py-2 uppercase tracking-wide">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="space-y-2 lg:space-y-3">
          {daysInMonth.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 gap-2 lg:gap-3">
              {week.map((day, dayIndex) => {
                const dateKey = day ? getDateKey(day) : '';
                const tasks = day && dateKey ? tasksByDate[dateKey] || [] : [];
                const today = isToday(day);
                
                return (
                  <div
                    key={dayIndex}
                    className={`min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] rounded-lg border transition-all ${
                      day
                        ? today
                          ? 'bg-blue-50 border-blue-300 border-2'
                          : 'bg-white border-gray-200 hover:border-gray-300'
                        : 'bg-gray-50 border-transparent'
                    }`}
                  >
                    {day && (
                      <>
                        {/* Day number */}
                        <div className={`p-2 pb-1 flex items-center justify-between ${
                          today ? 'text-blue-700' : 'text-gray-700'
                        }`}>
                          <span className={`text-xs sm:text-sm font-semibold ${
                            today ? 'text-blue-700' : 'text-gray-900'
                          }`}>
                            {day}
                          </span>
                          {tasks.length > 0 && (
                            <span className="text-[10px] text-gray-400 font-medium">
                              {tasks.length}
                            </span>
                          )}
                        </div>

                        {/* Tasks */}
                        <div className="px-2 pb-2 space-y-1.5 overflow-hidden">
                          {tasks.slice(0, 2).map((task) => (
                            <div
                              key={task.id}
                              className={`${getColorClasses(task.color)} rounded-md p-1.5 sm:p-2 text-[10px] sm:text-xs cursor-pointer hover:opacity-90 transition-opacity group relative`}
                            >
                              <div className="flex items-start justify-between gap-1">
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium truncate mb-1">{task.title}</div>
                                  <div className="flex items-center gap-1.5">
                                    <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-semibold ${
                                      isDarkColor(task.color)
                                        ? 'bg-white/30 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                    }`}>
                                      {task.assigneeInitial[0]}
                                    </div>
                                    <span className={`text-[9px] truncate ${
                                      isDarkColor(task.color)
                                        ? 'text-white/90'
                                        : 'text-gray-600'
                                    }`}>
                                      {task.assignee.split(' ')[0]}
                                    </span>
                                  </div>
                                </div>
                                <MoreVertical 
                                  size={10} 
                                  className={`flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                                    isDarkColor(task.color)
                                      ? 'text-white'
                                      : 'text-gray-500'
                                  }`}
                                />
                              </div>
                            </div>
                          ))}
                          {tasks.length > 2 && (
                            <div className="text-[10px] text-gray-500 font-medium px-1.5">
                              +{tasks.length - 2} more
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <span className="text-gray-600 font-medium">Legend:</span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-500"></div>
              <span className="text-gray-700">Purple - High</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-100 border border-purple-300"></div>
              <span className="text-gray-700">Purple - Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-purple-50 border border-purple-200"></div>
              <span className="text-gray-700">Purple - Light</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-500"></div>
              <span className="text-gray-700">Blue - High</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-100 border border-blue-300"></div>
              <span className="text-gray-700">Blue - Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-50 border border-blue-200"></div>
              <span className="text-gray-700">Blue - Light</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-500"></div>
              <span className="text-gray-700">Green - High</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-100 border border-green-300"></div>
              <span className="text-gray-700">Green - Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-green-50 border border-green-200"></div>
              <span className="text-gray-700">Green - Light</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
