import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation(); //Hook

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <Link to="/">홈</Link>
      <p>쿼리스트링: {location.search}</p>
    </div>
  );
};

export default About;
