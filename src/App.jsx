import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyProvider } from "./Context/RsourcesContext";
import { AiProvider } from "./Context/AitoolsContext";
import { UserProvider } from "./Context/UserContext";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/loader";

// Loader Component for Suspense fallback
// const Loader = () => (
//   <div className="h-screen flex items-center justify-center text-zinc-500">
//     Loading...
//   </div>
// );

// Lazy-loaded Pages (Route-level splitting)
const Home = lazy(() => import("./pages/Home"));
const Login_signup = lazy(() => import("./pages/Login_signup"));
const Ai_Tools = lazy(() => import("./pages/AI_Tools"));
const AiToolDetails = lazy(() => import("./pages/AiToolDetails"));
const Resources = lazy(() => import("./pages/Resources"));
const ReasourcesAll = lazy(() => import("./pages/ReasourcesAll"));
const CategoryFull = lazy(() => import("./pages/CategoryFull"));
const Compare = lazy(() => import("./pages/Compare"));
const AddToles = lazy(() => import("./pages/AddToles"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const PrivacyPolicy = lazy(() => import("./pages/Privacy_Policy"));

const App = () => {
  return (
    <UserProvider>
      <MyProvider>
        <AiProvider>
          <BrowserRouter>
            <Navbar />

            <Suspense fallback={<Loader />}>
              <Routes>
                {/* 🌍 Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/:slug" element={<Login_signup />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />

                {/* 🔐 Protected Routes */}
                <Route
                  path="/Ai-Tools"
                  element={
                    // <ProtectedRoute>
                      <Ai_Tools />
                    // </ProtectedRoute>
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
                    // <ProtectedRoute>
                      <Resources />
                    // </ProtectedRoute>
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
                  path="/Privacy-Policy"
                  element={
                    <ProtectedRoute>
                      <PrivacyPolicy />
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
            </Suspense>
          </BrowserRouter>

          <ToastContainer />
        </AiProvider>
      </MyProvider>
    </UserProvider>
  );
};

export default App;
