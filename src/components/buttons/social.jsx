import {
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";
import "../../styles/components/buttons/social.scss";
import { FaXTwitter } from "react-icons/fa6";

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
        href="https://www.instagram.com/levegetalien/"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiInstagramFill className="socialIcon" />
      </a>
      <a
        href="https://wa.me/573213120825"
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
        <FaXTwitter className="socialIcon" />
      </a>
    </section>
  );
};

export default SocialButtons;
