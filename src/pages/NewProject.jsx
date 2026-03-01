import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🚨 페이지 이동을 위해 추가
import { supabase } from "../supabaseClient";
import { style } from "../components/NewProjectComponents/styles";
import SectionBasics from "../components/NewProjectComponents/SectionBasics";
import SectionTags from "../components/NewProjectComponents/SectionTags";
import SectionTechStack from "../components/NewProjectComponents/SectionTechStack";

const STEPS = ["Basics", "Tags", "Tech Stack"];

export default function NewProject() {
  const navigate = useNavigate(); // 🚨 네비게이트 함수 초기화

  const [title, setTitle]               = useState("");
  const [desc, setDesc]                 = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [customTags, setCustomTags]     = useState([]);
  const [selectedTech, setSelectedTech] = useState([]);
  const [previews, setPreviews]         = useState([]);
  const [toast, setToast]               = useState(false);

  const completedSections = [
    title.trim().length > 0 && desc.trim().length > 0,
    selectedTags.length > 0 || customTags.length > 0,
    selectedTech.length > 0,
  ];

  const handleSubmit = async () => {
    // 1. 필수 입력값 체크
    if (!title || !desc) {
      alert("제목과 설명을 모두 입력해주세요!");
      return;
    }

    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      alert("로그인이 필요합니다!");
      navigate('/login');
      return;
    }

    // 🚨 2. 영교님의 DB 스키마에 맞게 데이터 변환 (Mapping)
    const combinedTags = [...selectedTags, ...customTags];
    const categoryTag = combinedTags.length > 0 ? combinedTags[0] : "General"; // 태그는 첫 번째 것을 대표로 사용
    const techStacksString = selectedTech.join(", "); // 기술 스택을 "React, Node.js" 형태의 문자열로 변환

    const { data, error } = await supabase.from("projects").insert([{
      title: title,
      content: desc,                    // description -> content로 매핑
      category_tag: categoryTag,        // tags 배열 -> 단일 문자열로 매핑
      tech_stacks: techStacksString,    // JSON -> 콤마로 구분된 문자열로 매핑
      images: previews,                 // 새로 추가했던 이미지 배열
      author_id: user.id                // lead -> author_id 로 완벽 연결
    }]).select(); // 🚨 생성된 프로젝트 정보를 받아오기 위해 추가

    if (error) {
      console.error("DB 저장 실패:", error);
      alert("글 작성 중 오류가 발생했습니다: " + error.message);
      return;
    }

    setToast(true);
    
    // 3. 성공 알림 후 1.5초 뒤에 메인 화면으로 자동 이동!
    setTimeout(() => {
      setToast(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div>
      <style>{style}</style>
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div className="np-topbar">
          <div className="np-topbar-left">
            <h1>New Project</h1>
            <p>Fill in the details to publish your project for collaborators.</p>
          </div>
          <div className="np-topbar-actions">
            {/* 🚨 Discard 버튼에 메인으로 돌아가는 기능 추가 */}
            <button className="btn-ghost" onClick={() => navigate('/')}>Discard</button>
            <button className="btn-primary" onClick={handleSubmit}>
              <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
              Publish Project
            </button>
          </div>
        </div>

        <div className="np-steps">
          {STEPS.map((label, i) => (
            <div key={label} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
              <div className={`step${completedSections[i] ? " done" : ""}`}>
                <div className="step-dot">
                  {completedSections[i]
                    ? <svg viewBox="0 0 24 24" style={{ width: 10, height: 10, stroke: "#fff", fill: "none", strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" }}><polyline points="20 6 9 17 4 12" /></svg>
                    : i + 1}
                </div>
                <span>{label}</span>
              </div>
              {i < STEPS.length - 1 && <div className={`step-line${completedSections[i] ? " done" : ""}`} />}
            </div>
          ))}
        </div>

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

      <div className={`toast${toast ? " show" : ""}`}>
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
        Project published successfully!
      </div>
    </div>
  );
}