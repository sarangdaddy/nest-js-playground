# Tailwind

- Tailwind는 유틸리티 우선의 CSS 프레임워크다.
- 모바일 우선의 breakpoint 시스템을 사용한다.

## 반응형

```css
  sm 640px @media (min-width: 640px) { ... }
  md 768px @media (min-width: 768px) { ... }
  lg 1024px @media (min-width: 1024px) { ... }
  xl 1280px @media (min-width: 1280px) { ... }
  2xl 1536px @media (min-width: 1536px) { ... }
```

[Tailwind Mobile First Documentation](https://tailwindcss.com/docs/responsive-design#mobile-first)

- 뷰포트 방향에 따른 조건부 스타일링

```js
div class="portrait:hidden"
div class="landscape:hidden"
```

[Tailwind Viewport Orientation Documentation](https://tailwindcss.com/docs/hover-focus-and-other-states#viewport-orientation)

## 다크모드

- Tailwind는 dark 모드를 지원하며, 사용자의 운영 체제 설정에 따라 자동으로 적용된다.

```jsx
<div className="dark:bg-slate-900"></div>
```

[dark-mode](https://tailwindcss.com/docs/dark-mode)

### 수동으로 다크 모드 전환

- 운영 체제의 기본 설정에 의존하지 않고 다크 모드를 수동으로 전환하려면 media 대신 class를 사용한다.

```json
// tailwind.config.js
module.exports = {
  darkMode: 'class', // 클래스를 기준으로 다크모드 적용
  darkMode: "media", // @media(prefers-color-scheme)를 기준으로 다크모드 적용
}
```

```json
// prefers-color-scheme

@media (prefers-color-scheme: light) {
  .themed {
    background: white;
    color: black;
  }
}
```

- 이 CSS 미디어 특성은 사용자의 시스템이 라이트 테마나 다크 테마를 사용하는지를 탐지하는데 사용된다.

[Tailwind Manual Dark Mode Toggle](https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually)  
[MDN Documentation for prefers-color-scheme](https://developer.mozilla.org/ko/docs/Web/CSS/@media/prefers-color-scheme)

## 함수를 이용한 클래스 네임 지정

- 클래스 이름을 동적으로 지정하기 위해 함수를 사용할 수 있다.

```jsx
function cls(...classnames: string[]) {
  return classnames.join(' ');
}
```

## Plugins

- Tailwind 플러그인을 사용하면 CSS 대신 JavaScript로 스타일을 추가할 수 있다.

[Tailwind Plugins](https://tailwindcss.com/docs/plugins)

### @tailwindcss/forms

- 이 플러그인은 form 요소의 스타일을 쉽게 재정의할 수 있도록 하는 기본 reset을 제공한다.

```bash
npm install -D @tailwindcss/forms
```

- 설치 후, tailwind.config.js에 플러그인을 추가한다.

```jsx
// tailwind.config.js
module.exports = {
  theme: { ... },
  plugins: [
    require('@tailwindcss/forms'),
    ...
  ],
}
```

## 기타 유틸리티

### Divide Width

`Divide Width` 유틸리티는 엘리먼트 사이의 border width를 제어할 수 있다.

```css
divide-x => border-right-width: 1px; border-left-width: 0px;
divide-x-2 => border-right-width: 2px; border-left-width: 0px;
divide-y => border-top-width: 0px; border-bottom-width: 1px;
divide-y-2 => border-top-width: 0px; border-bottom-width: 2px;
```

[Divide Width Documentation](https://tailwindcss.com/docs/divide-width)

### Top / Right / Bottom / Left

- 이 유틸리티는 positioned된 요소의 배치를 제어한다.

```css
inset-x-0 => left: 0px; right: 0px;
inset-x-2 => left: 0.5rem; /* 8px */ right: 0.5rem; /* 8px */
inset-y-0 => top: 0px; bottom: 0px;
inset-y-2 => top: 0.5rem; /* 8px */ bottom: 0.5rem; /* 8px */
```

[TRBL Documentation](https://tailwindcss.com/docs/top-right-bottom-left)

### Aspect Ratio

- 이 유틸리티는 요소의 종횡비를 제어한다.

```css
aspect-auto => aspect-ratio: auto;
aspect-square => aspect-ratio: 1 / 1;
aspect-video => aspect-ratio: 16 / 9;
iframe class="w-full aspect-[4/3]" src="https://www.youtube.com/...
```

[Aspect Ratio Documentation](https://tailwindcss.com/docs/aspect-ratio)

### global 스크롤 숨기기

```css
body {
  - ms-overflow-style: none;
}

::-webkit-scrollbar {
  display: none;
}
```
