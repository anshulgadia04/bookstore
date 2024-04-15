import Home from "./home/Home";
import { Routes, Route , Navigate} from "react-router-dom";
import Courses from "./course/Courses";
import SignUp from "./components/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Admin from '././admin/Admin'
import AddBook from "./admin/AddBook";
import ManageBooks from "./admin/ManageBooks";
import RemoveBook from "./admin/RemoveBook";
import Profile from "./components/Profile";
import MyOrders from "./components/MyOrders";
function App() {
  const [authUser , setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to='/'/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path='my-orders' element={<MyOrders/>}/>

          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/managebooks" element={<ManageBooks/>}/>
          <Route path="/admin/managebooks/addbook" element={<AddBook/>}/>
          <Route path="/admin/managebooks/remove-edit-books" element={<RemoveBook/>}/>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
