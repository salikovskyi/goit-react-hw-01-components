import PropTypes from 'prop-types';
import css from './Profile.module.css'


export default function Profile({
    name,
    tag,
    location,
    avatar,
    stats,
  }) {
      return (
    <div className={css.profile}>
    <div className={css.descr}>
    <img
      src={avatar}
      alt="User avatar"
      className={css.avatar}
    />
    <p className={`${css.descr_item} ${css.name}`}>{name}</p>
    <p className={css.descr_item}>@{tag}</p>
    <p className={css.descr_item}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.stats_item}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.stats_item}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.stats_item}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
      );
  }


  Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  };