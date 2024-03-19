// REACT ROUTER DOM
import { Link } from "react-router-dom";

// REACT
import { useNavigate } from "react-router-dom";

// ICONS
import { FaArrowLeft } from "react-icons/fa";

const Practice = () => {
  const goBack = useNavigate();

  const styles = {
    background: "",
    title: "text-2xl text-[#95ADBE] text-center pt-8",
    button: "pt-8 pl-8",
    container: "m-8 p-6 shadow-lg rounded-lg grid grid-cols-3",
    practiceTitle:
      "text-md font-bold text-[#707070] col-start-1 col-span-2 mb-2",
    reps: "text-[#707070] text-md font-bold col-start-3 place-self-end mb-2",
    aims: "text-[#FCD056] font-bold col-start-1 col-span-3 mb-2",
    notesContainer: " col-start-1 col-span-3",
    notes: "font-bold text-[#707070] text-sm",
    notesDescription: "mb-2 text-sm",
  };

  return (
    <div id="practice">
      <div>
        <Link>
          <button onClick={() => goBack(-1)} className={styles.button}>
            <FaArrowLeft color="#707070" />
          </button>
        </Link>
      </div>
      <h1 className={styles.title}>Weekly Practice Goals</h1>

      {/* PRACTICE ITEM ONE */}
      <div className={styles.container}>
        <h2 className={styles.practiceTitle}>Bb Major - 2 octaves</h2>
        <p className={styles.reps}>10 reps</p>
        <h3 className={styles.aims}>Intonation</h3>
        {/* <p className={styles.bars}>BARS</p> */}
        <div className={styles.notesContainer}>
          <p className={styles.notes}>Notes</p>
          <p className={styles.notesDescription}>
            Bb major with correct fingers and good intonation. Repeat this five
            times.
          </p>
        </div>
      </div>

      {/* PRACTICE ITEM ONE */}
      <div className={styles.container}>
        <h2 className={styles.practiceTitle}>Exercises 20-25</h2>
        <p className={styles.reps}>n/a</p>
        <h3 className="font-bold text-[#9FDCE3] text-sm col-start-1 col-span-3 mb-2">
          Correct finger patterns
        </h3>
        {/* <p className={styles.bars}>BARS</p> */}
        <div className={styles.notesContainer}>
          <p className={styles.notes}>Notes</p>
          <p className={styles.notesDescription}>
            Use the metronome, work slowly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Practice;
