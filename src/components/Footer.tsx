export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <a className="wordmark" href="#home">
          W<span>B</span>
          <i>.</i>
        </a>
        <p>Consistency builds mastery.</p>
        <span>© {new Date().getFullYear()} Wilson Barrera</span>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  );
}
