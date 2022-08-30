import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const detail = searchParams.get('detail');
	const mode = searchParams.get('mode');

	const onToggleDetail = () => {
		setSearchParams({ mode, detail: detail === 'true' ? false : true })
	}
	const onIncreaseMode = () => {
		const nextMode = mode === null ? 1: parseInt(mode) + 1;
		setSearchParams({ mode: nextMode, detail });
	}

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      {/* <Link to="/">홈</Link> */}
			{/* <p>쿼리스트링: {location.search}</p> */}
			<p>detail: {detail}</p>
			<p>mode: {mode}</p>
			<button onClick={onToggleDetail}>토글 디테일 버튼</button>
			<button onClick={onIncreaseMode}>모드 1 증가</button>
    </div>
  );
};

export default About;
