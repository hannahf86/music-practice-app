// REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";

// ICONS
import { FaArrowLeft } from "react-icons/fa";

const PracticeItem = () => {
  const goBack = useNavigate();

  const styles = {
    background: "",
    title: "text-2xl text-[#95ADBE] text-center pt-8",
    button: "pt-8 pl-8",
  };

  return (
    <div id="practiceItem">
      <div>
        <Link>
          <button onClick={() => goBack(-1)} className={styles.button}>
            <FaArrowLeft color="#707070" />
          </button>
        </Link>
      </div>

      <div>ITEM ONE</div>
    </div>
  );
};

export default PracticeItem;
