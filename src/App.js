import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import CreateProject from "./components/projects/CreateProject";
import ProjectDetails from "./components/projects/ProjectDetails";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        index
                        element={<Dashboard />}
                    />
                    <Route
                        path="/project/:id"
                        element={<ProjectDetails />}
                    />
                    <Route
                        path="/signin"
                        element={<SignIn />}
                    />
                    <Route
                        path="/signup"
                        element={<SignUp />}
                    />
                    <Route
                        path="/create"
                        element={<CreateProject />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
