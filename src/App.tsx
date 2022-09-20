import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const Nav = lazy(() => import("./components/Nav"));
const AccountWallet = lazy(() => import("./page/AccountWallet"));
const BalanceWallet = lazy(() => import("./page/BalanceWallte"));
const CreateBond = lazy(() => import("./page/CreateBond"));
const ListBond = lazy(() => import("./page/ListBond"));
function App() {
  return (
    <>
      {/* <Nav></Nav> */}
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Nav />}>
            <Route path="/" element={<AccountWallet />}></Route>
            <Route path="/balance-wallet" element={<BalanceWallet />}></Route>
            <Route path="/create-bond" element={<CreateBond />}></Route>
            <Route path="/list-bond" element={<ListBond />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
