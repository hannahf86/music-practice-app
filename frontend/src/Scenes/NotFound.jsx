import { NavLink } from "react-router-dom";

export default function NotFound() {
  const styles = {
    background: "bg-background w-full h-screen",
    title: "text-black font-bold text-6xl text-center pt-16",
  };

  return (
    <div className={styles.background}>
      <h2 className={styles.title}>Page not found!</h2>
      <div className="w-1/6 m-auto my-20"></div>

      <p className="text-black text-center text-2xl">
        Please click here to get back to the <NavLink to="/">Homepage</NavLink>
      </p>
    </div>
  );
}
