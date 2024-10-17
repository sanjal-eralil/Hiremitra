
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ResumeShortlist from "./ResumeShortlist/ResumeShortlist";
import Navbar from "./Navbar/Navbar";
import Wrapper from "./Wrapper/Wrapper";
import Wrapper2 from "./Wrapper2/Wrapper2";
function App() {
  const route = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Navbar />
                <Wrapper />
            </>
        ),
    },
    {
      path: '/interview',
      element: (
          <>
              <Navbar />
              <Wrapper2 />
          </>
      ),
  }
]);
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
