import React from 'react';

function Hello({ color, name }) {
  return (
    <>
      <div style={{ color }}>안녕하세요 {name}</div>
      <div>테스트 내용 추가</div>
    </>
  )
}

export default Hello;