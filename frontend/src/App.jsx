// REACT ROUTER DOM
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// LAYOUTS
import Nav from "./Components/Nav";

// SCENES
import Dashboard from "./Scenes/Dashboard";
import Practice from "./Scenes/Practice";
import NotFound from "./Scenes/NotFound";
import PracticeItem from "./Scenes/PracticeItems/PracticeItem";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route index element={<Dashboard />} />
      <Route path="practice" element={<Practice />} />
      <Route path="practiceItem" element={<PracticeItem />} />
      {/* ERROR HANDLING */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
