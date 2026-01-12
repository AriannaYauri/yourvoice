import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarView() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysInMonth = [
    [null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  return (
    <div className="flex-1 bg-[#0f1419] text-white p-12">
      <h1 className="text-3xl font-semibold mb-8">Lighting</h1>

      <div className="bg-[#1a1f2e] rounded-2xl p-8">
        <div className="flex items-center justify-between mb-8">
          <button className="p-2 hover:bg-[#252b3a] rounded-lg transition-colors">
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-xl font-semibold">January 2026</h2>
          <button className="p-2 hover:bg-[#252b3a] rounded-lg transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-4 mb-4">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-gray-400 text-sm font-medium py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {daysInMonth.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 gap-4">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`aspect-square flex items-center justify-center rounded-lg text-sm ${
                    day === 11
                      ? 'bg-pink-400 text-black font-semibold text-lg'
                      : day
                      ? 'text-gray-300 hover:bg-[#252b3a] cursor-pointer'
                      : ''
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
