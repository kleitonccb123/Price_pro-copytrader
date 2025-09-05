export default function Metrics() {
  const metrics = [{
    label: 'Ganho total',
    value: '+111,99%'
  }, {
    label: 'Ganho absoluto',
    value: '+75,23%'
  }, {
    label: 'Média mensal',
    value: '5,82%'
  }, {
    label: 'Daily (média)',
    value: '0,19%'
  }, {
    label: 'Drawdown (máx.)',
    value: '7,44%'
  }, {
    label: 'Saldo',
    value: 'US$ 327.025,01'
  }, {
    label: 'Equity',
    value: 'US$ 327.193,01'
  }, {
    label: 'Profit',
    value: 'US$ 140.401,00'
  }, {
    label: 'Depósitos',
    value: 'US$ 140.302,07'
  }];
  const monthlyPerformance = [{
    month: 'Ago 2024',
    value: 12.82,
    positive: true
  }, {
    month: 'Set 2024',
    value: 5.19,
    positive: true
  }, {
    month: 'Out 2024',
    value: 2.35,
    positive: true
  }, {
    month: 'Nov 2024',
    value: 3.58,
    positive: true
  }, {
    month: 'Dez 2024',
    value: 1.67,
    positive: true
  }, {
    month: 'Jan 2025',
    value: -0.02,
    positive: false
  }, {
    month: 'Fev 2025',
    value: 11.31,
    positive: true
  }, {
    month: 'Mar 2025',
    value: 7.14,
    positive: true
  }, {
    month: 'Abr 2025',
    value: 2.92,
    positive: true
  }, {
    month: 'Mai 2025',
    value: 6.01,
    positive: true
  }, {
    month: 'Jun 2025',
    value: 4.97,
    positive: true
  }, {
    month: 'Jul 2025',
    value: 7.58,
    positive: true
  }, {
    month: 'Ago 2025',
    value: 11.86,
    positive: true
  }, {
    month: 'Set 2025',
    value: 0.84,
    positive: true
  }];
  return <section id="metrics" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-900/20 text-green-400 px-6 py-3 rounded-full mb-6 animate-pulse-soft conversion-glow">
            <span className="text-lg">✓ Dados verificados — myfxbook</span>
          </div>
          
          
        </div> 

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, i) => <div key={i} className="glass p-6 text-center">
              <div className="text-2xl font-bold text-[var(--primary)] mb-2">{metric.value}</div>
              <div className="text-[var(--muted)] text-sm">{metric.label}</div>
            </div>)}
        </div>

        <div className="glass p-8 mb-8">
          <h3 className="text-xl font-semibold mb-6 text-center">Performance Mensal</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {monthlyPerformance.map((perf, i) => <div key={i} className={`p-3 rounded-lg text-center ${perf.positive ? 'bg-green-900/20 text-green-400' : 'bg-red-900/20 text-red-400'}`}>

                <div className="text-xs mb-1">{perf.month}</div>
                <div className="font-semibold">{perf.value > 0 ? '+' : ''}{perf.value}%</div>
              </div>)}
          </div>
        </div>

        <p className="text-center text-xs text-[var(--muted)]">
          Resultados passados não garantem resultados futuros. Operar envolve risco.
        </p>
      </div>
    </section>;
}