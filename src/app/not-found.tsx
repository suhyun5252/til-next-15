import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-[#44D62C] neon-glow">404</h1>
        <p className="text-2xl text-[#44D62C]">페이지를 찾을 수 없습니다</p>
        <p className="text-gray-400">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-[#44D62C] text-black font-bold rounded-lg hover:bg-green-500 transition-colors hover:scale-105"
        >
          홈으로 돌아가기
        </Link>
      </div>
      <div className="absolute bottom-8 text-[#44D62C]">
        <p>© 2025 Lee. All rights reserved.</p>
      </div>
    </div>
  );
}
