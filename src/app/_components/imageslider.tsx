import React from 'react';

const ImageSlider = () => {
  // 基本の画像セット
  const baseImages = [
      "/assets/blog/Hero/1.jpg",
      "/assets/blog/Hero/2.jpg",
      "/assets/blog/Hero/3.jpg",
  ];

  // アニメーションのための合計幅を計算
  const slideWidth = 300; // 各スライドの幅
  const totalWidth = slideWidth * baseImages.length;

  return (
    <div className="w-full mx-auto my-12 flex items-center overflow-hidden lg:max-w-lg">
      <div 
        className="flex"
        style={{
          animation: `slide-flow ${baseImages.length * 5}s linear infinite`,
          width: `${totalWidth * 2}px` // ダブル幅で重複セットに対応
        }}
      >
        {/* 最初の画像セット */}
        {baseImages.map((src, index) => (
          <div key={`first-${index}`} className="w-[300px] border border-gray-200">
            <img
              className="w-full h-[250px] object-cover object-center rounded"
              alt={`slide-${index + 1}`}
              src={src}
            />
          </div>
        ))}
        {/* シームレスループのための重複画像セット */}
        {baseImages.map((src, index) => (
          <div key={`second-${index}`} className="w-[300px] border border-gray-200">
            <img
              className="w-full h-[250px] object-cover object-center rounded"
              alt={`slide-${index + 1}`}
              src={src}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
