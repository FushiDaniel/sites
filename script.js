
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});


document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U') || 
        e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I') || 
        e.key === 'F12') {
        e.preventDefault();
    }
});
