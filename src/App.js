import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./components/Layouts/Footer";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layouts/Header";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
