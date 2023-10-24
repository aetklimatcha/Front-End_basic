# HTML

## 학습 내용

- Contents

  - Text Contents
  - Image, Video, Audio Contents
    - Embed(ed) Contents

- Structure

## HTML Introduction

- Hyper Text Markup Language
- HTML을 사용해서 웹페이지에 콘텐츠와 구조를 표시

## HTMl Basic

```
<!DOCTYPE html> : 문서(웹페이지) 타입(종류) - 버전(HTML5)
<html> : 웹 페이지 전체 영역

  <head> : 웹 페이지의 추가정보, 타이틀, 파일 임포트
    <title></title>
  </head>

  <body> : 웹 페이지의 본문 영역 - 웹 페이지 모든 콘텐츠 표시
  </body>

</html>
```

## HTML Syntax

- Tag를 사용해서 Element를 표시/표현

```
<tag>contents</tag> : 시작태그, 종료태그로 구성

<tag> : 시작 태그만 존재하는 경우 - 빈요소(Empty Element)
```

- 포함관계(Nested Element)
  - Tag 영역안에 다른 Tag가 포함되는 것
  - 포함하는 요소 : 조상요소(ancestor), 부모요소(parent)
  - 포함되는 요소 : 자손요소(descendant), 자식요소(child)

```
<html>
  <body>
    <h1>큰제목</h1>
    <p>단락</p>
  </body>
</html>

html 기준
- 자식요소 : body
- 자손요소 : h1, p
body 기준
- 조상요소 : X
- 부모요소 : html
- 자식요소 : h1, p
- 자손요소 : X
```

- Attribute(속성)
  - tag에 추가 정보
  - attr이름 = "값"

```
<tag attr="값"></tag>
```

## Text Contents Markup

### Heading(제목)

- h(eading) 태그
- h1 ~ h6

### Paragraph(단락)

- p(aragraph) 태그

```
WYSIWYG(What You See Is What You Get : 네가 보는것이 얻는것이다)
- HTML은 WYSIWYG 지원이 되지 않음
```

- 강제 줄바꿈 : br(eak) 태그

  - 시작태그만 존재하는 빈요소(Empty Element)

- 강제 공백 : &nbsp;(Non-Break Space)(엔터티 코드)

```
& : ampersand

엔터티 코드 : 대체코드
- 특수문자를 직접 사용하지 못할 때 대체해서 사용하는 코드
```

- 수평선(Horizontal Rule) : hr
  - 단락를 구분하는 구분선
  - 빈 요소

### HTML Link

- a(nchor) : 하이퍼링크 연결 태그
- href(hypertext reference) : 목적지 정보 제공 속성(atrribute)
- bookmark
  - 연결된 페이지로 이동하지 않고, 같은 페이지내에서 위아래 이동

```
- page link
<a href="url">텍스트</a>

- bookmark

- link
<a href="#target">목적지</a>

- target
<h2 id="target">단락 제목</h2>
```

- URL(Uniform Resource Locator) : 파일(자원)위치식별자 - 상세주소

- 인터넷 주소체계
  - IP(Internet Protocol) address : 인터넷에서 사용하는 주소
  - Domain name : IP 주소를 영어단어로 표현
    - 서버종류 : www
    - 회사이름 : naver, daum
    - 기관성격 : com, net (3자리) / co, go, ac (4자리)
    - 국가(4자리) : kr, uk, ca, fr ...

```
- IP : 0~255까지 숫자 4개로 구성
Ex) 192.168.0.1

- 인터넷 접속 프로세스 : 주소표시줄에 Domain Name 입력 => IP주소로 변환 => 접속

- URL 체계

IP 또는 Domain 주소/상세경로/파일정보
Ex) www.w3schools.com/html/default.asp
```

### HTML table

** https://www.tablesgenerator.com/html_tables

```
<table> : 테이블 작성
  <tr> : table row - 행
    <th></th> : table header - 열제목
  </tr>
  <tr>
    <td></td> : table data - 데이터
  </tr>
  <tr>
    <td></td>
  </tr>
</table>
```

### HTML List

- ul(Unordered List) : 순서없는 목록
  - 기호로 표시
- ol(Ordered List) : 순서있는 목록
  - 숫자로 표시(알파벳, 한글)
- li(List Item) : 목록 아이템
- 중첩목록(Nested List)
  - 목록안에 작은 목록이 포함되는 경우

```
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
</ul>

<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
</ol>
```

