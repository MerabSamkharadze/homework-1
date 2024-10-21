import "./UnAuthFooter.css";

export default function UnAuthFooter() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <ul className="Footer-links">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>

        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
