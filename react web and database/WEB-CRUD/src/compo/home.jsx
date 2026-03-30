import { Link } from "react-router-dom";


function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to My App 🚀</h1>
      <p>This is the home page of your application.</p>

      <div style={styles.links}>
        <Link to="/dashboard" style={styles.link}>
          Go to Dashboard
        </Link>

        <Link to="/profile" style={styles.link}>
          Go to Profile
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  links: {
    marginTop: "20px",
  },
  link: {
    display: "block",
    margin: "10px",
    color: "blue",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Home;