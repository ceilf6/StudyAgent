const steps = [
  { num: '01', title: '设定目标', desc: '选择学习领域，明确你想掌握什么' },
  { num: '02', title: '规划路径', desc: 'AI 分析目标，生成个性化知识路线' },
  { num: '03', title: '逐步学习', desc: '从零开始，每次一个知识点，循序渐进' },
  { num: '04', title: '练习巩固', desc: '针对性练习，即时反馈，错题深度分析' },
  { num: '05', title: '追踪进化', desc: '可视化进度，持续优化学习策略' },
]

export default function Workflow() {
  return (
    <section id="workflow">
      <div className="workflow-inner">
        <div className="reveal">
          <div className="section-label">学习流程</div>
          <h2 className="section-title">
            五步，从迷茫
            <br />
            到掌握
          </h2>
          <p className="section-desc">
            不需要提前准备什么。你只需要带着学习目标，剩下的交给我们。
          </p>
        </div>
        <div className="workflow-steps reveal">
          {steps.map((step, i) => (
            <div key={i} className="workflow-step">
              <div className="workflow-step-num">{step.num}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
