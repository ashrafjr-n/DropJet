import { Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Register from "@/pages/Register"
import Dashboard from "@/pages/Dashboard"
import Upload from "@/pages/Upload"
import MyFiles from "@/pages/MyFiles"
import SharedFile from "@/pages/SharedFile"
import SharedLinks from "@/pages/SharedLinks"
import Analytics from "@/pages/Analytics"
import Settings from "@/pages/Settings"
import NotFound from "@/pages/NotFound"
import ExpiredFile from "@/pages/ExpiredFile"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/files" element={<MyFiles />} />
      <Route path="/dashboard/links" element={<SharedLinks />} />
      <Route path="/dashboard/analytics" element={<Analytics />} />
      <Route path="/dashboard/settings" element={<Settings />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/share/:id" element={<SharedFile />} />
      <Route path="/expired/:id" element={<ExpiredFile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App