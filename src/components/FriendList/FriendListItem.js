import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";





export default function FriendItem({ avatar, name, isOnline }) {
    return (
      <>
        <li className={css.item}>
          <span
            className={`${css.status} ${isOnline ? css.online : css.notOnline}`}
          ></span>
          <img className={css.image} src={avatar} alt={name} width="48" />
          <p className={css.text}>{name}</p>
        </li>
      </>
    );
  }
  FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
  };