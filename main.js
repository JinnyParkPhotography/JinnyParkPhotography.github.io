// ==================== 동적 갤러리 생성 ====================
// Unsplash API를 사용한 동적 이미지 로드 (50개 다양한 사진)
const galleryImages = [
    // 포트레이트 (다양한 종횡비)
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=650&fit=crop',
    'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=350&h=500&fit=crop',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=700&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=550&fit=crop',
    
    // 풍경 (가로 긴 이미지)
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=450&fit=crop',
    
    // 흑백 / 스타일 사진
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=450&h=600&fit=crop',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=350&h=550&fit=crop',
    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=350&h=700&fit=crop',
    
    // 다양한 크기
    'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=650&fit=crop',
    'https://images.unsplash.com/photo-1606933248051-5ce98adc16fa?w=450&h=600&fit=crop',
    
    // 가로 풍경
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=900&h=450&fit=crop',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=500&fit=crop',
    
    // 세로 포트레이트
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=350&h=700&fit=crop',
    'https://images.unsplash.com/photo-1507527173827-98efcfb09865?w=400&h=650&fit=crop',
    
    // 추가 사진들
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1500707802500-b94f14775281?w=400&h=550&fit=crop',
    'https://images.unsplash.com/photo-1532317386003-74cebe250c8d?w=350&h=700&fit=crop',
    'https://images.unsplash.com/photo-1514306688908-79e6f4f926bf?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=450&h=600&fit=crop',
    'https://images.unsplash.com/photo-1521133573892-e44906baee46?w=400&h=650&fit=crop',
    
    // 더 많은 이미지들 (총 50개)
    'https://images.unsplash.com/photo-1520763185298-1b434c919abe?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=350&h=700&fit=crop',
    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=450&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=650&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&h=500&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1507527173827-98efcfb09865?w=350&h=700&fit=crop',
    'https://images.unsplash.com/photo-1500707802500-b94f14775281?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1514306688908-79e6f4f926bf?w=800&h=450&fit=crop',
    
    'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=650&fit=crop',
    'https://images.unsplash.com/photo-1606933248051-5ce98adc16fa?w=450&h=600&fit=crop',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=900&h=500&fit=crop',
    'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=350&h=700&fit=crop',
    
    'https://images.unsplash.com/photo-1507527173827-98efcfb09865?w=400&h=650&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1500707802500-b94f14775281?w=400&h=550&fit=crop',
    'https://images.unsplash.com/photo-1532317386003-74cebe250c8d?w=350&h=700&fit=crop',
    'https://images.unsplash.com/photo-1514306688908-79e6f4f926bf?w=800&h=450&fit=crop',
    
    'https://images.unsplash.com/photo-1520763185298-1b434c919abe?w=500&h=600&fit=crop',
    'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=350&h=700&fit=crop',
    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=450&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=650&fit=crop',
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&h=500&fit=crop'
];

document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('galleryGrid');
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalClose = document.getElementById('modalClose');

    // 갤러리 아이템 동적 생성
    galleryImages.forEach((imageSrc, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.index = index;

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = `Gallery Image ${index + 1}`;
        img.loading = 'lazy'; // Lazy loading

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.textContent = 'Click to view';

        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);

        // 클릭 이벤트
        galleryItem.addEventListener('click', function() {
            modalImage.src = imageSrc;
            modalTitle.textContent = `Photo ${index + 1}`;
            modalDescription.textContent = 'Professional Photography';
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        galleryGrid.appendChild(galleryItem);
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
        document.body.style.overflow = 'auto';
    }

    // ESC 키 닫기
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

            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!subject || !message) {
                alert('제목과 내용을 모두 입력해주세요.');
                return;
            }

            const confirmed = confirm('정말로 메일을 보내시겠습니까?');

            if (confirmed) {
                const emailTo = 'your-email@example.com'; // 이메일 주소 입력 필요
                const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

                window.location.href = mailtoLink;
                contactForm.reset();
                alert('메일 프로그램이 열렸습니다.');
            }
        });
    }
});

// ==================== 네비게이션 활성 상태 업데이트 ====================
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
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
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(255, 255, 255, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
