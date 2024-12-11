import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendListItem}>
      <img className={css.friendPhoto} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(isOnline && css.green, !isOnline && css.red)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
