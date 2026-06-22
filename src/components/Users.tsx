const users = [
  { emoji: '👨‍🎓', title: '学生群体', desc: '从小学到大学，应对考试与学业挑战，建立扎实的知识基础' },
  { emoji: '💼', title: '职场人士', desc: '利用碎片时间学习新技能，提升职业竞争力' },
  { emoji: '📖', title: '终身学习者', desc: '对知识有持续追求，享受学习本身的乐趣' },
  { emoji: '👩‍🏫', title: '教育工作者', desc: 'AI 辅助教学，提升教学效果，释放更多创造力' },
]

export default function Users() {
  return (
    <section id="users" className="py-[100px]">
      <div className="reveal">
        <div className="section-label">目标用户</div>
        <h2 className="section-title">
          每个认真学习的
          <br />
          人都值得被认真对待
        </h2>
      </div>
      <div className="users-grid reveal grid grid-cols-4 gap-6 mt-14">
        {users.map((user, i) => (
          <div
            key={i}
            className="user-card bg-bg-surface border border-[rgba(212,168,83,0.12)] rounded-[20px] p-9 px-7 text-center transition-all duration-400 relative overflow-hidden hover:-translate-y-1.5 group"
          >
            <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold-primary scale-x-0 transition-transform duration-400 group-hover:scale-x-100" />
            <span className="user-emoji text-[2.4rem] mb-5 block">{user.emoji}</span>
            <h4 className="font-display text-[1.1rem] font-bold mb-2.5 text-text-primary">
              {user.title}
            </h4>
            <p className="text-text-secondary text-[0.85rem] leading-[1.6]">
              {user.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
