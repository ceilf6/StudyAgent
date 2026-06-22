const techs = [
  'React',
  'TypeScript',
  'TailwindCSS',
  'Node.js',
  'Express',
  'PostgreSQL',
  'OpenAI API',
  'Supabase',
]

export default function Tech() {
  return (
    <div className="tech-section reveal border-t border-b border-[rgba(212,168,83,0.12)] py-15">
      <div className="tech-inner flex items-center gap-12">
        <span className="tech-label text-[0.72rem] font-medium tracking-[0.25em] uppercase text-text-muted whitespace-nowrap">
          技术栈
        </span>
        <div className="tech-tags flex flex-wrap gap-2.5">
          {techs.map((tech, i) => (
            <span
              key={i}
              className="tech-tag px-5 py-2 border border-[rgba(212,168,83,0.12)] rounded-[40px] text-text-secondary text-[0.82rem] font-medium tracking-wide transition-all hover:border-gold-primary hover:text-gold-light hover:bg-[rgba(212,168,83,0.06)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
