import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function NavLinkAdaptativo({ section, label, activeSection }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const href = isHome ? `#${section}` : `/#${section}`;

  return (
    <Nav.Link
      href={href}
      className={activeSection === section ? "active" : ""}
    >
      {label}
    </Nav.Link>
  );
}
export default NavLinkAdaptativo