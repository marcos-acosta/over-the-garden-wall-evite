import styles from "./../app.module.css";

interface ShowWhenReadyProps {
  loading?: boolean;
  error?: boolean;
  errorMessage: string;
  children: React.ReactNode;
}

export default function ShowWhenReady(props: ShowWhenReadyProps) {
  return props.loading ? (
    <div className={styles.loading}>loading...</div>
  ) : props.error ? (
    <div className={styles.errorText}>{props.errorMessage}</div>
  ) : (
    props.children
  );
}
