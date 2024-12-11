import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileCard}>
      <div className={css.profileInfo}>
        <div className={css.avatarWrapper}>
          <img
            className={css.avatar}
            src={image}
            alt="User avatar"
          />
        </div>
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Followers</span>
          <span className={css.statsValue}>{stats.followers.toLocaleString()}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Views</span>
          <span className={css.statsValue}>{stats.views.toLocaleString()}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Likes</span>
          <span className={css.statsValue}>{stats.likes.toLocaleString()}</span>
        </li>
      </ul>
    </div>
  );
}
