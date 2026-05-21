// ==================== 갤러리 데이터 (객체 배열) ====================
const galleryImages = [
    {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
        title: 'Portrait Session',
        description: 'A professional portrait photography session',
        tags: ['portrait', 'people', 'professional']
    },
    {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
        title: 'Natural Light',
        description: 'Captured in natural daylight',
        tags: ['portrait', 'natural light', 'outdoor']
    },
    {
        url: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=500&fit=crop',
        title: 'Studio Work',
        description: 'Professional studio photography',
        tags: ['studio', 'fashion', 'professional']
    },
    {
        url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop',
        title: 'Landscape Beauty',
        description: 'Beautiful landscape photography',
        tags: ['landscape', 'nature', 'outdoor']
    },
    {
        url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop',
        title: 'People Photography',
        description: 'Candid people photography',
        tags: ['people', 'candid', 'portrait']
    },
    {
        url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
        title: 'Nature Details',
        description: 'Close-up nature photography',
        tags: ['nature', 'details', 'macro']
    },
    {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
        title: 'Mountain Views',
        description: 'Scenic mountain landscape',
        tags: ['landscape', 'nature', 'outdoor']
    },
    {
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=500&fit=crop',
        title: 'Monochrome Art',
        description: 'Black and white artistic photography',
        tags: ['black and white', 'art', 'studio']
    },
    {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=500&fit=crop',
        title: 'Urban Style',
        description: 'Urban fashion photography',
        tags: ['fashion', 'urban', 'style']
    },
    {
        url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop',
        title: 'Golden Hour',
        description: 'Photography during golden hour',
        tags: ['outdoor', 'natural light', 'landscape']
    },
    {
        url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500&h=500&fit=crop',
        title: 'Professional Portrait',
        description: 'High-end professional portrait',
        tags: ['portrait', 'professional', 'people']
    },
    {
        url: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&h=500&fit=crop',
        title: 'Ocean Waves',
        description: 'Seascape photography',
        tags: ['landscape', 'nature', 'outdoor']
    },
    {
        url: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=500&fit=crop',
        title: 'Fashion Forward',
        description: 'Contemporary fashion shoot',
        tags: ['fashion', 'style', 'studio']
    },
    {
        url: 'https://images.unsplash.com/photo-1606933248051-5ce98adc16fa?w=500&h=500&fit=crop',
        title: 'Artistic Vision',
        description: 'Artistic and creative photography',
        tags: ['art', 'creative', 'studio']
    },
    {
        url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop',
        title: 'Street Photography',
        description: 'Candid street photography',
        tags: ['street', 'urban', 'candid']
    },
    {
        url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=500&fit=crop',
        title: 'Sunset Landscape',
        description: 'Landscape during sunset',
        tags: ['landscape', 'nature', 'outdoor']
    },
    {
        url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop',
        title: 'Elegant Portrait',
        description: 'Elegant and sophisticated portrait',
        tags: ['portrait', 'elegant', 'professional']
    },
    {
        url: 'https://images.unsplash.com/photo-1507527173827-98efcfb09865?w=500&h=500&fit=crop',
        title: 'Casual Beauty',
        description: 'Natural beauty photography',
        tags: ['portrait', 'natural', 'people']
    },
    {
        url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop',
        title: 'Model Photography',
        description: 'Professional model shoot',
        tags: ['fashion', 'model', 'studio']
    },
    {
        url: 'https://images.unsplash.com/photo-1500707802500-b94f14775281?w=500&h=500&fit=crop',
        title: 'Desert Landscape',
        description: 'Desert landscape photography',
        tags: ['landscape', 'nature', 'outdoor']
    },
    {
        url: 'https://images.unsplash.com/photo-1532317386003-74cebe250c8d?w=500&h=500&fit=crop',
        title: 'Black and White Portrait',
        description: 'Monochrome portrait session',
        tags: ['black and white', 'portrait', 'studio']
    },
    {
        url: 'https://images.unsplash.com/photo-1514306688908-79e6f4f926bf?w=500&h=500&fit=crop',
        title: 'Product Photography',
        description: 'Professional product photography',
        tags: ['product', 'studio', 'professional']
    },
    {
        url: 'https://images.unsplash.com/photo-1520763185298-1b434c919abe?w=500&h=500&fit=crop',
        title: 'Lifestyle',
        description: 'Lifestyle and everyday photography',
        tags: ['lifestyle', 'candid', 'outdoor']
    },
    {
        url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&h=500&fit=crop',
        title: 'Corporate Portrait',
        description: 'Professional corporate headshot',
        tags: ['portrait', 'corporate', 'professional']
    },
    {
        url: 'https://images.unsplash.com/photo-1521133573892-e44906baee46?w=500&h=500&fit=crop',
        title: 'Wedding Photography',
        description: 'Candid wedding photography',
        tags: ['wedding', 'people', 'candid']
    },
    {
        url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
        title: 'Macro Photography',
        description: 'Detailed macro photography',
        tags: ['macro', 'details', 'nature']
    },
    {
        url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&h=500&fit=crop',
        title: 'Travel Photography',
        description: 'Travel and adventure photography',
        tags: ['travel', 'landscape', 'outdoor']
    },
    {
        url: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop',
        title: 'Nature in Detail',
        description: 'Detailed nature photography',
        tags: ['nature', 'details', 'macro']
    },
    {
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=500&fit=crop',
        title: 'Artistic Black and White',
        description: 'Creative black and white art',
        tags: ['black and white', 'art', 'creative']
    },
    {
        url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=500&fit=crop',
        title: 'Street Fashion',
        description: 'Street fashion photography',
        tags: ['fashion', 'street', 'urban']
    }
];

