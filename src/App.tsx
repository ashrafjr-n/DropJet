import { Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Dashboard from "@/pages/Dashboard"
import Upload from "@/pages/Upload"
import MyFiles from "@/pages/MyFiles"
import SharedFile from "@/pages/SharedFile"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/files" element={<MyFiles />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/share/:id" element={<SharedFile />} />
    </Routes>
  )
}

export default App