import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Solution from "./pages/Solution";
import Pricing from "./pages/Pricing";
import Enterprise from "./pages/Enterprise";
import Learn from "./pages/Learn";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="solution" element={<Solution />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="enterprise" element={<Enterprise />} />
            <Route path="learn" element={<Learn />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: {
            duration: 4000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            padding: "16px 24px",
            maxWidth: "500px",
            backgroundColor: "blue-100",
          },
        }}
        containerStyle={{ margin: "8px" }}
      />
    </>
  );
};

export default App;
