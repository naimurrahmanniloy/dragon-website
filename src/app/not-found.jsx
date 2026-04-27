import Link from "next/link";
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#f8fafc", // Light gray background
    fontFamily: "sans-serif",
  },
  content: {
    padding: "20px",
  },
  errorCode: {
    fontSize: "8rem",
    margin: 0,
    color: "#0f172a", // Dark blue/black
    fontWeight: "900",
  },
  title: {
    fontSize: "1.5rem",
    color: "#334155",
    marginBottom: "10px",
  },
  text: {
    color: "#64748b",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "#3b82f6", // Blue
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "opacity 0.2s",
  },
};
const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.errorCode}>404</h1>
        <h2 style={styles.title}>Lost in the clouds?</h2>
        <p style={styles.text}>We can’t find the page you’re looking for.</p>

        <Link href="/" style={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
