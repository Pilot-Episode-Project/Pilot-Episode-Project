import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'; // 나가기(로그아웃) 아이콘

// 기존 랭킹 데이터 유지
const rankings = [
  { country: 'United States', code: 'US', users: 12034, flag: '🇺🇸' },
  { country: 'India', code: 'IN', users: 9876, flag: '🇮🇳' },
  { country: 'Brazil', code: 'BR', users: 7654, flag: '🇧🇷' },
  { country: 'Germany', code: 'DE', users: 6543, flag: '🇩🇪' },
  { country: 'United Kingdom', code: 'GB', users: 5432, flag: '🇬🇧' },
  { country: 'Japan', code: 'JP', users: 4321, flag: '🇯🇵' },
  { country: 'Canada', code: 'CA', users: 3210, flag: '🇨🇦' },
  { country: 'France', code: 'FR', users: 2109, flag: '🇫🇷' },
  { country: 'Australia', code: 'AU', users: 1098, flag: '🇦🇺' },
  { country: 'South Korea', code: 'KR', users: 987, flag: '🇰🇷' },
];

export default function Sidebar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 리액트 생명주기: 사이드바가 켜질 때 로그인 상태 감지
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    alert('로그아웃 되었습니다.');
    navigate('/');
  };

  return (
    <aside className="fixed top-20 left-0 z-40 w-64 h-[calc(100vh-5rem)] bg-white text-gray-900 p-4 border-r border-gray-300 flex flex-col">
      {/* --- 기존 상단 메뉴 완벽 유지 --- */}
      <div>
        <nav>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:bg-gray-200 active:bg-gray-300 p-2 rounded flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/chat" className="hover:bg-gray-200 active:bg-gray-300 p-2 rounded flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>Chat
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/c/all" className="hover:bg-gray-200 active:bg-gray-300 p-2 rounded flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>Communities
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-0 border border-gray-300 rounded-md p-2">
        <h3 className="text-lg font-semibold mb-2">Real-time Users</h3>
        <ul>
          {rankings.map((item) => (
            <li key={item.code} className="flex items-center justify-between mb-0 py-1 px-2 rounded hover:bg-gray-100">
              <div className="flex items-center">
                <span className="mr-3">{item.flag}</span>
                <span className="text-sm font-medium">{item.country}</span>
              </div>
              <span className="text-sm font-bold">{item.users.toLocaleString()}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* --- 상단 메뉴 완벽 유지 끝 --- */}

      {/* --- 하단 Gemini User 영역 동적 처리 --- */}
      <div className="mt-auto pt-4 border-t border-gray-200">
        {user ? (
          // 1. 로그인 성공 상태: 기존 Gemini User UI + 오른쪽에 Exit 버튼
          <div className="flex items-center justify-between">
            <Link to="/user/me" className="flex items-center flex-1 hover:opacity-80 transition-opacity">
              <img
                src="https://www.gravatar.com/avatar/?d=mp"
                alt="Profile"
                className="rounded-full h-10 w-10 mr-3"
              />
              <div className="flex-1 overflow-hidden">
                {/* 이메일 앞부분을 닉네임처럼 사용 (너무 길면 잘리게 처리) */}
                <span className="block font-semibold truncate w-24 text-sm text-gray-900">
                  {user.email.split('@')[0]}
                </span>
                <div className="flex items-center">
                  <span className="block h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                  <span className="text-xs text-gray-600">Online</span>
                </div>
              </div>
            </Link>
            
            {/* 로그아웃(Exit) 버튼 추가 */}
            <button 
              onClick={handleLogout} 
              title="로그아웃"
              className="p-2 ml-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all"
            >
              <ArrowRightOnRectangleIcon className="h-6 w-6" />
            </button>
          </div>
        ) : (
          // 2. 비로그인 상태: 로그인 & 회원가입 버튼
          <div className="flex flex-col space-y-2">
            <Link 
              to="/login" 
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
            >
              Log in
            </Link>
            <Link 
              to="/register" 
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}