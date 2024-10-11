import {
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
  RiTwitterFill,
} from "react-icons/ri";
import "../../styles/components/buttons/social.scss";

const SocialButtons = ({ social }) => {
  return (
    <section className={social}>
      <a
        href="https://www.facebook.com"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiFacebookFill className="socialIcon" />
      </a>
      <a
        href="https://www.instagram.com"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiInstagramFill className="socialIcon" />
      </a>
      <a
        href="https://wa.me/1234567890"
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiWhatsappFill className="socialIcon" />
      </a>
      <a
        href="https://twitter.com"
        aria-label="Twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTwitterFill className="socialIcon" />
      </a>
    </section>
  );
};

export default SocialButtons;
