const stats = [
  { value: '10K+', label: '活跃学习者' },
  { value: '100+', label: '学习领域' },
  { value: '98%', label: '用户满意度' },
  { value: '24/7', label: 'AI 学习助手' },
]

export default function Stats() {
  return (
    <div className="stats-strip reveal grid grid-cols-4 border-t border-b border-[rgba(212,168,83,0.12)]">
      {stats.map((stat, i) => (
        <div key={i} className="stat-item py-10 px-8 text-center relative">
          {i < stats.length - 1 && (
            <span className="absolute right-0 top-[20%] h-[60%] w-px bg-[rgba(212,168,83,0.12)]" />
          )}
          <div className="font-display text-[2.8rem] font-bold text-gold-primary leading-none mb-2">
            {stat.value}
          </div>
          <div className="text-[0.82rem] tracking-[0.1em] uppercase text-text-muted">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}
