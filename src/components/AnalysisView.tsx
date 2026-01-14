import { Star, CheckCircle2, HelpCircle, ChevronRight, ArrowLeft, FileText, Play, Volume2, Maximize } from 'lucide-react';

interface AnalysisViewProps {
  reportId: string;
  onBack: () => void;
}

export default function AnalysisView({ reportId, onBack }: AnalysisViewProps) {
  const metrics = [
    { label: 'READ SCORE', value: 82, status: 'GOOD', color: 'blue' },
    { label: 'PARTICIPATION', value: 88, status: 'GOOD', color: 'green' },
    { label: 'SENTIMENT', value: 75, status: 'GOOD', color: 'pink' },
  ];

  const actionPoints = [
    { time: '2:25', person: 'Sarah Chen', action: 'review and prioritize the 12 backlog issues related to performance' },
    { time: '5:12', person: 'Marcus Rodriguez', action: 'coordinate with DevOps to resolve the deployment pipeline blocker' },
    { time: '7:58', person: 'Emily Johnson', action: 'create technical documentation for the new microservices architecture' },
    { time: '10:45', person: 'David Kim', action: 'refactor the authentication module before the next sprint' },
    { time: '13:43', person: 'Alex Thompson', action: 'implement webhooks for real-time notifications' },
    { time: '18:25', person: 'Sarah Chen', action: 'increase unit test coverage to 85% in critical modules' },
    { time: '10:45', person: 'David Kim', action: 'refactor the authentication module before the next sprint' },
    { time: '13:43', person: 'Alex Thompson', action: 'implement webhooks for real-time notifications' },
    { time: '18:25', person: 'Sarah Chen', action: 'increase unit test coverage to 85% in critical modules' },
  ];

  const keyQuestions = [
      { time: '3:23', question: 'What is the deadline to complete the integration with the payments API?' },
      { time: '4:49', question: 'Do we need to scale the team to meet Sprint 41 objectives?' },
      { time: '10:45', question: 'What is the deadline to complete the integration with the payments API?' },
      { time: '13:43', question: 'Do we need to scale the team to meet Sprint 41 objectives?' },
      { time: '18:25', question: 'What is the deadline to complete the integration with the payments API?' },
  ];

  const highlights = [
    { type: 'Action Point', time: '2:25', text: 'Sarah Chen will review and prioritize the 12 backlog issues related to performance' },
    { type: 'Key Question', time: '3:23', text: 'What is the deadline to complete the integration with the payments API?' },
    { type: 'Key Question', time: '4:49', text: 'Do we need to scale the team to meet Sprint 41 objectives?' },
    { type: 'Topic', time: '5:12', text: 'Coordination with DevOps to resolve deployment pipeline blockers' },
    { type: 'Key Question', time: '3:23', text: 'What is the deadline to complete the integration with the payments API?' },
    { type: 'Key Question', time: '4:49', text: 'Do we need to scale the team to meet Sprint 41 objectives?' },
    { type: 'Action Point', time: '5:12', text: 'Coordination with DevOps to resolve deployment pipeline blockers' },
  ];

  const getSemiCircleColor = (color: string) => {
    const colors = {
      blue: 'stroke-blue-600',
      green: 'stroke-green-600',
      pink: 'stroke-pink-600',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="flex-1 bg-gray-50 text-gray-900 overflow-y-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4 lg:mb-6"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to reports</span>
          </button>

          {/* 3-column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Metrics - 3 columns with semicircular charts */}
            {metrics.map((metric) => {
              const percentage = metric.value;
              // Radius of 50, full semicircle has length π * r
              const radius = 50;
              const circumference = Math.PI * radius;
              const offset = circumference - (percentage / 100) * circumference;
              
              return (
                <div key={metric.label} className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                  <div className="flex flex-col items-center">
                    {/* Semicircular chart */}
                    <div className="relative w-full flex justify-center mb-4" style={{ height: '120px' }}>
                      <svg 
                        className="w-full h-full" 
                        viewBox="0 0 120 70" 
                        preserveAspectRatio="xMidYMid meet"
                        style={{ maxWidth: '200px' }}
                      >
                        {/* Gray background of the semicircle */}
                        <path
                          d="M 10 60 A 50 50 0 0 1 110 60"
                          stroke="currentColor"
                          strokeWidth="10"
                          fill="none"
                          className="text-gray-200"
                          strokeLinecap="round"
                        />
                        {/* Progress bar with color */}
                        <path
                          d="M 10 60 A 50 50 0 0 1 110 60"
                          stroke="currentColor"
                          strokeWidth="10"
                          fill="none"
                          className={getSemiCircleColor(metric.color)}
                          strokeLinecap="round"
                          strokeDasharray={circumference}
                          strokeDashoffset={offset}
                          style={{
                            transition: 'stroke-dashoffset 0.8s ease-in-out'
                          }}
                        />
                      </svg>
                      {/* Value centered over the chart */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <div className="text-3xl lg:text-4xl font-bold text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-500 mt-1">OUT OF 100</div>
                      </div>
                    </div>
                    {/* Label and status */}
                    <div className="w-full text-center">
                      <div className="text-xs text-gray-500 mb-2 font-medium">{metric.label}</div>
                      <div className="text-xs text-green-600 border border-green-200 bg-green-50 px-2 py-1 rounded inline-block">
                        {metric.status}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Summary and Action Points - Each occupies 50% width */}
            <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Summary - Occupies 50% */}
              <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                  <div className="flex items-center space-x-2">
                    <Star className="text-blue-500" size={20} />
                    <h2 className="text-lg lg:text-xl font-semibold">Summary</h2>
                  </div>
                
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Sprint 40 Retrospective and Backlog Review. The team reviewed the current backlog status, identifying 47 pending
                  tasks with different priority levels. It was highlighted that 68% of user stories are in "In Progress" status,
                  while only 12% were completed this sprint. Critical blockers were discussed: the payments API integration is
                  delayed by 3 days, and there are pending dependencies from the DevOps team for production deployment. 8 features
                  were prioritized for the next sprint, including refactoring the authentication module, improvements to dashboard
                  data loading, and implementing webhooks for real-time notifications. The team agreed to conduct more frequent code
                  reviews and increase unit test coverage to 85% before the next release.
                </p>

             
              </div>

              {/* Action Points - Occupies 50% */}
              <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="text-green-600" size={20} />
                  <h2 className="text-lg lg:text-xl font-semibold">Action Points</h2>
                </div>
              
              </div>

              <div className="space-y-3">
                {actionPoints.slice(0, 4).map((point, index) => (
                  <div key={index} className="flex items-start space-x-3 py-2 hover:bg-gray-50 rounded-lg px-2 -mx-2 transition-colors">
                    <div className="text-xs text-gray-500 w-12 flex-shrink-0 pt-0.5">{point.time}</div>
                    <div className="flex-1 text-sm">
                      <span className="font-medium text-gray-900">{point.person}</span> <span className="text-gray-700">{point.action}</span>
                    </div>
                  
                  </div>
                ))}
              </div>

              
              </div>
            </div>

            {/* Key Questions and Notes - Each occupies 50% width */}
            <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              {/* Key Questions - Occupies 50% */}
              <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <HelpCircle className="text-purple-600" size={20} />
                  <h2 className="text-lg lg:text-xl font-semibold">Key Questions</h2>
                </div>

                <div className="space-y-3">
                  {keyQuestions.map((q, index) => (
                    <div key={index} className="flex items-start space-x-3 py-2">
                      <div className="text-xs text-gray-500 w-12 flex-shrink-0 pt-0.5">{q.time}</div>
                      <div className="flex-1 text-sm text-gray-700">{q.question}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notes - Occupies 50% */}
              <div className="bg-white rounded-xl p-4 lg:p-6 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="text-blue-600" size={20} />
                    <h2 className="text-lg lg:text-xl font-semibold">Notes</h2>
                  </div>
                 
                </div>

                <div className="space-y-3">
                  {actionPoints.slice(0, 3).map((point, index) => (
                    <div key={index} className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-0">
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 bg-white mt-0.5 flex-shrink-0 cursor-pointer" />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900 mb-1">{point.action.substring(0, 40)}...</div>
                        <div className="text-xs text-gray-500 mb-2">{point.person} • {point.time}</div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded">Today</span>
                          <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-600 rounded">Action</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar derecho */}
        <div className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-l border-gray-200 p-4 lg:p-6 space-y-4 lg:space-y-6">
        <h3>Recording video</h3>
          {/* Recording video area */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700">
            {/* Video space */}
            <div className="relative w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group">
              {/* Video placeholder with subtle pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'
              }}></div>
              
              {/* Video placeholder */}
              
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center">
                  <button className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center backdrop-blur-sm transition-all group-hover:scale-110 border-2 border-white/20">
                    <Play className="text-white ml-1" size={32} fill="white" />
                  </button>
                  
                  <p className="text-white/50 text-xs mt-1">Sprint 40 Retrospective</p>
                </div>
              </div>
              
              {/* Video controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors backdrop-blur-sm">
                      <Play className="text-white ml-0.5" size={18} fill="white" />
                    </button>
                    <div className="flex items-center space-x-2">
                      <Volume2 className="text-white/90" size={16} />
                      <div className="w-20 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer hover:bg-white/40 transition-colors">
                        <div className="h-full bg-white w-3/4"></div>
                      </div>
                    </div>
                    <span className="text-white/90 text-xs font-mono">45:23 / 1:23:15</span>
                  </div>
                  <button className="text-white/90 hover:text-white transition-colors">
                    <Maximize size={18} />
                  </button>
                </div>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer hover:h-2 transition-all group/progress">
                  <div className="h-full bg-blue-500 w-1/3 transition-all group-hover/progress:bg-blue-400"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights and Chapters tabs */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="flex items-center space-x-4 border-b border-gray-300 mb-4">
              <button className="pb-2 border-b-2 border-blue-500 text-sm text-gray-900 font-medium">Highlights 14</button>
              <button className="pb-2 text-gray-500 text-sm hover:text-gray-900 transition-colors">Chapters 8</button>
          
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => {
                const typeColors = {
                  'Action Point': 'text-blue-600',
                  'Key Question': 'text-purple-600',
                  'Topic': 'text-orange-600',
                };

                return (
                  <div key={index} className="space-y-2 pb-3 border-b border-gray-200 last:border-0">
                    <div className={`text-xs ${typeColors[item.type as keyof typeof typeColors]} flex items-center space-x-2 font-medium`}>
                      <span>{item.type}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{item.time}</span>
                    </div>
                    <div className="text-sm text-gray-700 leading-relaxed">{item.text}</div>
                    <button className="text-gray-500 hover:text-gray-900 transition-colors flex items-center space-x-1">
                      <span className="text-xs">Go to moment</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
