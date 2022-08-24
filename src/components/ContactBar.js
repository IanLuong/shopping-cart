import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function ContactBar() {
  return (
    <div className="contact-bar">
      <a
        href="https://www.linkedin.com/in/ianluong/"
        target="_blank"
        className="contact-bar-item"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="4x"/>
      </a>
      <a
        href="https://www.instagram.com/ian__luong/"
        target="_blank"
        className="contact-bar-item"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="4x"/>
      </a>
      <a
        href="https://github.com/IanLuong"
        target="_blank"
        className="contact-bar-item"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="4x"/>
      </a>
      <a
        href="mailto:ianluongcodes@gmail.com"
        target="_blank"
        className="contact-bar-item"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} size="4x"/>
      </a>
    </div>
  )
}
