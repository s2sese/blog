// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// JSX 문법 - JavaScript XML의 약자 - 수정,배포,데이터바인딩
// blog 
// 데이터바인딩 - UI 동기화 
function App() {
  let post = '행복하게 사는 법 100가지';
  let ezen = 'EZEN';
  let hart = '여자 코트 추천';
// 상태값 선언, '' 비어있는 문자열로 초기값 지정
// '' 는, 아무것도 선택하지 않은 상태
  const [clickeMenu, setClickedMenu] = useState('');
  // [상태를 담는 변수, 상태값을 업데이트하는 함수]

  const handleMenuClick = (menu) => {
    // 클릭한 메뉴에 따른 추가 동작 (다른상태업데이트)
    setClickedMenu(menu);
  }
  return (
    // 여기서부터 JSX 문법 
    <div className="App">
      {/* FONT */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter&family=Text+Me+One&display=swap" rel="stylesheet" />
      <div>
        <h1 style={{fontFamily: "Text Me One", color:'#fff',fontSize:'50px'}}>{ezen}</h1>
        <ul>
          <li onClick={() => handleMenuClick('망치 없이 호두 까기')}>망치 없이 호두 까기</li>
          <li onClick={() => handleMenuClick(hart)}>{hart}</li>
          <li onClick={() => handleMenuClick(ezen)}>{ezen}</li>
         {/* handleMenuClick 이벤트가 발생했을때, 함수에 변수 값을 전달 */}
        </ul>
        <p style={{fontSize:'18px',fontWeight:'bold',marginTop:'20px',color:'#333'}}> 
        선택한 블로그 : <span style={{color:'#05a6bc'}}> {clickeMenu} </span></p>
      
      </div>
    </div>
   
  );
}

export default App;