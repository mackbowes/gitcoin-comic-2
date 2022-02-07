import styles from "./VideoComponent.module.scss";

export default function VideoComponent(props) {
  return (
    <video controls className={styles.video}>
      <source
        src="https://gitcoin-comic-video.s3.us-west-1.amazonaws.com/Behind_The_Comic_1a_-_colour+BG.mp4"
        type="video/mp4"
      ></source>
    </video>
  );
}
