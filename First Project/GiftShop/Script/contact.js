document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
    
    
    const notificationBox = document.getElementById('notificationBox');
    notificationBox.classList.remove('hidden');
    notificationBox.classList.add('show');

    
    this.reset();
    setTimeout(() => {
        notificationBox.classList.remove('show');
        setTimeout(() => notificationBox.classList.add('hidden'), 500); 
    }, 3000);
});