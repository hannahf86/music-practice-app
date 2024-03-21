// REACT
import { useEffect } from "react";
import { usePracticeContext } from "../Hooks/usePracticeContext";

// REACT ROUTER DOM
import { Link } from "react-router-dom";

// ICONS
import { FaTrophy } from "react-icons/fa";

const Dashboard = () => {
  const [practices, dispatch] = usePracticeContext();

  useEffect(() => {
    const fetchPractice = async () => {
      const response = await fetchPractice("http://localhost:3000/api/routes");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_PRACTICE", payload: json });
      }
    };

    fetchPractice();
  }, []);

  const styles = {
    background: "",
    welcomeContainer: "flex justify-between items-center px-8 pt-8",
    title: "text-2xl text-titleBlue text-left font-bold",
    trophyContainer:
      "flex flex-col justify-center items-center text-accent rounded-lg px-4 pt-3 pb-2 shadow-md shadow-lightGrey",
    subtitle: "text-lg text-titleBlue text-left font-bold",
    goalContainer: "shadow-md shadow-lightGrey rounded-xl mx-8 my-12 p-8 ",
    weeklyContainer: "shadow-md shadow-lightGrey rounded-xl mx-8 my-12 p-8 ",
    itemTitle: "text-md text-titleBlue text-left ",
    itemContainer: "shadow-md rounded-lg px-4 py-4 mt-4",
  };

  return (
    <div id="/">
      <div className={styles.welcomeContainer}>
        <h1 className={styles.title}>
          Welcome back
          <br />
          Steve!
        </h1>
        <div className={styles.trophyContainer}>
          <FaTrophy size={35} />
          <p className="text-accent text-center text-sm pt-2">
            Progress
            <br />
            Tracker
          </p>
        </div>
      </div>

      <div className={styles.goalContainer}>
        <h2 className={styles.subtitle}>Long Term Goal</h2>
        <div>
          <p className="text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
            ratione.
          </p>
        </div>
      </div>

      {/* PRACTICE ITEMS */}
      {practices &&
        practices.map(() => (
          <>
            <div className={styles.weeklyContainer}>
              <Link to="practice">
                <h2 className={styles.subtitle}>Weekly Practice Targets</h2>
              </Link>
              <div>
                <div className={styles.itemContainer}>
                  <Link to="practiceItem">
                    <h3 className={styles.itemTitle}>ITEM ONE</h3>
                  </Link>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, dolorem.
                  </p>
                </div>

                <div className={styles.itemContainer}>
                  <Link to="practiceItem">
                    <h3 className={styles.itemTitle}>ITEM TWO</h3>{" "}
                  </Link>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, dolorem.
                  </p>
                </div>

                <div className={styles.itemContainer}>
                  <Link to="practiceItem">
                    <h3 className={styles.itemTitle}>ITEM THREE</h3>
                  </Link>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, dolorem.
                  </p>
                </div>
              </div>
              <div className="mb-30"></div>
            </div>
          </>
        ))}
    </div>
  );
};

export default Dashboard;
