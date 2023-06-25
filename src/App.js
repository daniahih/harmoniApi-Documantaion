import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/Root";
import ApiDocumentation from "./components/ApiDocumentation";
import Songs from "./components/Songs";
import Artists from "./components/Artists";
import Translation from "./components/Translation";
import Search from "./components/Search";
import CoverArt from "./components/CoverArt";
import Lyrics from "./components/Lyrics";
import Scrapping from "./components/Scrapping";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <ApiDocumentation /> },
      {
        path: "/songs",
        element: <Songs />,
      },
      {
        path: "/artists",
        element: <Artists />,
      },
      {
        path: "/translation",
        element: <Translation />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/coverArt",
        element: <CoverArt />,
      },
      {
        path: "/lyrics",
        element: <Lyrics />,
      },
      {
        path: "/scrapping",
        element: <Scrapping />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