// ==================== 상태 관리 ====================
let activeFilters = new Set(); // 활성화된 필터들을 저장하는 Set

// ==================== 유틸리티 함수 ====================
// 모든 고유 태그 추출
function extractAllTags() {
    const tagsSet = new Set();
    galleryImages.forEach(image => {
        image.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
}

// 필터된 이미지 가져오기
function getFilteredImages() {
    if (activeFilters.size === 0) {
        // 활성화된 필터가 없으면 모든 이미지 반환 (전체 보기)
        return galleryImages;
    }
    // 활성화된 필터 중 하나라도 포함하는 이미지 반환
    return galleryImages.filter(image => 
        image.tags.some(tag => activeFilters.has(tag))
    );
}

// ==================== DOM 렌더링 함수 ====================
// 필터 버튼 렌더링
function renderFilterButtons() {
    const filterButtonsContainer = document.getElementById('filterButtons');
    const allTags = extractAllTags();
    filterButtonsContainer.innerHTML = '';

    // 태그 버튼들
    allTags.forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = tag;
        btn.dataset.filter = tag;
        btn.addEventListener('click', function() {
            toggleFilter(tag);
        });
        filterButtonsContainer.appendChild(btn);
    });
}

// 갤러리 렌더링
function renderGallery(images) {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';

    images.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item loading';
        galleryItem.dataset.index = index;

        const img = document.createElement('img');
        img.src = image.url;
        img.alt = image.title;
        img.loading = 'lazy';

        // 이미지 로드 완료 시 스켈레톤 제거
        img.addEventListener('load', function() {
            galleryItem.classList.remove('loading');
        });

        // 이미지 로드 실패
        img.addEventListener('error', function() {
            galleryItem.classList.remove('loading');
            galleryItem.style.backgroundColor = '#555555';
        });

        const overlay = document.createElement('div');
        overlay.className = 'overlay';

        const overlayTitle = document.createElement('div');
        overlayTitle.className = 'overlay-title';
        overlayTitle.textContent = image.title;

        const overlayTags = document.createElement('div');
        overlayTags.className = 'overlay-tags';

        image.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'overlay-tag';
            tagSpan.textContent = tag;
            overlayTags.appendChild(tagSpan);
        });

        overlay.appendChild(overlayTitle);
        overlay.appendChild(overlayTags);

        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);

        // 클릭 이벤트
        galleryItem.addEventListener('click', function() {
            openModal(image);
        });

        galleryGrid.appendChild(galleryItem);
    });
}

// 토글 필터 (태그 버튼 클릭)
function toggleFilter(tag) {
    if (activeFilters.has(tag)) {
        // 이미 활성화된 필터 → 비활성화
        activeFilters.delete(tag);
    } else {
        // 비활성화된 필터 → 활성화
        activeFilters.add(tag);
    }

    // 버튼 상태 업데이트
    updateFilterButtons();

    // 갤러리 갱신
    const filteredImages = getFilteredImages();
    renderGallery(filteredImages);
}

// 필터 버튼 상태 ���데이트
function updateFilterButtons() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const tag = btn.dataset.filter;
        if (activeFilters.has(tag)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ==================== 모달 기능 ====================
function openModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalTags = document.getElementById('modalTags');

    modalImage.src = image.url;
    modalTitle.textContent = image.title;
    modalDescription.textContent = image.description;

    // 모달 태그 렌더링
    modalTags.innerHTML = '';
    image.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'modal-tag';
        tagSpan.textContent = tag;
        modalTags.appendChild(tagSpan);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ==================== 초기화 ====================
document.addEventListener('DOMContentLoaded', function() {
    // 필터 버튼 렌더링
    renderFilterButtons();

    // 초기 갤러리 렌더링 (모든 이미지)
    renderGallery(galleryImages);

    // 모달 닫기 이벤트
    const modalClose = document.getElementById('modalClose');
    const modal = document.getElementById('imageModal');

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // 네비게이션 활성 상태
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

    // 스크롤 효과
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(255, 255, 255, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
