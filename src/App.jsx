import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { MyProvider } from "./Context/RsourcesContext";
import { AiProvider } from "./Context/AitoolsContext";
import { UserProvider } from "./Context/UserContext";

import Ai_Tools from "./pages/AI_Tools";
import AiToolDetails from "./pages/AiToolDetails";
import ReasourcesAll from "./pages/ReasourcesAll";
import Resources from "./pages/Resources";
import CategoryFull from "./pages/CategoryFull";
import Compare from "./pages/Compare";
import AddToles from "./pages/AddToles";
import Login_signup from "./pages/Login_signup";
import UserDashboard from "./pages/UserDashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Bookmarks from "./pages/Bookmarks";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <UserProvider>
      <MyProvider>
        <AiProvider>
          <BrowserRouter>
            <Navbar />

            <Routes>
              {/* 🌍 Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/:slug" element={<Login_signup />} />
        <Route path="/:slug" element={<Login_signup />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />

              {/* 🔐 Protected Routes */}
              <Route
                path="/Ai-Tools"
                element={
                  
                    <Ai_Tools />
                  
                }
              />

              <Route
                path="/Ai-tools/:id"
                element={
                  <ProtectedRoute>
                    <AiToolDetails />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/Resources"
                element={
                    <Resources />
                }
              />

              <Route
                path="/Resources/:slug"
                element={
                  <ProtectedRoute>
                    <ReasourcesAll />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/Category"
                element={
                  <ProtectedRoute>
                    <CategoryFull />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/Compare-tools"
                element={
                  <ProtectedRoute>
                    <Compare />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/Add-Tools"
                element={
                  <ProtectedRoute>
                    <AddToles />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/Deshboard"
                element={
                  <ProtectedRoute>
                    <UserDashboard />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/Bookmarks"
                element={
                  <ProtectedRoute>
                    <Bookmarks />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>

          <ToastContainer />
        </AiProvider>
      </MyProvider>
    </UserProvider>
  );
};

export default App;
