const stats = [
  { value: '10K+', label: '活跃学习者' },
  { value: '100+', label: '学习领域' },
  { value: '98%', label: '用户满意度' },
  { value: '24/7', label: 'AI 学习助手' },
]

export default function Stats() {
  return (
    <div className="stats-strip reveal">
      {stats.map((stat, i) => (
        <div key={i} className="stat-item">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}
