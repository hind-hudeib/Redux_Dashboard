import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardPage from "./pages/DashboardPage";
import UsersTable from "./components/Tables/UsersTable";
import Header from "./components/Common/Header";
import Footer from "./components/Common/Footer";
import Sidebar from "./components/Common/Sidebar";
import PostsTable from "./components/Tables/PostsTable";

function App() {
  return (
    <>
      <Header />
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/users" element={<UsersTable />} />
        <Route path="/posts" element={<PostsTable/>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
