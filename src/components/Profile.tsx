import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/44369818?s=460&u=10a64b88664fb14f5f71cc82e84738da6901aca6&v=4"
        alt=""
      />
      <div>
        <strong>Gustavo Aurélio</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
