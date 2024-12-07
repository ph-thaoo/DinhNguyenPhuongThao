document.querySelectorAll('.brand-logos img, .payment img, .platform img, .image-profile img').forEach(logo => {
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'scale(1.1)';
    });
    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'scale(1)';
    });
});
