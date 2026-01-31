// Add item to cart
function addToCart(productInfo) {
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === productInfo.id);

    if (existingItemIndex > -1) {
        // Update quantity if item exists
        cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item if it doesn't exist
        cart.push(productInfo);
    }

    // Save cart to localStorage
    saveCart();
    updateCartCount();
}



// Update item quantity
function updateQuantity(productId, newQuantity) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity = Math.max(0, parseInt(newQuantity));
        if (cart[itemIndex].quantity === 0) {
            removeFromCart(productId);
        }
    }
    saveCart();
    updateCartCount();
}

// Calculate cart total
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}


$(document).ready(function () {
    // Add to Cart button click handler
    $('.product-card__btn').click(function (e) {
        e.preventDefault();

        // Get product details from the card
        const card = $(this).closest('.card');
        const productImage = card.find('.card-img-top').attr('src');
        const productTitle = card.find('.product-card__title').text();
        const productPrice = card.find('.product-card__price').text().replace('$', '');

        // Update popup with product details
        $('#popupProductImage').attr('src', productImage);
        $('#popupProductTitle').text(productTitle);
        $('#popupProductPrice').text('$' + productPrice);
        updateTotal(productPrice);

        // Show popup
        $('#cartPopup').fadeIn();
    });

    // Close popup
    $('.close-popup').click(function () {
        $('#cartPopup').fadeOut();
    });

    // Close popup when clicking outside
    $(window).click(function (e) {
        if ($(e.target).is('#cartPopup')) {
            $('#cartPopup').fadeOut();
        }
    });

    // Quantity controls
    $('.quantity-btn.plus').click(function () {
        let qty = parseInt($('#quantity').val());
        if (qty < 20) {
            $('#quantity').val(qty + 1);
            updateTotal();
        }
    });

    $('.quantity-btn.minus').click(function () {
        let qty = parseInt($('#quantity').val());
        if (qty > 1) {
            $('#quantity').val(qty - 1);
            updateTotal();
        }
    });

    // Update total when quantity changes
    $('#quantity').on('input', function () {
        updateTotal();
    });

    // Function to update total price
    function updateTotal() {
        const price = parseFloat($('#popupProductPrice').text().replace('$', ''));
        const quantity = parseInt($('#quantity').val());
        const total = (price * quantity).toFixed(2);
        $('#totalPrice').text(total);
    }


});

$(document).ready(function () {
    // Filter button click handler
    $('.filter-btn').click(function () {
        // Remove active class from all buttons
        $('.filter-btn').removeClass('active');
        // Add active class to clicked button
        $(this).addClass('active');

        const filterValue = $(this).data('filter');

        if (filterValue === 'all') {
            $('.card').fadeIn(300);
        } else {
            $('.card').fadeOut(300);
            $('.card[data-category="' + filterValue + '"]').fadeIn(300);
        }
    });

    // Set 'All' button as active by default
    $('.filter-btn[data-filter="all"]').addClass('active');
});


$(document).ready(function () {
    // Format card number with spaces
    $('#cardNumber').on('input', function () {
        let value = $(this).val().replace(/\s/g, '');
        if (value.length > 0) {
            value = value.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        $(this).val(value);
    });

    // Format expiry date
    $('#expDate').on('input', function () {
        let value = $(this).val().replace(/\D/g, '');
        if (value.length > 2) {
            value = value.slice(0, 2) + '/' + value.slice(2);
        }
        $(this).val(value);
    });

    // Allow only numbers in CVV
    $('#cvv').on('input', function () {
        $(this).val($(this).val().replace(/\D/g, ''));
    });

    // Update payment button with final amount
    $('.proceed-payment-btn').click(function () {
        const finalAmount = $('#totalPrice').text();
        $('#finalAmount').text(finalAmount);
        $('#cartPopup').fadeOut();
        $('#paymentPopup').fadeIn();
    });

    // Close payment popup
    $('.close-payment').click(function () {
        $('#paymentPopup').fadeOut();
    });

    // Handle payment form submission
    $('#paymentForm').submit(function (e) {
        e.preventDefault();
        $('#paymentPopup').fadeOut();
        $('#loadingPopup').fadeIn();

        // Start progress bar
        $('.progress').css('width', '100%');

        // Countdown timer
        let timeLeft = 3;
        const timerId = setInterval(function () {
            timeLeft--;
            $('#timer').text(timeLeft);

            if (timeLeft <= 0) {
                clearInterval(timerId);
                $('#loadingPopup').fadeOut();
                $('#successPopup').fadeIn();
            }
        }, 1000);
    });

    // Back to home button
    $('.back-to-home').click(function () {
        $('#successPopup').fadeOut();
        window.location.href = 'index.html';
    });

    // Reset form when payment popup is closed
    $('.close-payment').click(function () {
        $('#paymentForm')[0].reset();
    });
});


