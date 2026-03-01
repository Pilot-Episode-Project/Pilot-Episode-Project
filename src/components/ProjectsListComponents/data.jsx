import { PythonIcon, TensorFlowIcon, FastAPIIcon, PandasIcon, DockerIcon } from "./icons";

export const PROJECTS = [
  {
    id: 1,
    title: "Adaptive Learning Engine",
    description: "A personalized tutoring system that adapts to individual learning speeds using reinforcement learning and live feedback loops.",
    tags: ["AI", "ML"],
    images: [
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
      "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&q=80",
    ],
    stack: [
      { name: "Python", icon: <PythonIcon /> },
      { name: "TensorFlow", icon: <TensorFlowIcon /> },
      { name: "FastAPI", icon: <FastAPIIcon /> },
    ],
    contributors: [
      { initials: "AR", color: "#E14141" },
      { initials: "SK", color: "#3B6FE0" },
      { initials: "MT", color: "#2E8B57" },
    ],
    lead: "Alex R.",
  },
  {
    id: 2,
    title: "Campus Health Tracker",
    description: "Aggregates anonymized wellness data from students to detect early burnout signals across departments and recommend interventions.",
    tags: ["Data Science", "ML"],
    images: [
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80",
    ],
    stack: [
      { name: "Python", icon: <PythonIcon /> },
      { name: "Pandas", icon: <PandasIcon /> },
      { name: "Docker", icon: <DockerIcon /> },
    ],
    contributors: [
      { initials: "JL", color: "#E07B20" },
      { initials: "CP", color: "#7B3FE4" },
    ],
    lead: "Jordan L.",
  },
  {
    id: 3,
    title: "Peer Review Platform",
    description: "An anonymous code and essay review system with AI-assisted feedback, structured rubrics, and revision tracking built for classrooms.",
    tags: ["Web", "AI"],
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    ],
    stack: [
      { name: "React", icon: <span style={{fontSize:12,fontWeight:800,color:"#61DAFB"}}>⚛</span> },
      { name: "Node.js", icon: <span style={{fontSize:10,fontWeight:700,color:"#539E43"}}>N</span> },
      { name: "FastAPI", icon: <FastAPIIcon /> },
    ],
    contributors: [
      { initials: "TM", color: "#E14141" },
      { initials: "RS", color: "#0284C7" },
      { initials: "CW", color: "#E07B20" },
    ],
    lead: "Taylor M.",
  },
  {
    id: 4,
    title: "SecureLab CTF Toolkit",
    description: "A collection of sandboxed challenges and tools for students learning ethical hacking, cryptography, and network security fundamentals.",
    tags: ["Security"],
    images: [
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=600&q=80",
    ],
    stack: [
      { name: "Python", icon: <PythonIcon /> },
      { name: "Docker", icon: <DockerIcon /> },
    ],
    contributors: [
      { initials: "DH", color: "#7B3FE4" },
      { initials: "MA", color: "#2E8B57" },
    ],
    lead: "Drew H.",
  },
  {
    id: 5,
    title: "Smart Campus Energy Monitor",
    description: "Raspberry Pi sensors across campus buildings feed live energy data into a dashboard for sustainability tracking and reporting.",
    tags: ["IoT", "Data Science"],
    images: [
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",
    ],
    stack: [
      { name: "Python", icon: <PythonIcon /> },
      { name: "Pandas", icon: <PandasIcon /> },
    ],
    contributors: [
      { initials: "JB", color: "#0284C7" },
      { initials: "QR", color: "#E14141" },
      { initials: "AN", color: "#3B6FE0" },
    ],
    lead: "Jamie B.",
  },
  {
    id: 6,
    title: "StudyBuddy Matchmaker",
    description: "Matches students with compatible study partners based on schedule, learning style, and course overlap using a smart recommendation model.",
    tags: ["AI", "Web"],
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
    ],
    stack: [
      { name: "React", icon: <span style={{fontSize:12,fontWeight:800,color:"#61DAFB"}}>⚛</span> },
      { name: "Python", icon: <PythonIcon /> },
      { name: "FastAPI", icon: <FastAPIIcon /> },
    ],
    contributors: [
      { initials: "RC", color: "#E07B20" },
      { initials: "SD", color: "#7B3FE4" },
    ],
    lead: "Riley C.",
  },
];
