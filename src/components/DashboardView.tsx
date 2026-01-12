import { Cloud, Wind, Gauge, CloudRain, Zap, Tv, Coffee, Power } from 'lucide-react';

export default function DashboardView() {
  const meetings = [
    { id: 39, date: '19/01/24', image: 'https://images.pexels.com/photos/7562320/pexels-photo-7562320.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 38, date: '20/01/24', image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 37, date: '21/01/24', image: 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <div className="flex-1 bg-[#0f1419] text-white overflow-y-auto">
      <div className="flex h-full">
        <div className="w-96 p-6 space-y-6">
          <div className="bg-[#1a1f2e] rounded-2xl p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-6xl font-light mb-2">16°C</div>
                <div className="text-gray-400">Sunday Morning</div>
              </div>
              <Cloud className="text-yellow-400" size={48} />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Wind size={16} />
                  <span>WIND SPEED</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>30 km/h</span>
                  <span className="text-green-400">↑ 6km/h</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Gauge size={16} />
                  <span>PRESSURE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>720 hpa</span>
                  <span className="text-red-400">↓ 20hpa</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <CloudRain size={16} />
                  <span>RAIN CHANCE</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>60%</span>
                  <span className="text-red-400">↓ 12</span>
                </div>
              </div>
            </div>

            <button className="text-gray-400 text-sm mt-4 hover:text-white">See all</button>
          </div>

          <div className="bg-[#1a1f2e] rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">Power Consumption</h3>
            <p className="text-gray-400 text-sm mb-6">Summary of energy consumption</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-600/30 rounded-xl p-4">
                <Zap className="text-purple-400 mb-2" size={20} />
                <div className="text-3xl font-bold mb-1">48kWh</div>
                <div className="text-purple-300 text-xs">TODAY</div>
              </div>

              <div className="bg-gradient-to-br from-blue-900/50 to-blue-600/30 rounded-xl p-4">
                <Zap className="text-blue-400 mb-2" size={20} />
                <div className="text-3xl font-bold mb-1">680kWh</div>
                <div className="text-blue-300 text-xs">THIS MONTH</div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                    <Zap className="text-yellow-400" size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Lamps</div>
                    <div className="text-xs text-gray-400">10 DEVICES</div>
                  </div>
                </div>
                <div className="font-semibold">78 kWh</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-400/20 rounded-lg flex items-center justify-center">
                    <Tv className="text-blue-400" size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Smart TV</div>
                    <div className="text-xs text-gray-400">1 DEVICE</div>
                  </div>
                </div>
                <div className="font-semibold">180 kWh</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-400/20 rounded-lg flex items-center justify-center">
                    <Coffee className="text-orange-400" size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Coffee Machine</div>
                    <div className="text-xs text-gray-400">1 DEVICE</div>
                  </div>
                </div>
                <div className="font-semibold">110 kWh</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">Hi Ann!</h1>

            <div className="flex space-x-2">
              {['Zoom', 'Meet', 'WeMeeting', 'Teams', 'Room1', 'Room2'].map((btn) => (
                <button
                  key={btn}
                  className="px-4 py-2 bg-[#1a1f2e] rounded-full text-sm hover:bg-[#252b3a] transition-colors"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#1a1f2e] rounded-2xl overflow-hidden relative">
            <img
              src="https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Meeting"
              className="w-full h-96 object-cover"
            />

            <div className="absolute top-4 left-4 flex items-center space-x-2">
              <div className="px-3 py-1 bg-red-500 rounded-full text-xs font-semibold flex items-center space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span>LIVE</span>
              </div>
            </div>

            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs">
                👥 5 personas
              </div>
              <div className="px-3 py-1 bg-green-500/80 backdrop-blur-sm rounded-full text-xs">
                🤖 Bot conectado
              </div>
              <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs">
                🕐 45:15
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-lg font-semibold">Meeting - Sprint 40</div>
              <div className="text-sm text-gray-300">Review of backlogs</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {meetings.map((meeting) => (
              <div key={meeting.id} className="bg-[#1a1f2e] rounded-xl overflow-hidden relative group cursor-pointer">
                <img
                  src={meeting.image}
                  alt={`Sprint ${meeting.id}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <div className="text-lg font-semibold">Sprint {meeting.id}</div>
                  <div className="text-xs text-gray-300">MEETING {meeting.date}</div>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Power size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
