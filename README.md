# 한양여자대학교 항공과 홍보 홈페이지 제안 시안

학생 친화적인 모바일 우선 학과 홍보 사이트입니다. 공식 사이트가 아니며 학교의 운영 승인을 받지 않은 제안용 결과물입니다.

## 바로 보기
- 내려받은 폴더에서 preview.html을 더블클릭하면 설치 없이 화면과 탭을 확인할 수 있습니다.
- 실제 배포는 index.html, styles.css, app.js, assets 폴더, .nojekyll을 사용합니다.
- 외부 라이브러리, 사진 CDN, 빌드 도구가 없습니다. 글씨체는 첫 시안의 시스템 고딕 스타일을 사용하며 외부 웹폰트는 포함하지 않습니다. 비행기 창 일러스트는 HTML 안의 자체 작성 SVG입니다.

## 구성
- 홍보 메인: 항공 서비스 인재라는 방향과 입학 안내
- 학과 소개, 교육 분야 3개, 진출 분야
- 재학생 / 입학 관심자별 공식 바로가기 탭
- 모바일 메뉴, FAQ, 키보드 탭 이동, 동작 줄이기 설정 대응
- 개인정보 수집, 로그인, 댓글, 상담 신청 양식, 추적 스크립트 없음

## GitHub Pages로 공개하는 방법
1. GitHub에 로그인하고 새 Public 저장소를 만듭니다. 예: hywu-air. 학교 승인 후에는 개인 계정보다 학교 또는 학과 관리 조직의 소유를 권장합니다.
2. ZIP을 해제한 후 폴더 자체가 아니라 배포 파일을 저장소 최상위에 올립니다. index.html이 저장소 첫 화면 파일 목록에 보여야 합니다.
3. Add file > Upload files에서 업로드하고 Commit changes를 누릅니다. .nojekyll은 숨김 파일이므로 누락되면 Add file > Create new file에서 이름을 .nojekyll로 생성해도 됩니다.
4. Settings > Pages > Build and deployment에서 Source를 Deploy from a branch로, Branch를 main 및 /(root)로 설정하고 Save합니다.
5. Actions에서 배포 완료를 확인한 후 Settings > Pages의 Visit site로 확인합니다.
6. 프로젝트 저장소라면 보통 https://계정명.github.io/hywu-air/ 형태입니다. 계정명.github.io라는 이름의 저장소를 쓰면 루트 주소에 게시됩니다.
7. 휴대폰으로 주소를 열어 메뉴, 공식 안내 링크, 글자 크기를 확인합니다.

GitHub의 UI 문구는 변경될 수 있습니다. Public 저장소의 소스와 수정 기록은 누구나 볼 수 있으니 개인정보, 비밀번호, 학생 성적, 연락처 목록을 올리지 마세요.

## 비용과 한계
- GitHub Free의 공개 저장소 + 기본 github.io 주소: GitHub Pages 무료 이용 가능.
- 별도 도메인: 선택 사항이며 등록·갱신 비용은 도메인 업체에 별도 지불.
- 개발 서버/DB 유지비 없음. 콘텐츠 편집·검토에는 담당자의 시간이 필요합니다.
- 정적 사이트라 회원 게시판, 실시간 상담, 비공개 자료, 자체 관리자 화면은 포함되지 않습니다.
- 무료 호스팅도 사용량 제한이 있습니다. 사이트 크기 최대 1GB, 월 대역폭 소프트 한도 100GB 등이 적용됩니다. 고화질 영상은 직접 올리기보다 학교 승인 채널의 영상 링크를 권장합니다.

## 내용 수정
- 공식 링크와 학생 가이드 카드: index.html의 href와 카드 내용을 수정하세요. 모든 링크와 양쪽 안내 패널은 HTML에 직접 들어 있습니다.
- 메인 문구, 교육 내용, FAQ, 공유용 제목·설명: index.html 수정.
- 색상, 간격, 반응형: styles.css 수정.
- 메뉴와 탭 로직: app.js.
- preview.html은 검토용 자체 포함 스냅샷입니다. 배포 파일을 고쳐도 자동 갱신되지 않으므로 실제 배포 후에는 index.html의 사이트를 기준으로 확인하세요. preview.html은 저장소에 올리지 않아도 됩니다.
- 배포 후 수정은 GitHub 웹에서 해당 파일 > Edit > Commit changes로 가능합니다. 기록이 남으므로 오류 시 이전 커밋으로 되돌릴 수 있습니다.

## 운영 및 홍보 제안
1. 담당자 1명 + 검토자 1명 지정, GitHub 2단계 인증 활성화.
2. 초기에는 공식 사이트와 경쟁하지 않는 홍보·안내 허브로 운영.
3. 학교 승인된 실제 실습 사진과 학생 인터뷰를 추가. 촬영·게시 동의 및 저작권 확인 필수.
4. 입시 시즌에는 모집요강 링크와 안내 문구를 주 1회 점검. 날짜를 복제하지 않고 공식 안내를 우선 연결.
5. 학과 승인 SNS 프로필과 QR 안내물에 같은 사이트 주소 사용. 검증되지 않은 SNS 계정은 현재 시안에 넣지 않았습니다.
6. 추후 소식 발행량이 늘면 Jekyll 또는 Astro의 Markdown 게시물 구조를 도입. 현재는 빌드 없이 배포 가능한 최소 구조로 시작합니다.
7. 검색 노출은 title/description을 갖춘 상태입니다. 공개 URL 결정 후 canonical, sitemap.xml, 공유 이미지와 검색도구 등록을 추가해야 합니다. 검색 노출과 모집 성과를 보장하지 않습니다.

