import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AdminHome from "./components/Admin/AdminHome";
import AddBlog from "./components/Admin/AddBlog";
import AuthProvider from "./components/contexts/AuthProvider/AuthProvider";
import Home from "./components/Pages/Home/Home/Home";
import Login from "./components/Pages/Login/Login/Login";
import Register from "./components/Pages/Login/Register/Register";
import AddNewBlog from "./components/Pages/Dashboard/AddNewBlog";
import MakeAdmin from "./components/Pages/Dashboard/MakeAdmin";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import PrivateRoute from "./components/routes/PrivateRoute";
import AllBlogs from "./components/Pages/Dashboard/AllBlogs";
import UpdateBlog from "./components/Pages/Dashboard/UpdateBlog";
import BlogDetails from "./components/Pages/Home/BlogDetails/BlogDetails";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="/blogs/:id" element={<PrivateRoute><BlogDetails /> </PrivateRoute>}></Route>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /> </PrivateRoute>}>

              <Route
                path="/dashboard/addNewBlog"
                element={<AddNewBlog />}
              ></Route>
              <Route
                path="/dashboard/makeAdmin"
                element={<MakeAdmin></MakeAdmin>}
              ></Route>

<Route
                path="/dashboard/allBlogs"
                element={<AllBlogs></AllBlogs>}
              ></Route>
            <Route
                path="/dashboard/update/:id"
                element={<UpdateBlog></UpdateBlog>}
              ></Route>

            </Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
