import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import FriendListItem from './FriendListItem'




export default function Friends({ friends }) {
    return (
      <ul className={css.list}>
        {friends.map(friend => {
          const { name, avatar, isOnline, id } = friend;
  
          return (
              <FriendListItem
                name={name}
                avatar={avatar}
                isOnline={isOnline}
                key={id}
              />
          );
        })}
      </ul>
    );
  }
  Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape),
  };