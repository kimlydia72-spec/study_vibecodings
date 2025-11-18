# Prompts

당신은 웹 디자이너(UI/UX), 웹 퍼블리셔(UI개발자), 프론트엔드 개발자, 백엔드 개발자, 풀스택 개발자의 경력이 각각 30년씩 있는 전문가 집단입니다.
아래 내용을 참조하여 웹페이지 UI 및 디자인을 리뉴얼 업데이트 해주세요.

[목표 : 기존 웹페이지 리뉴얼]

* 가이드라인 :
1) 기존 웹페이지의 HTML 참조하여 HTML로 출력.
2) 하위 메뉴 구성 포맷은 그대로 유지할 것.
3) 다음과 같이 네 개의 색상을 컨셉으로 하여 웹페이지 구성 :
크림 베이지 (#FFF7E9) - 메인 배경, 🟧 웜 오렌지 (#FFA756) - 보조/포인트, 🟥 코랄 레드 (#FF6B6B)- 강조 (CTA), 🟫 다크 브라운 (#4E342E)의 컬러 - 텍스트 및 기본 UI
4) '인기 레시피' 또는 '오늘의 추천 레시피 보기'의 메뉴는 클릭하면 '레시피 보기'가 가능하도록 유지하여야 하나, 메뉴를 보여주는 방식은 좀 더 자유로운 방식으로 구성해도 됩니다.
5) 각 레시피 또는 메뉴의 사진은 웹 서칭 또는 이미지 생성을 통해 어울리는 이미지가 들어갈 수 있도록 해주세요. 


[기존 웹페이지 HTML]
```
 <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Mark - 혼밥 레시피</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">Food Mark</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">홈</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="recipes.html">레시피</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="ingredients.html">식재료</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="레시피 검색" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">검색</button>
                </form>
            </div>
        </div>
    </nav>

    <main class="container my-4">
        <section class="jumbotron text-center p-5 rounded mb-5">
            <h1 class="display-4 text-white">혼밥족을 위한 간편 레시피</h1>
            <p class="lead text-white">혼자서도 맛있고 건강하게! Food Mark가 제안하는 초간단 레시피를 만나보세요.</p>
            <a href="recipes.html" class="btn btn-primary btn-lg mt-3">오늘의 추천 레시피 보기</a>
        </section>

        <section class="mb-5">
            <h2 class="text-center mb-4">인기 레시피</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/400x200/000000/FFFFFF?text=Kimchi+Jjigae" class="card-img-top" alt="김치찌개">
                        <div class="card-body">
                            <h5 class="card-title">돼지고기 김치찌개</h5>
                            <p class="card-text">한국인의 소울푸드, 김치찌개를 15분 만에 만드는 비법!</p>
                            <a href="recipe-detail.html" class="btn btn-primary">레시피 보기</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/400x200/000000/FFFFFF?text=Ganjang+Gyeranbap" class="card-img-top" alt="계란밥">
                        <div class="card-body">
                            <h5 class="card-title">간장 계란밥</h5>
                            <p class="card-text">자취생 필수 요리! 5분이면 완성되는 마약 간장 계란밥.</p>
                            <a href="recipe-detail.html" class="btn btn-primary">레시피 보기</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card h-100">
                        <img src="https://via.placeholder.com/400x200/000000/FFFFFF?text=Alio+Olio" class="card-img-top" alt="파스타">
                        <div class="card-body">
                            <h5 class="card-title">알리오 올리오</h5>
                            <p class="card-text">냉장고 속 재료로 뚝딱! 레스토랑 부럽지 않은 알리오 올리오.</p>
                            <a href="recipe-detail.html" class="btn btn-primary">레시피 보기</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="text-center text-lg-start mt-auto">
        <div class="container p-4">
            <div class="row">
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Food Mark</h5>
                    <p>
                        Food Mark는 1인 가구를 위한 쉽고 맛있는 레시피를 제공합니다.
                    </p>
                </div>
            </div>
        </div>
        <div class="text-center p-3">
            © 2025 Food Mark. All rights reserved.
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
```

---
# Outputs

