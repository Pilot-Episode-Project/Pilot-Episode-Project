import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import ProjectsList from "./pages/ProjectsList";
import ProjectSpecifics from "./pages/ProjectSpecifics";
import NewProject from "./pages/NewProject";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProjectsList />} />
          <Route path="project/:id" element={<ProjectSpecifics />} />
          <Route path="new" element={<NewProject />} />
          <Route path="profile/me" element={<ProfilePage />} />
          <Route path="profile/:id" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}