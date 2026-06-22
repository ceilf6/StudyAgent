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
    <div className="tech-section reveal">
      <div className="tech-inner">
        <span className="tech-label">技术栈</span>
        <div className="tech-tags">
          {techs.map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