- Description List : 설명목록
  - dl(Description List)
  - dt(Description title)
  - dd(Description Data)

```
<dl>
  <dt>목록 주제</dt>
  <dd>목록 설명</dd>
</dl>
```

### HTML Image

- img
- src(source) : 이미지 파일 경로/파일명 표시
- alt(ernative) : 대체 텍스트

```
<img src="www.naver.com/html/photo.jpg" alt="이미지 설명">
```

- 이미지 형식
  - 비트맵(포토샵), 벡터(일러스트레이터) 이미지
  - 비트맵 이미지 형식
    - jpg : 사진
    - png : 투명 배경
    - gif : 용량이 작음 - 로고, 애니메이션
  - 벡터 이미지
    - svg

### HTML Video

- video
  - 이름만 사용하는 attribute는 on/off 기능 형태
  - controls : 재생 컨트롤을 화면에 표시
  - autoplay : 자동 재생
  - muted : 소리 제거


```
<video>
  <source src="www.daum.net/video/movie.mp4" type="video/mp4">
</video>
```

### Youtube Video

- option, parameter(매개변수)

https://developers.google.com/youtube/player_parameters?hl=ko#autoplay

```
<iframe src="youtube-url?parameter1=0&parameter2=1&parameter3=0"></iframe>
```

### 콘텐츠 강조

- 제목의 역할까지는 아니지만 중요, 강조의미를 가진 텍스트 표시

- em(pasized)
- strong
- mark

```
strong > mark > em
```

### 그 밖의 Text Element

- b(old)
- i(talic)

## HTML Structure

### Semantic Element

- grouping 또는 구분하는 Element를 의미있게 사용
- 의미있는 grouping Element가 추가
- Contents Element와 Semantic Element를 목적에 맞게 제대로 구성하는 것이
  검색엔진(SEO:Search Engine Optimization)에 웹사이트 관련 정보를 잘 노출시킬 수 있는 방법중의 하나

- header
  - 소개 콘텐츠(logo...), 탐색링크(상단메뉴, 검색바), 로그인, 언어선택...

- nav(igation)
  - 메뉴

- section
  - 제목, 내용으로 구성된 하나의 영역

- article
  - 독립적인 글 또는 콘텐츠

- aside
  - 부수적인 콘텐츠 영역

- footer
  - 연락처
  - 사이트 맵
  - 저작권
  - 연관 링크

- figure
  - embeded contents 또는 그림형태의 콘텐츠를 grouping 하는 요소

### Container Element

- 단순 구역 나누는 / grouping 하는 요소
- div(ision)
- span

## 파일 경로 표시 방식

- 절대 경로(주소) 방식
  - 항상 똑같은 경로(주소) 표시 가능
  - 주소 표시 방식이 복잡함
```
href="www.naver.com/html/home.html"
src="www.instagram.com/html/photo.jpg"
```

- 상대 경로 방식
  - 출발 위치 기준에 따라서 상대적으로 경로(주소) 표시 형태가 변경
  - 같은 자원의 위치에 대해서 표시 방식이 너무 많음
  - 자원의 위치가 이동하면 주소를 모두 수정해야함
  - ../ : 한 단계 상위 폴더로 이동
```
/ - html - home.html
         - sub.html
  - images - photo.jpg

위치 기준 : sub.html

href="home.html"
src="../images/photo.jpg"
```

- root 상대 경로 방식
  - root : 최상위 경로(/)
  - root 경로에서 부터 찾아갈 수 있도록 상대 경로 방식을 변형
```
/ - html - home.html
         - sub.html
  - images - photo.jpg

위치 기준 : sub.html

href="/html/home.html"
src="/images/photo.jpg"
```

비트계산 - ip, 문자표시, 색표시

## Block & Inline

- 구역을 구분하는 Semantic Element, Container Element 뿐만아니라 Contents를 표현하는 Element도 화면에 영역으로 표시됨

### Block Element

- 요소의 영역이 부모요소를 기준으로 가능한 최대 너비로 채워짐
- 요소와 요소는 줄바꿈되어 새 줄에 표시됨

### Inline Element

- 요소의 영역이 Contents 또는 자식요소를 기준으로 맞춰짐
- 요소와 요소는 한 줄에 나란히 표시가 됨

## head 태그

- meta : 웹사이트 추가 정보
- title : 웹사이트 대표 제목
- link, script : css, js 파일 불러올때 사용
- style, script : css, js 코드를 직접 사용할 때 사용
