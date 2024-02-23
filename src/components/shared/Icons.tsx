import {
  faGoogle,
  faLinkedin,
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faLocationDot,
  faPerson,
  faPersonShelter,
  faRightFromBracket,
  faStar,
  faCar,
  faPenToSquare,
  faTrash,
  faArrowRight,
  faClipboard,
  faArrowLeft,
  faMagnifyingGlass,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const homeIcon = <FontAwesomeIcon icon={faHouse} />;
export const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} />;
export const onlineIcon = <FontAwesomeIcon icon={faLocationDot} />;
export const driverIcon = <FontAwesomeIcon icon={faPersonShelter} />;
export const passengerIcon = <FontAwesomeIcon icon={faPerson} />;
export const ratingIcon = <FontAwesomeIcon icon={faStar} />;
export const rideIcon = <FontAwesomeIcon icon={faCar} />;
export const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;
export const deleteIcon = <FontAwesomeIcon icon={faTrash} />;
export const explore = <FontAwesomeIcon icon={faArrowRight} />;
export const info = <FontAwesomeIcon icon={faClipboard} />;
export const leftArrow = <FontAwesomeIcon icon={faArrowLeft} />;
export const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
export const notificationIcon = <FontAwesomeIcon icon={faBell} size="lg" />;
export const fbIcon = (
  <FontAwesomeIcon icon={faSquareFacebook} size="2xl" color="white" />
);
export const instaIcon = (
  <FontAwesomeIcon icon={faSquareInstagram} size="2xl" color="white" />
);
export const linkdinIcon = (
  <FontAwesomeIcon icon={faLinkedin} size="2xl" color="white" />
);
export const googleIcon = <FontAwesomeIcon icon={faGoogle} />;
