export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-7 border-b border-[rgba(212,168,83,0.12)]">
      <a className="nav-logo flex items-center gap-3.5 no-underline" href="#">
        <div className="nav-logo-mark w-[42px] h-[42px] border-2 border-gold-primary rounded-xl flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute w-5 h-5 bg-gold-primary rounded-full"
            style={{ opacity: '0.3', animation: 'logoPulse 3s ease-in-out infinite' }}
          />
        </div>
        <span className="font-display text-[1.3rem] font-bold text-text-primary tracking-tight">
          KnowledgeFlow
        </span>
      </a>
      <ul className="nav-links flex gap-9 list-none">
        <li>
          <a
            href="#features"
            className="text-text-secondary no-underline text-[0.88rem] font-medium tracking-wide uppercase transition-colors hover:text-gold-light relative"
          >
            功能
          </a>
        </li>
        <li>
          <a
            href="#workflow"
            className="text-text-secondary no-underline text-[0.88rem] font-medium tracking-wide uppercase transition-colors hover:text-gold-light relative"
          >
            流程
          </a>
        </li>
        <li>
          <a
            href="#users"
            className="text-text-secondary no-underline text-[0.88rem] font-medium tracking-wide uppercase transition-colors hover:text-gold-light relative"
          >
            用户
          </a>
        </li>
        <li>
          <a
            href="#start"
            className="text-text-secondary no-underline text-[0.88rem] font-medium tracking-wide uppercase transition-colors hover:text-gold-light relative"
          >
            开始
          </a>
        </li>
      </ul>
    </nav>
  )
}
