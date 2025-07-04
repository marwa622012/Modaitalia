import { useState } from "react";
import "./Description.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function Description({ title = "Description", children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion-desc">
  <div
    className={`accordion-header ${open ? "active" : ""}`}
    onClick={() => setOpen(!open)}
  >
    <span>{title}</span>
    <span className="arrows">
      {open ? (
        <FontAwesomeIcon style={{ color: 'white' }} icon={faChevronUp} />
      ) : (
        <FontAwesomeIcon style={{ color: 'white' }} icon={faChevronDown} />
      )}
    </span>
  </div>
  {open && (
    <div className="accordion-body">
      {children}
    </div>
  )}
</div>

  );
}
