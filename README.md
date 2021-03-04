# React
처음  React 공부를 해보는 중입니다. 

2020_0717부로 처음 시작했으며 '리액트를 다루는 기술'이라는 책을 바탕으로 공부했습니다.

# 왜 리액트인가?
리액트에 대하여 공부하기 전에 왜 사용하는지부터 알아보자

1. **SPA , CSR**

    이전의 SSR(Server Side Rendering)일 때에는 변화가 있을 때 마다 새롭게 전체 페이지를 로드해야했다.
    그러나 SPA와 CSR은 서버로부터 데이터를 받아 클라이언트를 렌더링 하는 방식이다.
    바뀐 부분만 렌더링함에 따라 효율적으로 클라이언트 리소스를 사용할 수 있다.
    
2. **가상 DOM(virtual dom)** 으로 인한 충분히 빠른 속도

    기존에는 DOM에 직접 접근하여 브라우저에 화면을 나타내는 방식으로 HTML, CSS, JS를 다시 리렌더링 하기 때문에 속도가 느릴 수 밖에 없다.
    
    이 문제점을 virtual dom을 활용하여 해결했다.
    [virtual dom설명](https://www.youtube.com/watch?time_continue=1&v=BYbgopx44vo&feature=emb_logo)
    
3. 오직 **view**에만 집중

    다른 프레임워크와는 다르게 MVC프레임워크가 아니다.
    오직 view만 제공한다.
    따라서 DOM 객체의 갱신 및 이벤트 응답에만 관심이 있는 라이브러리이며 DOM업데이트 성능이 강점으로 작용한다.
    다른 부분은 리액트에서 제공하지 않기에 다른 라이브러리를 사용하는 점이 강점이자 단점이다.
    

# 목차
* [컴포넌트](https://github.com/jhoon12/React_Study/blob/master/01.%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8/component/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98%EA%B0%9C%EB%85%90.md)

* [이벤트 핸들링](https://github.com/jhoon12/React_Study/blob/master/02.%EC%9D%B4%EB%B2%A4%ED%8A%B8%20%ED%95%B8%EB%93%A4%EB%A7%81/event/%EC%9D%B4%EB%B2%A4%ED%8A%B8%20%ED%97%A8%EB%93%A4%EB%A7%81.md)

* [ref:DOM에 이름달기](https://github.com/jhoon12/React_Study/blob/master/03.ref%2C%20Dom%EC%97%90%20%EC%9D%B4%EB%A6%84%EB%8B%AC%EA%B8%B0/ref/ref%20Dom%EC%97%90%20%EC%9D%B4%EB%A6%84%20%EB%8B%AC%EA%B8%B0.md)

* [컴포넌트 반복](https://github.com/jhoon12/React_Study/blob/master/04.%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98%20%EB%B0%98%EB%B3%B5/comporepeat/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98%20%EB%B0%98%EB%B3%B5.md)

* [컴포넌트의 라이프사이클 메서드](https://github.com/jhoon12/React_Study/blob/master/05.%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98%20%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4%20%EB%A9%94%EC%84%9C%EB%93%9C/lifecycle/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98%20%EB%9D%BC%EC%9D%B4%ED%94%84%EC%82%AC%EC%9D%B4%ED%81%B4%20%EB%A9%94%EC%84%9C%EB%93%9C.md)

* [Hooks](https://github.com/jhoon12/React_Study/blob/master/06.%20Hooks/hooks/Hooks.md)

* [컴포넌트 스타일링](https://github.com/jhoon12/React_Study/blob/master/07.%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81/style/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A7%81.md)

* [일정 관리 웹 애플리케이션 만들기 && 컴포넌트 성능 최적화](https://github.com/jhoon12/React_Study/tree/master/08.%20%EC%9D%BC%EC%A0%95%20%EA%B4%80%EB%A6%AC%20%EC%9B%B9%20%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98%20%EB%A7%8C%EB%93%A4%EA%B8%B0/todo/src)

* [immer를 사용하여 더 쉽게 불변성 유지하기](https://github.com/jhoon12/React_Study/tree/master/12.%20immer%EB%A5%BC%20%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC%20%EB%8D%94%20%EC%89%BD%EA%B2%8C%20%EB%B6%88%EB%B3%80%EC%84%B1%20%EC%9C%A0%EC%A7%80%ED%95%98%EA%B8%B0/immer)

* [리엑트 라우터로 SPA 개발하기](https://github.com/jhoon12/React_Study/blob/master/10.%20%EB%A6%AC%EC%97%91%ED%8A%B8%20%EB%9D%BC%EC%9A%B0%ED%84%B0%EB%A1%9C%20SPA%20%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0/%EB%A6%AC%EC%97%91%ED%8A%B8%20%EB%9D%BC%EC%9A%B0%ED%84%B0%EB%A1%9C%20SPA%EA%B0%9C%EB%B0%9C%ED%95%98%EA%B8%B0.md)

* 외부 API를 연동하여 뉴스 뷰어 만들기

* [Context API](https://github.com/jhoon12/React_Study/tree/master/14.%20ContextAPI)

* [리덕스 라이브러리 이해하기](https://github.com/jhoon12/React_Study/tree/master/15.%20%EB%A6%AC%EB%8D%95%EC%8A%A4%20%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%20%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

* 리덕스를 사용하여 리액트 라이브러리 상태 관리하기

* 리덕스 미들웨어를 통한 비동기 작업 관리

* 코드 스플리팅

* 서버 사이드 렌더링

* 회원 인증 구현

* 글쓰기 기능 구현하기

* 포스트 조회 기능 구현하기

* 수정/삭제 기능 구현 및 마무리
