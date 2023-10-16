# NextJS

- NextJS는 React를 사용할 때 발생할 수 있는 일부 문제점을 해결하도록 설계된 견고한 React 프레임워크다.
- 파일 기반 라우팅 및 서버 사이드 렌더링(SSR)과 같은 기능을 제공하여 개발자 경험을 향상시키고 애플리케이션 성능을 향상시킨다.

## 프레임워크 vs 라이브러리

- 라이브러리: 개발자가 라이브러리를 호출하고 관리하며, 폴더 구조 및 컴포넌트 배치를 자유롭게 정의한다.
- 프레임워크: 프레임워크가 개발자의 코드를 호출하며, 코드를 적절한 위치에 배치하고 프레임워크가 정한 규칙을 따르도록 요구한다.

## Next.js의 기본 특징

- pages 파일 이름이 경로(path)가 된다.
- 컴포넌트는 default로 export 해야한다.
- 애플리케이션의 페이지들이 사전에 렌더링된다. (SSR)

## CSR vs SSR

- CSR (Client-Side Rendering) (예: CRA)  
   : 브라우저가 UI 렌더링을 처리하며, JS 코드를 기다리는 동안 빈 페이지를 보여준다.  
  : 1. root html -> react.js 로딩 -> 초기 화면 출력 및 스크립트 동작
- SSR (Server-Side Rendering) (예: Next.js)  
   : HTML 내에서 렌더링되므로 인터넷이 느려도 사용자는 상호작용을 기다리면서 HTML 컨텐츠를 볼 수 있다.  
  : 1. pre-render 된 정적 페이지 (html) -> react.js 로딩 -> 스크립트 동작

# Next.js의 기능

## Route

### Link

- Next.js는 Link 컴포넌트를 사용하여 클라이언트 측 네비게이션을 제공하며, 페이지 전환 시 리렌더링이 발생하지 않는다.

```jsx
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link style={{ color: "red" }} className="ogo" href="/">
        Home
      </Link>
      <Link href="/about">About</Link>
    </nav>
  );
}

// home
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home </h1>
    </div>
  );
}

// about
import NavBar from "@/components/NavBar";

export default function About() {
  return (
    <div>
      <NavBar />
      <h1>about </h1>
    </div>
  );
}
```

### useRouter

- useRouter 훅은 경로 정보를 제공하며, 현재 라우트를 기반으로 `동적으로 스타일` 또는 `로직을 적용`하는 데 사용할 수 있다.

```jsx
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
        href="/"
      >
        Home
      </Link>
      <Link
        style={{ color: router.pathname === "/about" ? "red" : "blue" }}
        href="/about"
      >
        About
      </Link>
    </nav>
  );
}
```

### Router Push

- 클라이언트 측 전환을 처리한다.
- router.push(url, as, options)를 사용하여 프로그래밍 방식으로 라우팅을 수행한다.
- 외부 URL로 이동할 때는 window.location을 사용한다.

```jsx
export default function Home({ results }) {
  const router = useRouter();

  const handleRoute = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

```

### Dynamic Router

- 대괄호([param])를 추가하여 동적 라우트를 생성한다.
- 대괄호 안에 세 개의 점([...param])을 추가하여 모든 경로를 포착하는 동적 라우트를 생성한다.
- useRouter() 혹은 withRouter HOC를 사용하여 라우트 매개변수에 접근할 수 있다.

## next.config.js 파일

- 프로젝트 루트에 위치하며 Node.js 모듈 형식을 가진다.
- Next.js 서버와 빌드 단계에서 사용되며 브라우저 빌드에는 포함되지 않는다.
- 커스텀 설정을 위한 파일이다.
- Redirect, Rewrites 설정을 정의한다.

### Redirect

- 들어오는 요청 경로를 다른 목적지 경로로 리디렉션한다.
- next.config.js에서 redirects 키를 사용하여 설정한다.
- 속성: source, destination, permanent.

```jsx
  async redirects() {
    return [
      {
        source: "/old-contact/:path*",
        destination: "/new-contact/:path*",
        permanent: false,
      },
    ];
  },
```

### Rewrites

- 들어오는 요청 경로를 다른 목적지 경로에 매핑하지만 URL은 변경되지 않는다.
- URL 프록시 역할을 하여 destination 경로를 마스크한다.
- 반면 리디렉트는 새 페이지로 리라우트하고 URL 변경 사항을 표시한다.

```js
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
```

## [사용자 정의 앱 컴포넌트](https://nextjs.org/docs/advanced-features/custom-app)

- 페이지 초기화를 제어하기 위해 사용자 정의 `_app.js` 파일을 만들 수 있다.
- 이를 통해 페이지 변경 간 레이아웃을 유지하고, 페이지 탐색 시 상태를 관리하며, 추가 데이터를 페이지에 삽입하고 전역 CSS를 추가할 수 있다.

```jsx
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps}></Component>
    </>
  );
}
```

## [Layout](https://nextjs.org/docs/basic-features/layouts)

- Layout 컴포넌트를 사용하여 다양한 페이지 간 일관된 구조를 유지할 수 있다.

```jsx
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
```

## Head

- next/head는 Next.js에서 제공하는 컴포넌트로, React 컴포넌트 안에서 `<head>` 태그를 조작할 수 있게 해준다.
- 이 컴포넌트를 사용하면, 각 페이지 또는 컴포넌트에서 메타 태그, 스타일시트, 스크립트 등 `<head>` 요소를 동적으로 수정하거나 추가할 수 있다.

```jsx
import Head from "next/head";

export default function Seo({ title, description }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
      <meta name="description" content={description} />
    </Head>
  );
}

import Seo from "@/components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="Home" />
      <h1>Home </h1>
    </div>
  );
}

import Seo from "@/components/Seo";

export default function About() {
  return (
    <div>
      <Seo title="About" />
      <h1>about </h1>
    </div>
  );
}
```

![](https://velog.velcdn.com/images/sarang_daddy/post/1436c9d5-e7b0-4ade-92e2-7e6176f81622/image.gif)

## 주의점 및 추가 정보

- 데이터 요청을 할 때 http와 https를 정확하게 사용해야 한다.
- 경로 패턴에서 \*를 추가하면 모든 경로를 캐치한다.
- API 키는 환경 변수로 관리하여 노출되지 않게 한다.
- SSR은 초기 페이지 로딩에서 모든 필요한 데이터를 서버에서 불러와 한 번의 요청으로 완전한 페이지를 로드한다.
- CSR(Client Side Rendering)은 초기 로드 시에는 페이지 구조만 로드하고, 이후 사용자의 액션에 따라 필요한 데이터만 추가로 요청한다.

## 활용 사례

- SSR은 SEO에 중요한 페이지나 초기 로딩 속도가 중요한 페이지에서 사용한다.
- CSR은 사용자의 인터랙션에 따라 다양한 데이터를 보여줘야 하는 페이지에서 사용한다.
- Redirect와 Rewrite는 URL 관리 전략에 따라 영구적 혹은 임시적으로 경로를 변경해야 할 때 사용한다.
- Dynamic Router는 동적인 페이지 구조를 가지며, 같은 레이아웃을 가진 여러 페이지를 표현할 때 사용한다.
