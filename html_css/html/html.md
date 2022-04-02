# HTML

## 학습 내용

- Contents

  - Text Contents
  - Image, Video, Audio Contents

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
- 수평선(가로선) : h(orizontal) r(ule) 태그 <hr>
  - 단락을 구분하는 구분선
  - 빈 요소

*- 글자 크기 : 전체 내용을 보고 정하기 (가장 큰 제목이니 1)*
*- hr : 단락을 구분해주는 의미 /빈 요소*
*-제목이나 단락 중 애매하면 나름의 기준으로 세워보기/위키백과 -> 부제목의 역할*
**- Ctrl + / : 줄 단위 주석처리 (만들고 해제를 지속할 수 있음)**

### HTML Link
- a(nchor) : 하이퍼링크 연결 태그 (link로 연결된 곳에서 멈춰있다.)
- href(hypertext reference(참조)) : 목적지 정보 제공 속성(attribute)
```
<a href="url">텍스트</a>
```
-_blank : 새 탭 열기

- URL (Uniform(한결같은) Resource Locator) : 파일위치식별자