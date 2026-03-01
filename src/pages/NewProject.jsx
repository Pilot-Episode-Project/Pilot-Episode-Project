import { useState } from "react";
import { style } from "../components/NewProjectComponents/styles";
import SectionBasics from "../components/NewProjectComponents/SectionBasics";
import SectionTags from "../components/NewProjectComponents/SectionTags";
import SectionTechStack from "../components/NewProjectComponents/SectionTechStack";

const STEPS = ["Basics", "Tags", "Tech Stack"];

export default function NewProject() {
  const [title, setTitle]             = useState("");
  const [desc, setDesc]               = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [customTags, setCustomTags]   = useState([]);
  const [selectedTech, setSelectedTech] = useState([]);
  const [previews, setPreviews]       = useState([]);
  const [toast, setToast]             = useState(false);

  const completedSections = [
    title.trim().length > 0 && desc.trim().length > 0,
    selectedTags.length > 0 || customTags.length > 0,
    selectedTech.length > 0,
  ];

  const handleSubmit = () => {
    setToast(true);
    setTimeout(() => setToast(false), 2800);
  };

  return (
    <div>
      <style>{style}</style>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Topbar */}
        <div className="np-topbar">
          <div className="np-topbar-left">
            <h1>New Project</h1>
            <p>Fill in the details to publish your project for collaborators.</p>
          </div>
          <div className="np-topbar-actions">
            <button className="btn-ghost">Discard</button>
            <button className="btn-primary" onClick={handleSubmit}>
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              Publish Project
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="np-steps">
          {STEPS.map((label, i) => (
            <div key={label} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
              <div className={`step${completedSections[i] ? " done" : ""}`}>
                <div className="step-dot">
                  {completedSections[i]
                    ? <svg viewBox="0 0 24 24" style={{ width: 10, height: 10, stroke: "#fff", fill: "none", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }}><polyline points="20 6 9 17 4 12"/></svg>
                    : i + 1}
                </div>
                <span>{label}</span>
              </div>
              {i < STEPS.length - 1 && <div className={`step-line${completedSections[i] ? " done" : ""}`} />}
            </div>
          ))}
        </div>

        {/* Body */}
        <div className="np-body">
          <div className="np-form-card">
            <SectionBasics
              title={title} setTitle={setTitle}
              desc={desc} setDesc={setDesc}
              previews={previews} setPreviews={setPreviews}
            />
            <SectionTags
              selectedTags={selectedTags} setSelectedTags={setSelectedTags}
              customTags={customTags} setCustomTags={setCustomTags}
            />
            <SectionTechStack
              selectedTech={selectedTech} setSelectedTech={setSelectedTech}
            />
          </div>
        </div>
      </div>

      {/* Toast */}
      <div className={`toast${toast ? " show" : ""}`}>
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
        Project published successfully!
      </div>
    </div>
  );
}
