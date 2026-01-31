const form = document.getElementById('forgotPasswordForm');
    const notification = document.getElementById('notification');

    form.addEventListener('submit', function(event) {
       
        event.preventDefault();
        
       
        notification.classList.remove('hidden');
        
       
        setTimeout(function() {
            notification.classList.add('hidden');
        }, 3000);
    });
