# Prompts

당신은 웹 디자이너(UI/UX), 웹 퍼블리셔(UI개발자), 프론트엔드 개발자, 백엔드 개발자, 풀스택 개발자의 경력이 각각 30년씩 있는 전문가 집단입니다. 아래 내용을 참조하여 웹페이지 UI 및 디자인을 리뉴얼 업데이트 해주세요.

[목표 : '숨길 ; 운전자들만 아는 드라이브 코스 지도' 웹페이지 제작]

- 가이드라인 :

1. HTML로 출력할 것.
2. 홈페이지 '메뉴 구성' json 참조하나, 추가 또는 수정이 필요하다고 느낄 경우, 수정해주세요.
3. 다음과 같이 5개의 색상을 컨셉으로 하여 웹페이지 구성 :
- 메인 컬러 (Dusty Rose / #B08968): 헤더, 중요한 배경 등 웹사이트의 전체적인 빈티지하고 따뜻한 감성을 결정하는 핵심 색상입니다.

- 강조 컬러 (Rusty Orange / #D79922): CTA 버튼, '추천 경로' 하이라이트 등에 사용되어 노을 지는 도로처럼 시선을 집중시키고 모험심을 자극하는 역동적인 포인트 색상입니다.

- 보조 컬러 1 (Cream Beige / #FDFCF6): 주요 콘텐츠 배경으로 사용되어 텍스트 가독성을 높이고, 순수한 화이트 대신 편안하고 부드러운 아날로그 느낌을 부여합니다.

- 보조 컬러 2 (Midnight Green / #54583A): 아이콘, 부제목 등에 사용되어 숲과 자연의 깊이감을 더하며, 안정감을 주고 대비를 통해 요소를 돋보이게 합니다.

- 강조 텍스트 (Dark Brown / #3D2C20): 본문 텍스트에 사용되어 미색 배경과 높은 대비를 이루면서도 차분하고 감성적인 가독성을 확보합니다.  

4. 이미지의 경우, 추천하는 이미지를 웹 서칭 또는 이미지 생성을 통해 어울리는 이미지가 들어갈 수 있도록 해주세요.

[메뉴 구성]

```
{
  "website_name": "The Hidden Route Finder",
  "menu_structure": {
    "public_navigation": [
      {
        "name": "홈",
        "path": "/",
        "description": "메인 페이지 및 추천 경로 미리보기"
      },
      {
        "name": "전체 경로 탐색",
        "path": "/routes/explore",
        "description": "차량 모델 등록 없이 모든 경로를 검색 및 필터링"
      },
      {
        "name": "드라이브 스팟",
        "path": "/spots",
        "description": "차량 친화적인 카페, 세차장, 포토존 등 검색"
      },
      {
        "name": "로그인",
        "path": "/auth/login",
        "description": "회원 로그인 및 가입 페이지 (비회원 접근 가능)"
      }
    ],
    "user_dashboard_navigation": {
      "name": "마이 페이지 (로그인 시)",
      "path": "/my",
      "menus": [
        // R (Read) - 핵심 정보 조회 및 추천
        {
          "name": "나의 추천 코스",
          "path": "/my/recommendations",
          "description": "현재 날씨, 계절, 차량 모델에 따른 최적 경로 추천 (Read: 시스템 추천)"
        },
        // CRUD - 차량 관리 (사용자 소유 차량)
        {
          "name": "차량 관리",
          "menus_crud": [
            { "name": "차량 목록 보기", "path": "/my/vehicles", "operation": "Read", "description": "등록된 소유 차량 목록 조회 및 수정/삭제 링크 제공" },
            { "name": "새 차량 등록", "path": "/my/vehicles/create", "operation": "Create", "description": "새로운 차량 모델 정보 등록" }
            // Update, Delete 작업은 목록 보기 페이지 내부에서 처리 (UI/UX상 효율적)
          ]
        },
        // CRUD - 경로 및 스팟 기여 (사용자 생성 콘텐츠)
        {
          "name": "경로 및 스팟 기여",
          "menus_crud": [
            { "name": "기여 목록 확인", "path": "/my/contributions", "operation": "Read", "description": "내가 등록/제보한 경로 및 스팟 목록 조회" },
            { "name": "새 경로 등록", "path": "/my/contributions/route/create", "operation": "Create", "description": "새로운 드라이브 경로 정보 입력" },
            { "name": "새 스팟 등록", "path": "/my/contributions/spot/create", "operation": "Create", "description": "새로운 드라이브 스팟 (카페, 포토존 등) 정보 입력" }
             // Update, Delete 작업은 기여 목록 확인 페이지 내부에서 처리
          ]
        },
        // R (Read) - 활동 내역 조회
        {
          "name": "나의 활동 내역",
          "path": "/my/activity",
          "description": "스크랩한 경로, 작성한 리뷰, 다운로드 이력 관리 (Read: 활동 기록)"
        },
        // U (Update) - 계정 정보 수정
        {
          "name": "계정 설정",
          "path": "/my/settings",
          "description": "개인 정보 수정, 비밀번호 변경, 알림 설정 (Update: 사용자 정보)"
        }
        // D (Delete) - 회원 탈퇴는 보통 계정 설정 내부 기능으로 처리
      ]
    },
    "path_detail_page_features": {
      "title": "경로 상세 페이지 (Route Detail Page) 핵심 정보",
      "items": [
        "경로 지도 및 GPX/KML 다운로드 버튼",
        "날씨/계절별 최적성 점수 (실시간 반영)",
        "차량별 사용자 평가 (스포츠카, SUV, EV 등 난이도/경험 리뷰)",
        "경로 주변 추천 드라이브 스팟 연동"
      ]
    }
  }
}
```

---

# Outputs

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>숨길 ; 운전자들만 아는 드라이브 코스 지도</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
    <style>
        /* CSS Reset and Basic Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Noto Sans KR', sans-serif;
            color: #3D2C20; /* Dark Brown */
            background-color: #FDFCF6; /* Cream Beige */
            line-height: 1.6;
            scroll-behavior: smooth;
        }
        a {
            text-decoration: none;
            color: inherit;
        }
        ul {
            list-style: none;
        }

        /* Color Variables */
        :root {
            --dusty-rose: #B08968;
            --rusty-orange: #D79922;
            --cream-beige: #FDFCF6;
            --midnight-green: #54583A;
            --dark-brown: #3D2C20;
        }

        /* Header */
        .header {
            background-color: var(--dusty-rose);
            color: var(--cream-beige);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 2.2rem;
            font-weight: 700;
            letter-spacing: 0.05rem;
            color: var(--cream-beige);
        }
        .logo .subtitle {
            display: block;
            font-size: 0.9rem;
            font-weight: 300;
            margin-top: 0.2rem;
            letter-spacing: 0.02rem;
            opacity: 0.8;
        }
        .nav-menu ul {
            display: flex;
            gap: 2.5rem;
            font-size: 1.1rem;
            font-weight: 500;
        }
        .nav-menu a {
            padding: 0.5rem 0;
            transition: color 0.3s ease, border-bottom 0.3s ease;
            position: relative;
        }
        .nav-menu a::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: var(--rusty-orange);
            transition: width 0.3s ease;
        }
        .nav-menu a:hover::after {
            width: 100%;
        }
        .login-btn {
            background-color: var(--rusty-orange);
            color: var(--dark-brown);
            padding: 0.8rem 1.8rem;
            border-radius: 25px;
            font-weight: 700;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        .login-btn:hover {
            background-color: #e08e00; /* Slightly darker rusty-orange */
            color: var(--cream-beige);
        }

        /* Hero Section */
        .hero {
            position: relative;
            height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--cream-beige);
            text-align: center;
            overflow: hidden;
        }
        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://image.generation/a vintage car on a scenic winding road at sunset, with warm, dusty lighting. Focus on the car and the road stretching into the distance. Romantic and nostalgic feel.') no-repeat center center/cover;
            filter: brightness(0.7) grayscale(0.2);
            z-index: -1;
        }
        .hero-content {
            z-index: 1;
            max-width: 800px;
            padding: 2rem;
        }
        .hero-content h1 {
            font-family: 'Playfair Display', serif;
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.4);
        }
        .hero-content p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            font-weight: 300;
            text-shadow: 1px 1px 5px rgba(0,0,0,0.3);
        }
        .discover-btn {
            background-color: var(--rusty-orange);
            color: var(--dark-brown);
            padding: 1rem 2.5rem;
            border-radius: 30px;
            font-size: 1.2rem;
            font-weight: 700;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .discover-btn:hover {
            background-color: #e08e00;
            transform: translateY(-3px);
        }

        /* Main Content Sections */
        .container {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 0 2rem;
        }
        .section-title {
            font-family: 'Playfair Display', serif;
            font-size: 2.8rem;
            text-align: center;
            margin-bottom: 3rem;
            color: var(--dusty-rose);
            position: relative;
        }
        .section-title::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -15px;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background-color: var(--rusty-orange);
        }

        /* Recommended Routes Section */
        .route-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2.5rem;
        }
        .route-card {
            background-color: var(--cream-beige);
            border: 1px solid rgba(176, 137, 104, 0.3); /* Dusty Rose with opacity */
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 6px 15px rgba(0,0,0,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            display: flex;
            flex-direction: column;
        }
        .route-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.12);
        }
        .route-card-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-bottom: 1px solid rgba(176, 137, 104, 0.2);
        }
        .route-card-content {
            padding: 1.5rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }
        .route-card-content h3 {
            font-family: 'Playfair Display', serif;
            font-size: 1.8rem;
            margin-bottom: 0.8rem;
            color: var(--dusty-rose);
        }
        .route-card-content p {
            font-size: 1rem;
            color: var(--dark-brown);
            margin-bottom: 1rem;
            flex-grow: 1;
        }
        .route-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }
        .route-tag {
            background-color: var(--midnight-green);
            color: var(--cream-beige);
            padding: 0.4rem 0.9rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            opacity: 0.9;
        }

        /* Drive Spots Section */
        .spot-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }
        .spot-card {
            background-color: var(--cream-beige);
            border: 1px solid rgba(176, 137, 104, 0.3);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.06);
            transition: transform 0.3s ease;
        }
        .spot-card:hover {
            transform: translateY(-5px);
        }
        .spot-card-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
        }
        .spot-card-content {
            padding: 1.2rem;
        }
        .spot-card-content h4 {
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            margin-bottom: 0.5rem;
            color: var(--dusty-rose);
        }
        .spot-card-content p {
            font-size: 0.95rem;
            color: var(--dark-brown);
            margin-bottom: 0.8rem;
        }
        .spot-tag {
            background-color: var(--dusty-rose);
            color: var(--cream-beige);
            padding: 0.3rem 0.7rem;
            border-radius: 15px;
            font-size: 0.8rem;
            opacity: 0.8;
        }

        /* Call to Action Section */
        .cta-section {
            background-color: var(--midnight-green);
            color: var(--cream-beige);
            padding: 5rem 2rem;
            text-align: center;
            margin-top: 5rem;
            border-radius: 15px;
        }
        .cta-section h2 {
            font-family: 'Playfair Display', serif;
            font-size: 3rem;
            margin-bottom: 1.5rem;
            color: var(--rusty-orange);
        }
        .cta-section p {
            font-size: 1.3rem;
            max-width: 800px;
            margin: 0 auto 2.5rem auto;
            line-height: 1.8;
            opacity: 0.9;
        }
        .cta-button {
            background-color: var(--rusty-orange);
            color: var(--dark-brown);
            padding: 1.2rem 3rem;
            border-radius: 30px;
            font-size: 1.4rem;
            font-weight: 700;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .cta-button:hover {
            background-color: #e08e00;
            transform: scale(1.05);
        }

        /* Footer */
        .footer {
            background-color: var(--dusty-rose);
            color: var(--cream-beige);
            text-align: center;
            padding: 3rem 2rem;
            margin-top: 5rem;
            font-size: 0.9rem;
        }
        .footer-nav ul {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1.5rem;
        }
        .footer-nav a:hover {
            text-decoration: underline;
        }
        .social-links a {
            color: var(--cream-beige);
            font-size: 1.5rem;
            margin: 0 0.8rem;
            opacity: 0.8;
            transition: opacity 0.3s ease;
        }
        .social-links a:hover {
            opacity: 1;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .header {
                flex-direction: column;
                padding: 1rem;
            }
            .nav-menu ul {
                flex-direction: column;
                gap: 1rem;
                margin-top: 1rem;
            }
            .hero-content h1 {
                font-size: 3rem;
            }
            .hero-content p {
                font-size: 1.2rem;
            }
            .section-title {
                font-size: 2.2rem;
            }
            .route-grid, .spot-grid {
                grid-template-columns: 1fr;
            }
            .cta-section h2 {
                font-size: 2.2rem;
            }
            .cta-section p {
                font-size: 1.1rem;
            }
            .footer-nav ul {
                flex-direction: column;
                gap: 1rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1 class="logo">
            <a href="/">숨길<span class="subtitle">운전자들만 아는 드라이브 코스 지도</span></a>
        </h1>
        <nav class="nav-menu">
            <ul>
                <li><a href="/">홈</a></li>
                <li><a href="/routes/explore">전체 경로 탐색</a></li>
                <li><a href="/spots">드라이브 스팟</a></li>
                <li><a href="/auth/login" class="login-btn">로그인</a></li>
                </ul>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="hero-bg"></div>
            <div class="hero-content">
                <h1>숨겨진 길, 당신의 이야기가 시작되는 곳</h1>
                <p>내비게이션이 알려주지 않는 아름다운 드라이브 코스와 특별한 스팟을 발견하세요.<br>날씨와 계절, 그리고 당신의 차량에 맞춰 완벽한 여정을 추천합니다.</p>
                <a href="/routes/explore" class="discover-btn">숨겨진 길 찾기</a>
            </div>
        </section>

        <section class="container" id="recommended-routes">
            <h2 class="section-title">오늘의 추천 경로</h2>
            <div class="route-grid">
                <div class="route-card">
                    <img src='https://image.generation/a vintage car driving along a coastal road at sunset, with a warm and dreamy atmosphere. The road should curve gently, revealing a vast ocean. The lighting should be golden hour, creating long shadows and a romantic feel.' alt="해안도로 드라이브 코스" class="route-card-img">
                    <div class="route-card-content">
                        <h3>환상의 해안도로</h3>
                        <p>탁 트인 바다와 함께 시원한 바람을 맞으며 달리는 절경의 코스. 특히 노을 질 때 방문하면 잊지 못할 추억을 선사합니다.</p>
                        <div class="route-tags">
                            <span class="route-tag">#해안도로</span>
                            <span class="route-tag">#노을맛집</span>
                            <span class="route-tag">#낭만</span>
                            <span class="route-tag">#맑은날추천</span>
                        </div>
                    </div>
                </div>
                <div class="route-card">
                    <img src='https://image.generation/a winding mountain road surrounded by vibrant autumn foliage. A classic car is parked by the side of the road, and the atmosphere is serene and colorful. Golden and red leaves dominate the scene, evoking a romantic autumn drive.' alt="가을 단풍 와인딩 코스" class="route-card-img">
                    <div class="route-card-content">
                        <h3>깊어가는 가을, 단풍 와인딩</h3>
                        <p>붉게 물든 단풍 터널 속을 드라이브하며 가을의 정취를 만끽하는 코스. 적당한 커브가 운전의 재미를 더합니다.</p>
                        <div class="route-tags">
                            <span class="route-tag">#단풍</span>
                            <span class="route-tag">#와인딩</span>
                            <span class="route-tag">#가을</span>
                            <span class="route-tag">#SUV추천</span>
                        </div>
                    </div>
                </div>
                <div class="route-card">
                    <img src='https://image.generation/a cherry blossom tunnel road in full bloom, with a classic car driving through it. The setting is spring, with soft pink and white cherry petals falling gently. The atmosphere is romantic and ethereal, with gentle lighting.' alt="봄 벚꽃길 드라이브" class="route-card-img">
                    <div class="route-card-content">
                        <h3>흩날리는 벚꽃길 드라이브</h3>
                        <p>봄날 핑크빛 벚꽃잎이 흩날리는 환상적인 길. 잠시 멈춰 사진을 남기기 좋은 포토 스팟들이 곳곳에 숨어있습니다.</p>
                        <div class="route-tags">
                            <span class="route-tag">#벚꽃</span>
                            <span class="route-tag">#봄</span>
                            <span class="route-tag">#사진명소</span>
                            <span class="route-tag">#세단최적</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container" id="drive-spots">
            <h2 class="section-title">드라이버들의 숨겨진 스팟</h2>
            <div class="spot-grid">
                <div class="spot-card">
                    <img src='https://image.generation/a cozy, vintage-style cafe with a large parking lot, and a few classic cars parked outside. The lighting is warm and inviting, suggesting a relaxing stop during a drive.' alt="앤티크 카페 드라이브" class="spot-card-img">
                    <div class="spot-card-content">
                        <h4>시간이 멈춘 앤티크 카페</h4>
                        <p>아름다운 정원이 있는 고즈넉한 카페. 넓은 주차 공간이 있어 동호회 모임에도 좋습니다.</p>
                        <div class="spot-tag">#카페</div>
                        <div class="spot-tag">#주차편리</div>
                        <div class="spot-tag">#포토존</div>
                    </div>
                </div>
                <div class="spot-card">
                    <img src='https://image.generation/a scenic overlook or viewpoint with a clear, beautiful vista, perfect for parking a car and enjoying the view. The atmosphere is serene and natural, ideal for a peaceful stop during a drive.' alt="산정상 뷰포인트" class="spot-card-img">
                    <div class="spot-card-content">
                        <h4>구름 위 산정상 뷰포인트</h4>
                        <p>탁 트인 전망을 자랑하는 비밀스러운 언덕. 커피 한 잔과 함께 경치를 감상하기 좋습니다.</p>
                        <div class="spot-tag">#뷰포인트</div>
                        <div class="spot-tag">#차박추천</div>
                        <div class="spot-tag">#노을</div>
                    </div>
                </div>
                <div class="spot-card">
                    <img src='https://image.generation/a clean, modern car wash bay, sparkling clean and ready for a luxury car. The lighting is bright and efficient, suggesting a high-quality car care facility after a long drive.' alt="프리미엄 세차장" class="spot-card-img">
                    <div class="spot-card-content">
                        <h4>손세차 장인의 프리미엄 세차장</h4>
                        <p>장거리 드라이브 후 지친 내 차에게 선물을! 꼼꼼한 손세차와 디테일링 서비스를 제공합니다.</p>
                        <div class="spot-tag">#세차장</div>
                        <div class="spot-tag">#디테일링</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="cta-section">
            <h2>당신의 숨겨진 길을 공유해주세요!</h2>
            <p>당신만이 아는 특별한 드라이브 코스나 멋진 스팟이 있다면 '숨길'에 공유해주세요.<br>다른 운전자들에게 잊지 못할 경험을 선사하고, '숨길'의 소중한 지도를 함께 만들어갈 수 있습니다.</p>
            <a href="/my/contributions" class="cta-button">나의 경로/스팟 등록하기</a>
        </section>
    </main>

    <footer class="footer">
        <nav class="footer-nav">
            <ul>
                <li><a href="#">이용약관</a></li>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">고객센터</a></li>
                <li><a href="#">제휴 문의</a></li>
            </ul>
        </nav>
        <div class="social-links">
            <a href="#" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Instagram" width="24" height="24"></a>
            <a href="#" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png" alt="Facebook" width="24" height="24"></a>
            <a href="#" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="Twitter" width="24" height="24"></a>
        </div>
        <p>&copy; 2023 숨길. All rights reserved.</p>
    </footer>
</body>
</html>
```