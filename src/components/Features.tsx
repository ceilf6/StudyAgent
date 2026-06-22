const features = [
  {
    num: '01',
    title: '智能学习计划',
    desc: '根据学习目标与当前水平，生成个性化知识路线。追踪每一步进度，让方向清晰可见。',
  },
  {
    num: '02',
    title: 'AI 知识点讲解',
    desc: '默认你是零基础。先补前置概念，再推进核心内容。每次只讲一个最小知识点，确保真正理解。',
  },
  {
    num: '03',
    title: '智能练习测试',
    desc: '即时反馈、错题分析、针对性推荐。AI 根据你的薄弱点定制练习，精准巩固。',
  },
  {
    num: '04',
    title: '资料可读化',
    desc: 'PDF、图片、视频、扫描件——自动 OCR 识别与翻译，将复杂资料转为可学习的格式。',
  },
  {
    num: '05',
    title: '学习统计分析',
    desc: '知识点掌握度、学习时长、成就徽章。全面了解你的学习状态，激发持续动力。',
  },
  {
    num: '06',
    title: '知识图谱关联',
    desc: '可视化知识点之间的联系，智能推荐学习顺序，帮你构建完整的知识体系。',
  },
]

export default function Features() {
  return (
    <section id="features">
      <div className="features-header reveal">
        <div>
          <div className="section-label">核心功能</div>
          <h2 className="section-title">
            为真正的理解
            <br />
            而设计
          </h2>
        </div>
        <p className="section-desc">
          每个功能都围绕一个目标：帮你从不懂到懂，从懂到通。没有捷径，只有扎实的路。
        </p>
      </div>
      <div className="features-grid reveal">
        {features.map((feature, i) => (
          <div key={i} className="feature-card">
            <div className="feature-num">{feature.num}</div>
            <div className="feature-line" />
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
