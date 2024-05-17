import React from "react";

// 헤더 (날짜) 부분
function Header() {
  const date = new Date(); // 현재 날짜
  const dateStr = date.toLocaleString("ko-KR", {
    // 날짜 문자열 ex) 20xx년 x월 xx일
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const today = date.toLocaleString("ko-KR", {
    // 요일 생성 ex) 일요일
    weekday: "long",
  });

  return (
    <div>
      <h1 className="date">
        🗓️ Today : {dateStr} - {today} 🗓️
      </h1>
      <h4 className="ment">오늘 할 일을 내일로 미루지 말자! 🔥 </h4>
    </div>
  );
}

export default Header;
