module.exports = {
  // 어디에서 tailwind가 쓰일건지
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}", // pages폴더 안의 모든폴더 안의 모든 파일들, 중괄호 안에는 확장자 (한개만 쓸거면 중괄호 없어도 됨)
    "./components/**/*.{js,jsx,ts,tsx}", // components폴더
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
