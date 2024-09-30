import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AllSoul from "./pages/AllSoul";
import AddSoul from "./pages/AddSoul";
import RecentSoul from "./pages/RecentSoul";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/all-soul" element={<AllSoul />} />
          <Route path="/add-soul" element={<AddSoul />} />
          <Route path="/recent-soul" element={<RecentSoul />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
