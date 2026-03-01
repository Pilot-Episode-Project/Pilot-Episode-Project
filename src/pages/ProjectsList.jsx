import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectsListComponents/ProjectCard";
import { useProjects } from "../hooks/useProjects";
import { style, TAG_FILTERS } from "../components/ProjectsListComponents/styles";

export default function ProjectsList() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const { projects, loading, error } = useProjects();

  const filtered = projects.filter(p => {
    const tagMatch = activeFilter === "All" || p.tags.includes(activeFilter);
    const q = search.toLowerCase().trim();
    const textMatch = !q || p.title.toLowerCase().includes(q) || p.tags.join(" ").toLowerCase().includes(q);
    return tagMatch && textMatch;
  });

  if (loading) return <div className="empty">Loading...</div>;
  if (error) return <div className="empty">Something went wrong.</div>;

  return (
    <div className="pl-root">
      <style>{style}</style>
      <div className="main">
        {/* Topbar */}
        <div className="topbar">
          <div className="topbar-left">
            <h1>Projects</h1>
            <p>Browse open student projects and find your place.</p>
          </div>
          <div className="search-wrap">
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              className="search-input"
              type="text"
              placeholder="Search projects…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="filter-row">
          {TAG_FILTERS.map(f => (
            <button
              key={f}
              className={`filter-pill${activeFilter === f ? " active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="result-count"><span>{filtered.length}</span> projects</p>

        {/* Cards */}
        <div className="cards-col">
          {filtered.length === 0 ? (
            <div className="empty">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <span>No projects match your search.</span>
            </div>
          ) : (
            filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} animDelay={0.03 + i * 0.04} />
            ))
          )}
        </div>
      </div>

      {/* FAB */}
      <button className="fab" onClick={() => navigate("/new")}>
        <svg viewBox="0 0 24 24">
          <line x1="12" y1="5" x2="12" y2="19"/>
          <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        <span className="fab-tooltip">New Project</span>
      </button>
    </div>
  );
}