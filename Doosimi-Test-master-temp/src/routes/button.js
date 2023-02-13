import React, { useState } from 'react';

const KakaoShareButton = () => {
  const [url, setUrl] = useState('https://www.example.com');

  const shareToKakao = () => {
    window.open(`https://kakao.com/share?url=${encodeURIComponent(url)}`);
  };

  return (
    <div>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={shareToKakao}>공유하기</button>
    </div>
  );
};

export default KakaoShareButton;
