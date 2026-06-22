export default function Hero() {
  return (
    <section className="hero py-[120px] pb-[100px] relative">
      <div
        className="hero-eyebrow text-[0.78rem] font-medium tracking-[0.2em] uppercase text-gold-primary mb-7 flex items-center gap-3"
        style={{ opacity: 0, animation: 'fadeSlideUp 0.8s 0.2s forwards' }}
      >
        <span className="w-10 h-px bg-gold-primary inline-block" />
        AI 驱动的学习平台
      </div>
      <h1
        className="font-display font-black leading-[1.05] tracking-tight text-text-primary mb-8 max-w-[800px]"
        style={{
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          opacity: 0,
          animation: 'fadeSlideUp 0.8s 0.4s forwards',
        }}
      >
        让知识
        <br />
        <em className="italic text-gold-primary relative">
          轻松流入
          <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-gold-primary opacity-40" />
        </em>
        <br />
        你的脑海
      </h1>
      <p
        className="text-[1.15rem] leading-[1.7] text-text-secondary max-w-[520px] mb-12"
        style={{ opacity: 0, animation: 'fadeSlideUp 0.8s 0.6s forwards' }}
      >
        通过智能提示词工程与知识图谱技术，从零开始逐点突破。不跳步、不假设，每一步都为你而走。
      </p>
      <div
        className="hero-actions flex gap-5 items-center"
        style={{ opacity: 0, animation: 'fadeSlideUp 0.8s 0.8s forwards' }}
      >
        <button className="btn-primary">
          开始学习 <span>→</span>
        </button>
        <a className="btn-ghost" href="#features">
          了解更多
        </a>
      </div>

      {/* Hero decorative element */}
      <div
        className="hero-visual absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px]"
        style={{ opacity: 0, animation: 'fadeIn 1.2s 1s forwards' }}
      >
        <div
          className="hero-ring absolute rounded-full border border-[rgba(212,168,83,0.12)]"
          style={{ inset: 0, animation: 'ringRotate 30s linear infinite' }}
        >
          <div className="absolute w-2 h-2 bg-gold-primary rounded-full top-1/2 -left-1" />
        </div>
        <div
          className="hero-ring absolute rounded-full border border-[rgba(45,212,191,0.1)]"
          style={{ inset: '40px', animation: 'ringRotate 25s linear infinite reverse' }}
        >
          <div className="absolute w-2 h-2 bg-gold-primary rounded-full top-1/2 -left-1" />
        </div>
        <div
          className="hero-ring absolute rounded-full border border-[rgba(212,168,83,0.12)]"
          style={{ inset: '80px', animation: 'ringRotate 20s linear infinite' }}
        />
        <div
          className="hero-ring absolute rounded-full border border-[rgba(45,212,191,0.08)]"
          style={{ inset: '120px', animation: 'ringRotate 35s linear infinite reverse' }}
        />
      </div>
    </section>
  )
}
