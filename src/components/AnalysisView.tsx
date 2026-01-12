import { Star, CheckCircle2, HelpCircle, ChevronDown, ChevronRight } from 'lucide-react';

export default function AnalysisView() {
  const metrics = [
    { label: 'PUNTAJE DE READ', value: 82, status: 'ESTÁ BIEN', color: 'blue' },
    { label: 'PARTICIPACIÓN', value: 88, status: 'ESTÁ BIEN', color: 'green' },
    { label: 'SENTIMIENTO', value: 75, status: 'ESTÁ BIEN', color: 'pink' },
  ];

  const actionPoints = [
    { time: '2:25', person: 'Sarah Chen', action: 'revisar y priorizar las 12 issues del backlog relacionadas con performance' },
    { time: '5:12', person: 'Marcus Rodriguez', action: 'coordinar con DevOps para resolver el bloqueador del deployment pipeline' },
    { time: '7:58', person: 'Emily Johnson', action: 'crear documentación técnica para la nueva arquitectura de microservicios' },
    { time: '10:45', person: 'David Kim', action: 'refactorizar el módulo de autenticación antes del próximo sprint' },
    { time: '13:43', person: 'Alex Thompson', action: 'implementar webhooks para notificaciones en tiempo real' },
    { time: '18:25', person: 'Sarah Chen', action: 'aumentar cobertura de tests unitarios a 85% en módulos críticos' },
  ];

  const keyQuestions = [
    { time: '3:23', question: '¿Cuál es la fecha límite para completar la integración con el API de pagos?' },
    { time: '4:49', question: '¿Necesitamos escalar el equipo para cumplir con los objetivos del Sprint 41?' },
  ];

  const highlights = [
    { type: 'Punto de Acción', time: '2:25', text: 'Sarah Chen revisará y priorizará las 12 issues del backlog relacionadas con performance' },
    { type: 'Pregunta clave', time: '3:23', text: '¿Cuál es la fecha límite para completar la integración con el API de pagos?' },
    { type: 'Pregunta clave', time: '4:49', text: '¿Necesitamos escalar el equipo para cumplir con los objetivos del Sprint 41?' },
    { type: 'Tema', time: '5:12', text: 'Coordinación con DevOps para resolver bloqueadores del deployment pipeline' },
    { type: 'Punto de Acción', time: '5:12', text: 'Coordinación con DevOps para resolver bloqueadores del deployment pipeline' },
  ];

  const getCircleColor = (color: string) => {
    const colors = {
      blue: 'stroke-blue-500',
      green: 'stroke-green-500',
      pink: 'stroke-pink-500',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="flex-1 bg-[#0f1419] text-white overflow-y-auto">
      <div className="flex">
        <div className="flex-1 p-8 space-y-6">
          <div className="grid grid-cols-3 gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-[#1a1f2e] rounded-xl p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs text-gray-400 mb-2">{metric.label}</div>
                    <div className="text-4xl font-bold mb-2">{metric.value}</div>
                    <div className="text-xs text-green-400 border border-green-400/30 px-2 py-1 rounded inline-block">
                      {metric.status}
                    </div>
                  </div>
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      className="text-gray-700"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      className={getCircleColor(metric.color)}
                      strokeDasharray={`${(metric.value / 100) * 201} 201`}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1a1f2e] rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Star className="text-blue-400" size={20} />
                <h2 className="text-xl font-semibold">Resumen</h2>
              </div>
              <button className="text-gray-400 text-sm hover:text-white">⚙️ Personalizar</button>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Sprint 40 Retrospective y Backlog Review. El equipo revisó el estado actual del backlog, identificando 47 tareas
              pendientes con diferentes niveles de prioridad. Se destacó que el 68% de las historias de usuario están en estado
              "In Progress", mientras que sólo el 12% completadas este sprint. Se discutieron los bloqueadores críticos: la
              integración con el API de pagos está retrasada 3 días, y hay dependencias pendientes del equipo de DevOps para el
              deployment a producción. Se priorizaron 8 features para el próximo sprint, incluyendo la refactorización del módulo
              de autenticación, mejoras en la carga de datos del dashboard, y la implementación de webhooks para notificaciones
              en tiempo real. El equipo acordó realizar code reviews más frecuentes y aumentar la cobertura de tests unitarios al
              85% antes del próximo release.
            </p>

            <button className="text-gray-400 text-sm hover:text-white flex items-center space-x-1">
              <ChevronDown size={16} />
              <span>Ver menos</span>
            </button>
          </div>

          <div className="bg-[#1a1f2e] rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle2 className="text-green-400" size={20} />
              <h2 className="text-xl font-semibold">Puntos de Acción</h2>
            </div>

            <div className="space-y-3">
              {actionPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 py-2 hover:bg-[#252b3a] rounded-lg px-2 -mx-2">
                  <div className="text-xs text-gray-400 w-12 flex-shrink-0">{point.time}</div>
                  <div className="flex-1 text-sm">
                    <span className="font-medium">{point.person}</span> {point.action}
                  </div>
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-transparent" />
                </div>
              ))}
            </div>

            <button className="text-gray-400 text-sm hover:text-white flex items-center space-x-1 mt-4">
              <ChevronDown size={16} />
              <span>Ver menos</span>
            </button>
          </div>

          <div className="bg-[#1a1f2e] rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-4">
              <HelpCircle className="text-purple-400" size={20} />
              <h2 className="text-xl font-semibold">Preguntas clave</h2>
            </div>

            <div className="space-y-3">
              {keyQuestions.map((q, index) => (
                <div key={index} className="flex items-start space-x-4 py-2">
                  <div className="text-xs text-gray-400 w-12 flex-shrink-0">{q.time}</div>
                  <div className="flex-1 text-sm">{q.question}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-96 bg-[#1a1f2e] p-6 space-y-6">
          <div className="flex items-center justify-between mb-6">
            <button className="text-gray-400 hover:text-white">▶️ Reproducir video</button>
          </div>

          <div className="bg-[#0f1419] rounded-xl p-4">
            <div className="flex items-center space-x-4 border-b border-gray-700 mb-4">
              <button className="pb-2 border-b-2 border-white text-sm">Destacados 14</button>
              <button className="pb-2 text-gray-400 text-sm">Capítulos 8</button>
              <button className="ml-auto text-gray-400">☰</button>
            </div>

            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {highlights.map((item, index) => {
                const typeColors = {
                  'Punto de Acción': 'text-blue-400',
                  'Pregunta clave': 'text-purple-400',
                  'Tema': 'text-orange-400',
                };

                return (
                  <div key={index} className="space-y-2">
                    <div className={`text-xs ${typeColors[item.type as keyof typeof typeColors]} flex items-center space-x-2`}>
                      <span>{item.type}</span>
                      <span className="text-gray-500">{item.time}</span>
                    </div>
                    <div className="text-sm text-gray-300 leading-relaxed">{item.text}</div>
                    <button className="text-gray-400 hover:text-white">
                      <ChevronRight size={16} />
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
