export default function Nav() {
  return (
    <nav className="nav-bar">
      <a className="nav-logo" href="#">
        <div className="nav-logo-mark"></div>
        <span className="nav-logo-text">KnowledgeFlow</span>
      </a>
      <ul className="nav-links">
        <li><a className="nav-link" href="#features">功能</a></li>
        <li><a className="nav-link" href="#workflow">流程</a></li>
        <li><a className="nav-link" href="#users">用户</a></li>
        <li><a className="nav-link" href="#start">开始</a></li>
      </ul>
    </nav>
  )
}
