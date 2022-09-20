import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

const Nav = lazy(() => import("./components/Nav"));
const AccountWallet = lazy(() => import("./page/AccountWallet"));
const CreateBond = lazy(() => import("./page/CreateBond"));
const ListBond = lazy(() => import("./page/ListBond"));
function App() {
  return (
    <div className="App-header">
      {/* <Nav></Nav> */}
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Nav />}>
            <Route path="/" element={<AccountWallet />}></Route>
            <Route path="/create-bond" element={<CreateBond />}></Route>
            <Route path="/list-bond" element={<ListBond />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
