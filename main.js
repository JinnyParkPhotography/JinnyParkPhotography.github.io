// ==================== 갤러리 모달 기능 ====================
document.addEventListener('DOMContentLoaded', function() {
    // 갤러리 아이템 선택
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalClose = document.getElementById('modalClose');

    // 갤러리 아이템 클릭 이벤트
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const image = this.querySelector('img');
            const imageAlt = image.alt;
            const imageSrc = image.src;

            // 모달에 이미지 정보 설정
            modalImage.src = imageSrc;
            modalTitle.textContent = `Photo ${index + 1}`;
            modalDescription.textContent = imageAlt || 'Professional Photography';

            // 모달 표시
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // 스크롤 비활성화
        });
    });

    // 모달 닫기 (X 버튼)
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // 모달 배경 클릭 시 닫기
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // 모달 닫기 함수
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // 스크롤 활성화
    }

    // ESC 키 눌���을 때 모달 닫기
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// ==================== Contact 폼 기능 ====================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // 폼 데이터 가져오기
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // 입력값 검증
            if (!subject || !message) {
                alert('제목과 내용을 모두 입력해주세요.');
                return;
            }

            // 사용자 확인
            const confirmed = confirm('정말로 메일을 보내시겠습니까?');

            if (confirmed) {
                // mailto 링크 생성 및 실행
                const emailTo = 'your-email@example.com'; // 이메일 주소로 변경 필요
                const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

                // 메일 클라이언트 열기
                window.location.href = mailtoLink;

                // 폼 초기화
                contactForm.reset();
                alert('메일 프로그램이 열렸습니다.');
            }
        });
    }
});

// ==================== 네비게이션 활성 상태 업데이트 ====================
document.addEventListener('DOMContentLoaded', function() {
    // 현재 페이지 URL 가져오기
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // 모든 네비게이션 링크 선택
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ==================== 스크롤 효과 ====================
document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 시 헤더 효과 추가 가능 (선택사항)
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(255, 255, 255, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
