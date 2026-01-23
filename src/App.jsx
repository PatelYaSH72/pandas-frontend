import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { MyProvider } from "./Context/RsourcesContext";
import { AiProvider } from "./Context/AitoolsContext";
import Ai_Tools from "./pages/AI_Tools";
import AiToolDetails from "./pages/AiToolDetails";
import ReasourcesAll from "./pages/ReasourcesAll";
import Resources from "./pages/Resources";
import CategoryFull from "./pages/CategoryFull";
import Compare from "./pages/Compare";
import AddToles from "./pages/AddToles";
import { UserProvider } from "./Context/UserContext";
import Login_signup from "./pages/Login_signup";
import UserDashboard from "./pages/UserDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bookmarks from "./pages/Bookmarks";

const App = () => {
  return (
    <UserProvider>
    <MyProvider>
      <AiProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ai-Tools" element={<Ai_Tools />} />
        <Route path="/Ai-tools/:id" element={<AiToolDetails />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Resources/:slug" element={<ReasourcesAll />} />
        <Route path="/Category" element={<CategoryFull />} />
        <Route path="/Compare-tools" element={<Compare />} />
        <Route path="/Add-Tools" element={<AddToles />} />
        <Route path="/:slug" element={<Login_signup />} />
        <Route path="/:slug" element={<Login_signup />} />
        <Route path="/Deshboard" element={<UserDashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Bookmarks" element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
    </AiProvider>
    </MyProvider>
    </UserProvider>
  );
};

export default App;
