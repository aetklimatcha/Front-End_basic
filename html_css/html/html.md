# HTML

## 학습 내용

- Contents

  - Text Contents
  - Image, Video, Audio Contents
    - Embed(ed) Contents


- Structure

## HTML Introduction

- Hyoer Text Markup Language
- HTML을 사용해서 웹페이지에 콘텐츠와 구조를 표시

# HTML Basic

```
<!DOCTYPE html> : 문서(웹페이지)의 타입(종류) - 버전(HTML5)
<html> : 웹 페이지 전체 영역

  <head> : 웹 페이지의 추가정보, 타이틀, 파일 임포트
    <title></title> : 표지 역할
  </head>

  <body> : 웹 페이지의 본문 영역 - 웹페이지 모든 콘텐츠 표시
  </body>

</html>

```

## HTML Syntax(문법)

- Tag를 사용해서 Element를 표시/표현

```
<tag>contents</tag> : 시작태그, 종료태그로 구성

<tag> : 시작 태그만 존재하는 경우 - 빈 요소(Empty Element)
```

- 포함관계(Nested Element)
  - Tag 영역 안에 다른 Tag가 포함되는 것
  - 포함하는 요소 : 조상요소(ancestor), 부모요소(parent)
  - 포함되는 요소 : 자손요소(descendant), 자식요소(child)

```
<html>
  <body>
    <h1> 큰제목</h1>
    <p>단락</p>
  </body>
</html>

  # html 기준
    - 자식요소 : body
    - 자손요소 : h1, p
  # body 기준
    - 조상요소 : X
    - 부모요소 : html
    - 자식요소 : h1, p
    - 자손요소 :

```

- Attribute(속성)
  - tag에 추가 정보
  - attr이름 = "값"

```
<tag attr="값"></tag>
```

## Text Contents Markup

### Heading(제목)

- h : h(eading) 태그 <h>
- h1 ~ h6

### Paragraph(단락)

- p : p(aragraph) 태그 <p>

```
WYSIWYG(What You See Is What You Get : 네가 보는 것이 얻는 것이다.)
- HTML은 WYSIWYG 지원이 되지 않음
```

- 강제 줄바꿈 : br(eak) 태그 <br>
  - 시작태그만 존재하는 빈 요소(Empty Element)
- 강제 공백 : &nbsp;(**Non-Break Space**)(엔터티 코드)

```
& : ampersand

엔터티 코드 : 대체코드
- 특수문자(예약어)를 직접 사용하지 못할 때 대체해서 사용하는 코드
```

- 수평선(가로선) : h(orizontal) r(ule) 태그

```
<hr>
```

- 단락을 구분하는 구분선
- 빈 요소

_- 글자 크기 : 전체 내용을 보고 정하기 (가장 큰 제목이니 1)_
_- hr : 단락을 구분해주는 의미 /빈 요소_
_-제목이나 단락 중 애매하면 나름의 기준으로 세워보기/위키백과 -> 부제목의 역할_
**- Ctrl + / : 줄 단위 주석처리 (만들고 해제를 지속할 수 있음)**

### HTML Link

- a(nchor) : 하이퍼링크 연결 태그 (link로 연결된 곳에서 멈춰있다.)
- href(hypertext reference(참조)) : 목적지 정보 제공 속성(attribute)
- bookmark
  연결된 페이지로 이동하지 않고 같은 페이지 내에서 위아래 이동하는 것

```
- page link
<a href="url">텍스트</a>
- bookmark (쇼핑몰 페이지 탑버튼에서 많이 쓰임)
- link
<a href="#target">목적지</a>

-target
<h2 id="target">단락제목</h2>
```

-\_blank : 새 탭 열기

- URL (Uniform(한결같은) Resource Locator) : 파일(자원)위치식별자 - 상세주소
  (http://<host>:<port>/<path>?<searchpart>)

- 인터넷 주소 체계
  - IP(Internet Protocol(통신 규약)) address : 인터넷에서 사용하는 주소
  - Domain Name : IP주소를 영어단어로 표현
    - 서버 종류 : www(웹서버라는 뜻)
    - 회사 이름 : naver, daum
    - 기관 성격 : com, net(세 자리) / co, go, ac (4자리)
    - 국가(4자리) : kr, uk, ca, fr ...

```
-IP : 0~255까지 숫자 4개로 구성
ex. 192.168.0.1


- 인터넷 접속 프로세스 : 주소 표시줄에 Domain Name 입력 => IP주소로 변환 => 접속

- URL 체계

IP or Domain 주소 / 상세경로 / 파일정보
ex. www.w3schools.com/html/default.asp

```

### HTML table

```
<table> : 테이블 작성
  <tr> : table row - 행(가로줄)
    <th></th> : table header - 열제목(위에 한 번만 + 글씨 굵게 처리됨)
  </tr>
  <tr>
    <td></td> : table data - 데이터
  </tr>
</table>
```

### HTML List

- ul(Unordered List) : 순서없는 목록
  - 기호로 표시(bullet)
- ol(Ordered List) : 순서있는 목록
  - 숫자로 표시(알파벳, 한글)
- li(List Item) : 목록 아이템
- 중첩 목록(Nested List)
  - 목록 안에 작은 목록이 포함되는 경우

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
  - dt(Description Title)
  - dd (Description Data)

```
<dl>
  <dt>목록 주제</dt>
  <dd>목록 설명</dd>
</dl>
```

### HTML image
- img (빈 요소)(empty element)
  - src(source) : 이미지 파일 경로 / 파일명 표시
  - alt(ernative) : 대체 텍스트

```
<img src="www.naver.com/html/photo.jpg" alt="이미지 설명">
```
### HTML Video
- video (종료태그있음)
  - 이름만 사용하는 attribute는 on/off 기능 형태
  - controls : 재생 컨트롤 버튼 화면에 표시
  - autoplay : 자동 재생
  - muted : 소리 제거
```
<video>
  <source src"www.daum.net/video/movie.mp4" type="video/mp4">
</video>
```

### Youtube Video

- option, parameter(매개변수)
https://developers.google.com/youtube/player_parameters?hl=ko#autoplay

```
<iframe src="youtube_url?parameter_1=0&parameter_2=1&parameter_3=0"></iframe>
```

## HTML Structure

### Semantic Element

- grouping 또는 구분하는 Element를 의미있게 사용
- 의미있는 grouping Element가 추가
- Content Element 와 Semantic Element를 목적에 맞게 제대로 구성하는 것이 검색엔진(SEO : Search Engine Optimization)에 웹사이트 관련 정보를 잘 노출시킬 수 있는 방법 중 하나

- header 
  - 소개 콘텐츠(logo etc), 탐색링크(상단메뉴, 검색바), 로그인, 언어선택 etc

- nav(igation)
  - 메뉴

  
- section
  - 제목, 내용으로 구성된 하나의 영역

- article
  - 독립적인 글 또는 콘텐츠

- aside
  - 부수적인 콘텐츠가 들어가는 영역

- footer
  - 연락처
  - 사이트맵
  - 저작권
  - 연관 링크

- figure
  - embeded contents 또는 그림 형태의 콘텐츠를 grouping하는 요소

