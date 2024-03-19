// REACT ROUTER DOM
import { NavLink, Outlet } from "react-router-dom";

// ICONS
import { HiHome } from "react-icons/hi";
import { HiCog6Tooth } from "react-icons/hi2";
import { PiMetronomeFill } from "react-icons/pi";
import { FaCalendar } from "react-icons/fa";

const Nav = () => {
  const styles = {
    mobileContainer: "lg:hidden",
    background:
      "flex justify-center justify-evenly items-center fixed bottom-0 left-0 w-full bg-[#3C2A4D] z-40",
    icon: "text-neutral-200 active:text-[#95ADBE] active:scale-110 my-6 mx-6",
  };

  const desktopStyles = {
    desktopContainer: "hidden md:hidden sm:hidden lg:block ",
    background:
      "fixed w-full flex justify-between items-center bg-[#3C2A4D] px-40 z-40 shadow-lg shadow-slate-600",
    container: "flex text-neutral-200 xl:my-12 lg:my-8",
    text: "xl:text-xl lg:text-md tracking-widest hover:text-[#95ADBE] hover:scale-110 cursor-pointer",
    button: "bg-accent px-6 py-2 rounded-md",
  };

  return (
    <>
      {/* MOBILE & TABLET NAV */}
      <header id="mobile-nav" className={styles.mobileContainer}>
        <div className={styles.background}>
          <NavLink to="/">
            <HiHome size={28} className={styles.icon} />
          </NavLink>

          <NavLink to="schedule">
            <FaCalendar size={25} className={styles.icon} />
          </NavLink>

          <NavLink to="practice">
            <PiMetronomeFill size={28} className={styles.icon} />
          </NavLink>

          <NavLink to="settings">
            <HiCog6Tooth size={28} className={styles.icon} />
          </NavLink>
        </div>
      </header>

      {/* TO ADD O-AUTH SETTINGS LOGIN */}

      {/* DESKTOP NAV*/}
      <header className={desktopStyles.desktopContainer}>
        <div id="desktop-nav" className={desktopStyles.background}>
          <div className={desktopStyles.container}>
            <NavLink to="/">
              <h2 className={desktopStyles.text}>HOME</h2>
            </NavLink>
          </div>

          <div className={desktopStyles.container}>
            <NavLink to="schedule">
              <h2 className={desktopStyles.text}>SCHEDULE</h2>
            </NavLink>
          </div>

          <div className={desktopStyles.container}>
            <NavLink to="practice">
              <button className={desktopStyles.button}>PRACTICE</button>
            </NavLink>
          </div>

          <div className={desktopStyles.container}>
            <NavLink to="settings">
              <h2 className={desktopStyles.text}>SETTINGS</h2>
            </NavLink>
          </div>
        </div>
      </header>

      {/* DO NOT FORGET OUTLET!! */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Nav;
