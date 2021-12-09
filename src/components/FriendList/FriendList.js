import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import FriendListItem from './FriendListItem'




export default function Friends({ friends }) {
  const element = friends.map(friend => {
    const { name, avatar, isOnline, id } = friend;

    return (
        <FriendListItem
          name={name}
          avatar={avatar}
          isOnline={isOnline}
          key={id}
        />
    );
  })
    return (  
      <ul className={css.list}>
        {element}
      </ul>
    );
  }
  Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })),
  };