```
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Food Mark - 혼밥 레시피 (리뉴얼)</title>
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Alpine.js (모바일 메뉴 토글용) -->
    <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    
    <!-- Noto Sans KR (가독성 높은 한글 폰트) -->
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet">
    
    <!-- Tailwind Custom Config -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    // 가이드라인의 4가지 색상을 테마로 지정
                    colors: {
                        'cream-beige': '#FFF7E9', // 메인 배경
                        'warm-orange': '#FFA756', // 보조/포인트
                        'coral-red': '#FF6B6B',   // 강조 (CTA)
                        'dark-brown': '#4E342E',  // 텍스트 및 기본 UI
                    },
                    // 기본 폰트를 Noto Sans KR로 설정
                    fontFamily: {
                        'sans': ['"Noto Sans KR"', 'sans-serif'],
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-cream-beige text-dark-brown antialiased">

    <!-- 
      네비게이션 바 (Header)
      - Alpine.js를 사용하여 모바일 메뉴 토글 기능 구현
      - 'dark-brown'을 기본 텍스트 색상으로, 'warm-orange'를 호버 색상으로 사용
    -->
    <nav class="bg-cream-beige shadow-sm" x-data="{ open: false }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <!-- 로고 -->
                <div class="flex-shrink-0 flex items-center">
                    <a href="index.html" class="text-2xl font-bold text-dark-brown">Food Mark</a>
                </div>
                
                <!-- 데스크탑 메뉴 -->
                <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <a href="index.html" class="inline-flex items-center px-1 pt-1 border-b-2 border-warm-orange text-dark-brown font-medium">홈</a>
                    <a href="recipes.html" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-gray-600 hover:border-warm-orange hover:text-dark-brown font-medium">레시피</a>
                    <a href="ingredients.html" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-gray-600 hover:border-warm-orange hover:text-dark-brown font-medium">식재료</a>
                </div>
                
                <!-- 검색창 -->
                <div class="hidden sm:ml-6 sm:flex sm:items-center">
                    <form class="flex" action="#" method="GET">
                        <input class="form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-dark-brown rounded-l-md transition ease-in-out m-0 focus:text-dark-brown focus:bg-white focus:border-warm-orange focus:outline-none" type="search" placeholder="레시피 검색" aria-label="Search">
                        <button class="bg-warm-orange text-dark-brown px-4 py-2 rounded-r-md font-medium hover:bg-opacity-80 transition" type="submit">검색</button>
                    </form>
                </div>
                
                <!-- 모바일 메뉴 버튼 -->
                <div class="-mr-2 flex items-center sm:hidden">
                    <button @click="open = !open" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-dark-brown hover:bg-warm-orange hover:bg-opacity-30 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">메뉴 열기</span>
                        <!-- Icon when menu is closed. -->
                        <svg x-show="!open" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-8 6h8" />
                        </svg>
                        <!-- Icon when menu is open. -->
                        <svg x-show="open" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- 모바일 메뉴 (토글) -->
        <div x-show="open" x-transition class="sm:hidden" id="mobile-menu">
            <div class="pt-2 pb-3 space-y-1">
                <a href="index.html" class="bg-warm-orange bg-opacity-20 border-warm-orange text-dark-brown block pl-3 pr-4 py-2 border-l-4 text-base font-medium">홈</a>
                <a href="recipes.html" class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-warm-orange hover:text-dark-brown block pl-3 pr-4 py-2 border-l-4 text-base font-medium">레시피</a>
                <a href="ingredients.html" class="border-transparent text-gray-600 hover:bg-gray-50 hover:border-warm-orange hover:text-dark-brown block pl-3 pr-4 py-2 border-l-4 text-base font-medium">식재료</a>
            </div>
            <div class="p-4 border-t border-dark-brown border-opacity-10">
                <form class="flex" action="#" method="GET">
                    <input class="form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-dark-brown rounded-l-md focus:border-warm-orange focus:outline-none" type="search" placeholder="레시피 검색" aria-label="Search">
                    <button class="bg-warm-orange text-dark-brown px-4 py-2 rounded-r-md font-medium" type="submit">검색</button>
                </form>
            </div>
        </div>
    </nav>

    <!-- 메인 컨텐츠 -->
    <main class="container mx-auto my-4 px-4">
        
        <!-- 
          히어로 섹션 (Jumbotron 대체)
          - 'warm-orange'를 은은한 배경색으로 사용
          - CTA 버튼에 'coral-red'를 사용하여 강조
        -->
        <section class="text-center p-10 md:p-16 rounded-lg mb-12" style="background-color: rgba(255, 167, 86, 0.15);">
            <h1 class="text-4xl md:text-5xl font-extrabold text-dark-brown mb-4">혼밥족을 위한 간편 레시피</h1>
            <p class="text-lg text-dark-brown text-opacity-80 max-w-2xl mx-auto mb-8">
                혼자서도 맛있고 건강하게! Food Mark가 제안하는 초간단 레시피를 만나보세요.
            </p>
            <!-- CTA 버튼 ('coral-red' 사용) -->
            <a href="recipes.html" class="inline-block bg-coral-red text-cream-beige font-bold py-3 px-8 rounded-lg text-lg shadow-md hover:bg-opacity-90 transition-all transform hover:scale-105">
                오늘의 추천 레시피 보기
            </a>
        </section>

        <!-- 
          인기 레시피 섹션
          - 가이드라인에 따라 자유로운 형식 (모던한 3단 카드 그리드)으로 구성
          - 이미지 플레이스홀더를 사용하여 실제 레시피 사진처럼 보이도록 함
        -->
        <section class="mb-5">
            <h2 class="text-3xl font-bold text-center mb-10 text-dark-brown">인기 레시피</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <!-- 레시피 카드 1 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                    <img src="https://placehold.co/600x400/FF6B6B/FFF7E9?text=Kimchi+Jjigae&font=notosans" class="w-full h-56 object-cover" alt="돼지고기 김치찌개">
                    <div class="p-6">
                        <h5 class="text-2xl font-bold mb-2 text-dark-brown">돼지고기 김치찌개</h5>
                        <p class="text-dark-brown text-opacity-70 mb-5">한국인의 소울푸드, 김치찌개를 15분 만에 만드는 비법!</p>
                        <!-- 레시피 보기 버튼 ('warm-orange' 사용) -->
                        <a href="recipe-detail.html" class="inline-block bg-warm-orange text-dark-brown font-semibold py-2 px-5 rounded-md shadow-sm hover:bg-opacity-80 transition-all">
                            레시피 보기
                        </a>
                    </div>
                </div>
                
                <!-- 레시피 카드 2 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                    <img src="https://placehold.co/600x400/FFA756/4E342E?text=Gyeranbap&font=notosans" class="w-full h-56 object-cover" alt="간장 계란밥">
                    <div class="p-6">
                        <h5 class="text-2xl font-bold mb-2 text-dark-brown">간장 계란밥</h5>
                        <p class="text-dark-brown text-opacity-70 mb-5">자취생 필수 요리! 5분이면 완성되는 마약 간장 계란밥.</p>
                        <a href="recipe-detail.html" class="inline-block bg-warm-orange text-dark-brown font-semibold py-2 px-5 rounded-md shadow-sm hover:bg-opacity-80 transition-all">
                            레시피 보기
                        </a>
                    </div>
                </div>
                
                <!-- 레시피 카드 3 -->
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1">
                    <img src="https://placehold.co/600x400/4E342E/FFF7E9?text=Alio+Olio&font=notosans" class="w-full h-56 object-cover" alt="알리오 올리오">
                    <div class="p-6">
                        <h5 class="text-2xl font-bold mb-2 text-dark-brown">알리오 올리오</h5>
                        <p class="text-dark-brown text-opacity-70 mb-5">냉장고 속 재료로 뚝딱! 레스토랑 부럽지 않은 알리오 올리오.</p>
                        <a href="recipe-detail.html" class="inline-block bg-warm-orange text-dark-brown font-semibold py-2 px-5 rounded-md shadow-sm hover:bg-opacity-80 transition-all">
                            레시피 보기
                        </a>
                    </div>
                </div>
                
            </div>
        </section>
    </main>

    <!-- 
      푸터 (Footer)
      - 메인 배경색('cream-beige')을 그대로 사용하되, 'warm-orange'로 상단 구분선 추가
    -->
    <footer class="bg-cream-beige text-dark-brown mt-16 border-t-2 border-warm-orange border-opacity-30">
        <div class="max-w-7xl mx-auto p-8 text-center">
            <h5 class="text-xl font-bold mb-2">Food Mark</h5>
            <p class="text-opacity-70 mb-4">
                Food Mark는 1인 가구를 위한 쉽고 맛있는 레시피를 제공합니다.
            </p>
            <div class="text-center text-opacity-50">
                © 2025 Food Mark. All rights reserved.
            </div>
        </div>
    </footer>

</body>
</html>
```
