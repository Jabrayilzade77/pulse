import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Add from "./pages/Add";
import Basket from "./pages/Basket";
import WishList from "./pages/WishList";
import About from "./pages/About";
import Detail from "./pages/Detail";
import MainProvider from "./context/MainProvider";
import WishListProvider from "./context/WishListProvider";

function App() {
  return (
    <>
      <MainProvider>
        <WishListProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="admin" element={<Admin />} />
              <Route path="add" element={<Add />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="basket" element={<Basket />} />
              <Route path="wishList" element={<WishList />} />
            </Route>
          </Routes>
        </BrowserRouter>
        </WishListProvider>
      </MainProvider>
    </>
  );
}

export default App;
