import { useState } from 'react';
import { Cloud, Power, Volume2, VolumeX, Type, Upload, ChevronDown } from 'lucide-react';

export default function DashboardView() {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [liveCaptionsEnabled, setLiveCaptionsEnabled] = useState(false);
  const defaultProfilePhoto = 'https://media.licdn.com/dms/image/v2/D5603AQFax1zuq5A-fQ/profile-displayphoto-shrink_800_800/B56Zh.hsnsG4Ao-/0/1754469421241?e=1770249600&v=beta&t=ufyDyuVOboIGhNDFphyxFP6YZT_QKE03qQZhqSeidYM';
  const [voiceTone, setVoiceTone] = useState<'Natural' | 'Calm' | 'Neutral' | 'Energetic'>('Natural');
  const [voiceSpeed, setVoiceSpeed] = useState<'Slow' | 'Normal' | 'Fast'>('Normal');

  const meetings = [
    { id: 39, date: '19/01/24', image: 'https://i.pinimg.com/1200x/f0/2b/80/f02b80a953895467c21cf25d31995e43.jpg' },
    { id: 38, date: '20/01/24', image: 'https://i.pinimg.com/1200x/20/7b/8d/207b8d941538cc1bf7a331db61cdf071.jpg' },
    { id: 37, date: '21/01/24', image: 'https://i.pinimg.com/736x/70/f8/ef/70f8efd172787b270fd0ec3bc248dd64.jpg' },
  ];

  return (
    <div className="flex-1 bg-gray-50 text-gray-900 overflow-y-auto">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="w-full lg:w-96 p-4 lg:p-6 space-y-4 lg:space-y-6">
          <div className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
            <div className="flex items-start justify-between mb-4 lg:mb-6">
              <div>
                <div className="text-4xl lg:text-6xl font-light mb-2">Voice Profile</div>
                <div className="text-gray-500 text-sm lg:text-base">Current meeting</div>
              </div>
              <Cloud className="text-yellow-500 flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12" />
            </div>

            <div className="flex gap-4">
              {/* Profile photo */}
              <div className="flex flex-col items-center space-y-3 flex-shrink-0">
                <div className="relative">
                  <img
                    src={defaultProfilePhoto}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                  />
                </div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors border border-blue-200 cursor-default">
                  <Upload size={16} />
                  <span className="text-sm font-medium">Upload photo</span>
                </div>
              </div>

              {/* Selectors */}
              <div className="flex-1 space-y-4">
                {/* Voice tone selector */}
                <div className="space-y-2">
                  <label htmlFor="voiceTone" className="text-sm font-medium text-gray-700">
                    Voice tone
                  </label>
                  <div className="relative">
                    <select
                      id="voiceTone"
                      value={voiceTone}
                      onChange={(e) => setVoiceTone(e.target.value as typeof voiceTone)}
                      className="w-full px-3 py-2 pr-10 rounded-lg text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Natural">Natural</option>
                      <option value="Calm">Calm</option>
                      <option value="Neutral">Neutral</option>
                      <option value="Energetic">Energetic</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>

                {/* Speed selector */}
                <div className="space-y-2">
                  <label htmlFor="voiceSpeed" className="text-sm font-medium text-gray-700">
                    Speed
                  </label>
                  <div className="relative">
                    <select
                      id="voiceSpeed"
                      value={voiceSpeed}
                      onChange={(e) => setVoiceSpeed(e.target.value as typeof voiceSpeed)}
                      className="w-full px-3 py-2 pr-10 rounded-lg text-sm font-medium bg-white border border-gray-300 text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Slow">Slow</option>
                      <option value="Normal">Normal</option>
                      <option value="Fast">Fast</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
            <h3 className="text-lg lg:text-xl font-semibold mb-2">Live Interpretation Activity</h3>
            <p className="text-gray-500 text-xs lg:text-sm mb-4 lg:mb-6">Summary of real-time accessibility features</p>

            <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 lg:p-4 border border-purple-200">
                <div className="text-2xl lg:text-3xl font-bold mb-1">32 min</div>
                <div className="text-purple-700 text-xs">INTERPRETATION TODAY</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 lg:p-4 border border-blue-200">
                <div className="text-2xl lg:text-3xl font-bold mb-1">2,340</div>
                <div className="text-blue-700 text-xs">INTERPRETED PHRASES THIS MONTH</div>
              </div>
            </div>

            

            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <button
                onClick={() => setAudioEnabled(!audioEnabled)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  audioEnabled
                    ? 'bg-green-50 border border-green-200 text-green-700 hover:bg-green-100'
                    : 'bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {audioEnabled ? (
                    <Volume2 className="text-green-600" size={20} />
                  ) : (
                    <VolumeX className="text-gray-500" size={20} />
                  )}
                  <span className="text-sm font-medium">
                    {audioEnabled ? 'AI Enabled' : 'AI Disabled'}
                  </span>
                </div>
                <div className={`w-12 h-6 rounded-full transition-colors ${
                  audioEnabled ? 'bg-green-500' : 'bg-gray-300'
                }`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    audioEnabled ? 'translate-x-6' : 'translate-x-0.5'
                  } mt-0.5`} />
                </div>
              </button>

              <button
                onClick={() => setLiveCaptionsEnabled(!liveCaptionsEnabled)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                  liveCaptionsEnabled
                    ? 'bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100'
                    : 'bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Type className={liveCaptionsEnabled ? 'text-blue-600' : 'text-gray-500'} size={20} />
                  <span className="text-sm font-medium">
                    {liveCaptionsEnabled ? 'Live Captions Enabled' : 'Live Captions Disabled'}
                  </span>
                </div>
                <div className={`w-12 h-6 rounded-full transition-colors ${
                  liveCaptionsEnabled ? 'bg-blue-500' : 'bg-gray-300'
                }`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    liveCaptionsEnabled ? 'translate-x-6' : 'translate-x-0.5'
                  } mt-0.5`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 lg:p-6 space-y-4 lg:space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-3xl lg:text-4xl font-semibold">Hi Arianna!</h1>

            <div className="flex flex-wrap gap-2">
              {['Zoom', 'Meet', 'WeMeeting', 'Teams', 'Webex'].map((btn) => (
                <button
                  key={btn}
                  className="px-3 lg:px-4 py-2 bg-white rounded-full text-xs lg:text-sm hover:bg-gray-50 transition-colors whitespace-nowrap border border-gray-200 text-gray-700"
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden relative border border-gray-200 shadow-sm">
            <img
              src="https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Meeting"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />

            <div className="absolute top-4 left-4 flex items-center space-x-2">
              <div className="px-3 py-1 bg-red-500 rounded-full text-xs font-semibold flex items-center space-x-1 text-white">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span>LIVE</span>
              </div>
            </div>

            <div className="absolute top-4 right-4 flex flex-wrap items-center gap-2 justify-end">
              <div className="px-2 lg:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs whitespace-nowrap text-gray-700 border border-gray-200">
                5 people
              </div>
              <div className="px-2 lg:px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-xs whitespace-nowrap text-white">
               Voice AI Connected
              </div>
              <div className="px-2 lg:px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs whitespace-nowrap text-gray-700 border border-gray-200">
                45:15
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-lg font-semibold text-white">Meeting - Sprint 40</div>
              <div className="text-sm text-gray-200">Review of backlogs</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {meetings.map((meeting) => (
              <div key={meeting.id} className="bg-white rounded-xl overflow-hidden relative group cursor-pointer hover:scale-[1.02] transition-transform duration-200 border border-gray-200 shadow-sm">
                <img
                  src={meeting.image}
                  alt={`Sprint ${meeting.id}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
                  <div className="text-lg font-semibold text-white">Sprint {meeting.id}</div>
                  <div className="text-xs text-gray-200">MEETING {meeting.date}</div>
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg text-white">
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
