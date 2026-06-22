const users = [
  { emoji: '👨‍🎓', title: '学生群体', desc: '从小学到大学，应对考试与学业挑战，建立扎实的知识基础' },
  { emoji: '💼', title: '职场人士', desc: '利用碎片时间学习新技能，提升职业竞争力' },
  { emoji: '📖', title: '终身学习者', desc: '对知识有持续追求，享受学习本身的乐趣' },
  { emoji: '👩‍🏫', title: '教育工作者', desc: 'AI 辅助教学，提升教学效果，释放更多创造力' },
]

export default function Users() {
  return (
    <section id="users">
      <div className="reveal">
        <div className="section-label">目标用户</div>
        <h2 className="section-title">
          每个认真学习的
          <br />
          人都值得被认真对待
        </h2>
      </div>
      <div className="users-grid reveal">
        {users.map((user, i) => (
          <div key={i} className="user-card">
            <span className="user-emoji">{user.emoji}</span>
            <h4>{user.title}</h4>
            <p>{user.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
