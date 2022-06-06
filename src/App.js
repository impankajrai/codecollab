import { BrowserRouter, Routes,Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { Toaster } from "react-hot-toast";
import CodeEditorPage from "./Pages/CodeEditorPage";
import './app.css'

function App() {
  return (
   <BrowserRouter>
   <div><Toaster position="top-right"/></div>
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/editor/:id" element={<CodeEditorPage/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