## 공개 전 체크리스트
- [ ] 학교명·학과명 사용, 운영 주체 및 공개 승인 확인
- [ ] 공식·비공식 여부를 명확히 표기. 승인 없이 공식 홈페이지라고 표현하지 않기
- [ ] 홍보 문구 및 교육과정 최신성 검토
- [ ] 학생 사진·인터뷰의 게시 동의 및 사진 저작권 확인
- [ ] 입학처·공지·학사일정 등 모든 외부 링크 확인
- [ ] 실제 운영 담당자와 수정·인수인계 절차 결정
- [ ] 무료 공개 저장소에 게시하면 안 되는 자료가 없는지 확인
- [ ] 공식 운영으로 전환할 경우 시안 표시 변경과 개인정보 처리 여부 재검토

## 확인한 근거 (2026-11-09)
- 학과 공식 소개, 교육 분야 및 진출 분야: https://www.hywoman.ac.kr/dept/airlineservice.html
- 학과 공식 홈페이지 및 메뉴: https://www.hywoman.ac.kr/airlineservice/index.do
- 대학 입학처: https://www.hywoman.ac.kr/hyw_admission/index.do
- GitHub Pages 개요: https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages
- 무료 공개 저장소 조건 및 배포: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- 사용량 제한: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

참고: 공식 소개의 만족도·충원율·취업 관련 수치는 기준 연도나 산출 근거를 확인하지 못하여 사용하지 않았습니다. 교수 이름·학생 후기·현재 입시 일정은 임의 생성하지 않았습니다. 실제 학교 사진은 사용하지 않았습니다. 학교 공식 홈페이지의 CI를 사용했으며 색상·비율을 변형하지 않았습니다. 공개 전 학교의 CI 사용 승인을 확인해야 합니다.

## 2차 디자인 수정
- 학교 공식 CI: 공식 학과 사이트의 PNG 원본, 학교 공식 파비콘 적용.
- 로고 출처: https://www.hywoman.ac.kr/ajaxfile/CmnFileCpnt/fileView.do?gbn=x01&SITE_GROUP_NO=4&SITE_NO=32
- 학교 UI 안내: https://www.hywoman.ac.kr/ko/cms/FrCon/index.do?MENU_ID=160
- 글씨체: 3차 수정에서 첫 시안의 고딕 스타일로 복원. Pretendard가 설치되어 있으면 우선 적용하고 Apple SD Gothic Neo, Malgun Gothic, sans-serif 순으로 대체됩니다.
- 네이비 #002D72, 하늘색 #B9E5FB, 연한 블루 배경 적용. 대한항공을 연상시키는 색감의 자체 디자인이며 대한항공의 공식 색상 가이드 재현이나 제휴·후원 표시는 아닙니다. 항공사 로고는 사용하지 않았습니다.
- CI 이미지 파일은 저작권 양도나 자유 재배포 라이선스가 부여된 것이 아닙니다. 본 시안은 외부에 공개하지 않았으며 실제 배포 전 학교 승인 확인이 필요합니다.

## 3차 수정
사용자 요청에 따라 고운바탕·고운돋움을 제거하고 첫 시안의 고딕 글꼴·제목 굵기로 복원했습니다. 학교 공식 CI 및 파랑·하늘색 테마는 유지합니다.

## SEO 개선 반영
- 모든 링크 주소를 HTML href로 제공. JavaScript 없이 재학생·지원자 카드 모두 표시.
- 페이지 title/description 및 H1/H2를 학과명·교육과정·진로 중심으로 개선.
- 진로·자격증 FAQ 및 공식 출처 링크 보강. 확인하지 않은 학생 후기·성과는 생성하지 않음.
- Open Graph 제목·설명·로케일, Twitter summary 태그 추가.
- 검토용 preview.html은 noindex 처리되며 배포 ZIP에서 제외. 배포 ZIP에는 원본 정적 사이트만 포함.
- content.js는 제거. 카드와 링크는 index.html에서 수정.

### 공개 URL 확정 후 남은 작업
1. index.html에 실제 자기 사이트의 HTTPS canonical을 추가. 학교 공식 사이트 주소를 이 사이트의 canonical로 넣지 마세요.
2. og:url 및 공유 이미지의 절대 URL(og:image)을 실제 배포 주소로 설정. 이미지의 사용 권한과 표시 상태 확인. 현재는 제목·설명만 지정됨.
3. sitemap.xml에 실제 사이트 URL을 넣고 제출. 1페이지 사이트이므로 미작성 자체가 색인 차단은 아닙니다.
4. robots.txt는 호스트 루트에서 관리. GitHub 프로젝트 경로 아래 robots.txt는 해당 호스트의 루트 robots.txt를 대체하지 못함.
5. 학과 전용 루트 주소 또는 별도 도메인으로 운영하면 네이버 호스트 소유 확인이 수월함.
6. Google Search Console / 네이버 서치어드바이저 소유 확인 및 사이트맵 제출, 실제 URL 검사.
7. 실제 공개 URL에서 HTTP 상태·HTTPS·모바일·PageSpeed 및 색인 가능 여부 확인.
8. 학교 승인 전 공개 검토본은 noindex 유지. 본 배포 index.html에는 noindex를 임의 적용하지 않았으므로 승인 전 공개 배포하지 않기.

※ 검색 순위 또는 색인 반영은 보장하지 않습니다. OG 태그는 공유 미리보기 보완이며 검색 순위를 보장하지 않습니다. 구조화 데이터는 운영 주체가 확인된 후 실제 내용에 맞는 유형으로 추가해야 하며, 학교 공식 기관을 사칭하는 Organization 마크업은 넣지 않았습니다.
