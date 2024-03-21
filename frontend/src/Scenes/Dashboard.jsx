// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import {} from "react-icons/fa";

const Dashboard = () => {
  const styles = {
    background: "",
    title: "text-2xl text-[#95ADBE] text-center pt-8",
    subtitle: "text-lg text-[#95ADBE] text-left",
    goalContainer: "drop-shadow-md p-8",
    weeklyContainer: "p-8",
    itemTitle: "text-md text-[#95ADBE] text-left",
    itemContainer: "drop-shadow-md p-4",
  };

  return (
    <div id="/">
      <div>
        <h1 className={styles.title}>Welcome back</h1>
      </div>

      <div className={styles.goalContainer}>
        <h2 className={styles.subtitle}>Long Term Goal</h2>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            ratione.
          </p>
        </div>
      </div>

      <div className={styles.weeklyContainer}>
        <h2 className={styles.subtitle}>Weekly Practice Targets</h2>
        <div>
          <div className={styles.itemContainer}>
            <Link to="/" element={""}>
              <h3 className={styles.itemTitle}>ITEM ONE</h3>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              dolorem.
            </p>
          </div>

          <div className={styles.itemContainer}>
            <Link to="/" element={""}>
              <h3 className={styles.itemTitle}>ITEM TWO</h3>{" "}
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              dolorem.
            </p>
          </div>

          <div className={styles.itemContainer}>
            <Link to="/" element={""}>
              <h3 className={styles.itemTitle}>ITEM THREE</h3>
            </Link>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
              dolorem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
