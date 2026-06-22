export default function Footer() {
  return (
    <footer className="border-t border-[rgba(212,168,83,0.12)] py-10">
      <div className="footer-inner flex justify-between items-center">
        <span className="footer-text text-text-muted text-[0.82rem]">
          KnowledgeFlow — 让知识轻松流入你的脑海
        </span>
        <ul className="footer-links flex gap-6 list-none">
          <li>
            <a href="#" className="text-text-muted no-underline text-[0.82rem] transition-colors hover:text-gold-light">
              关于我们
            </a>
          </li>
          <li>
            <a href="#" className="text-text-muted no-underline text-[0.82rem] transition-colors hover:text-gold-light">
              使用条款
            </a>
          </li>
          <li>
            <a href="#" className="text-text-muted no-underline text-[0.82rem] transition-colors hover:text-gold-light">
              联系方式
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
