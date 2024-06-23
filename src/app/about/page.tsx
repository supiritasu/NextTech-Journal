"use client";
import React, { useState } from 'react';
import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';

type Tab = 'profile' | 'skills' | 'experience';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('profile');

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="w-full flex justify-center my-8">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">About Me</h1>
            <div className="mb-8">
              <ul className="flex border-b border-gray-200">
                <li className="-mb-px mr-1">
                  <button
                    className={`${
                      activeTab === 'profile'
                        ? 'border-l border-t border-r rounded-t bg-white text-blue-600'
                        : 'text-gray-600 hover:text-gray-800'
                    } py-4 px-6 font-semibold transition duration-300`}
                    onClick={() => handleTabClick('profile')}
                  >
                    Profile
                  </button>
                </li>
                <li className="mr-1">
                  <button
                    className={`${
                      activeTab === 'skills'
                        ? 'border-l border-t border-r rounded-t bg-white text-blue-600'
                        : 'text-gray-600 hover:text-gray-800'
                    } py-4 px-6 font-semibold transition duration-300`}
                    onClick={() => handleTabClick('skills')}
                  >
                    Skills
                  </button>
                </li>
                <li className="mr-1">
                  <button
                    className={`${
                      activeTab === 'experience'
                        ? 'border-l border-t border-r rounded-t bg-white text-blue-600'
                        : 'text-gray-600 hover:text-gray-800'
                    } py-4 px-6 font-semibold transition duration-300`}
                    onClick={() => handleTabClick('experience')}
                  >
                    Experience
                  </button>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-b-lg min-h-[200px]">
              {activeTab === 'profile' && (
                <div>
                  <p className="text-gray-700 mb-4">
                    私は、東京都出身の学生です。趣味は読書とランニングで、週末はよく公園を走っています。
                  </p>
                  <p className="text-gray-700">
                    将来の夢は、自分のスタートアップを立ち上げることです。ITの力で世界を変えたいと考えています。
                  </p>
                </div>
              )}
              {activeTab === 'skills' && (
                <div>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Java</li>
                  </ul>
                </div>
              )}
              {activeTab === 'experience' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    インターン
                  </h3>
                  <p className="text-gray-700 mb-4">
                    2022年の夏、ITベンチャー企業でインターンを経験しました。フロントエンド開発に携わり、React.jsを使ったWebアプリケーションの開発に従事しました。
                  </p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    プロジェクト
                  </h3>
                  <p className="text-gray-700">
                    大学のハッカソンで、チームメンバーと共に災害時の安否確認アプリを開発しました。優勝することができ、プロジェクトマネジメントやチームワークの重要性を学びました。
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
