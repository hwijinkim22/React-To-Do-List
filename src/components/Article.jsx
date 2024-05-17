import React, { useState } from "react";

function Article() {
  const [todo, setTodo] = useState([
    {
      id: 0,
      title: "끼니 해결",
      detail: "제육볶음 먹기",
      status: false,
    },
    {
      id: 1,
      title: "운동하기",
      detail: "숨쉬기 운동 ",
      status: false,
    },
    {
      id: 2,
      title: "공부하기",
      detail: "React 기초 강의 보기",
      status: false,
    },
  ]); // 현재 투두리스트 상태

  const [title, setTitle] = useState(""); // 새로 추가할 제목 useState
  const [detail, setDetail] = useState(""); // 새로 추가할 내용 useState

  // 새로운 투두리스트를 만들어주는 함수
  const handleAdd = () => {
    if(title === "" || detail === "") {
      alert("제목이나 내용을 입력해주세요!")
      return;
    }
    const newList = {
      id: todo.length,
      title: title,
      detail: detail,
      status: false,
    }
  
    setTodo([...todo, newList]); // 새로운 리스트를 기존 todo에 추가
    setTitle(""); // 필드 초기화
    setDetail(""); // 필드 초기화
  };

  const handleDelete = (id) => {
    // 선택 항목을 삭제하는 함수 및 유효성 검사
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfirm) {
      const deleteList = todo.filter((item) => item.id !== id);
      setTodo(deleteList);
    }
  };

  const statusSwitch = (id) => {
    // 체크박스 클릭 시 status를 변경시키는 함수
    const changeStatus = todo.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          status: !item.status, // 스프레드 문법으로 새 배열 반환
        };
      }
      return item;
    });
    console.log(changeStatus);
    setTodo(changeStatus);
  };

  return (
    <div>
      <article className="article">
        <h2>To Do List</h2>
        <div className="input-box">
          <input
            className="inputTitle"
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            className="inputDetail"
            type="text"
            placeholder="내용을 입력하세요"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          />
          <button type="submit" className="btn" onClick={handleAdd}>
            할 일 등록
          </button>
        </div>
        <ul>
          {todo.map((item) => {
            <li key={item.id}>
              <div className="card">
                <button
                  type="button"
                  className="deleteBtn"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                >
                  X
                </button>
                <button
                  type="button"
                  className="toggle"
                  onClick={() => {
                    statusSwitch(item.id)
                  }}
                >
                  완료
                </button>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </li>;
          })}
        </ul>
      </article>
      <div>
        <h2 className="status1">Working🔥</h2>
        <ul>
          {todo
            .filter((item) => {
              return !item.status;
            })
            .map((item) => {
              return (
                <div className="card" key={item.id}>
                  <button
                    type="button"
                    className="deleteBtn"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    X
                  </button>
                  <button
                    type="button"
                    className="toggle"
                    onClick={() => {
                      statusSwitch(item.id)
                    }}
                  >
                    완료
                  </button>
                  <li key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </li>
                </div>
              );
            })}
        </ul>
      </div>
      <div>
        <h2 className="status2">Done ✅</h2>
        <ul>
          {todo
            .filter((item) => {
              return item.status;
            })
            .map((item) => {
              return (
                <div className="card" key={item.id}>
                  <button
                    type="button"
                    className="deleteBtn"
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                  >
                    X
                  </button>

                  <li key={item.title}>
                    <button
                      type="button"
                      className="toggle"
                      onClick={() => {
                        statusSwitch(item.id)
                      }}
                    >
                      {item.status ? "취소" : "완료"}
                    </button>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </li>
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Article;
