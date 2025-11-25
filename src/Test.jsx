import './index.css';

export default function Test() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🎉 Tailwind CSS 工作正常！
        </h1>
        <p className="text-gray-600">
          如果你看到这个有样式的卡片，说明配置成功了！
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
          测试按钮
        </button>
      </div>
    </div>
  );
}