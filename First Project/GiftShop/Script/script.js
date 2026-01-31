$('.filter-btn').click(function () {
    const filter = $(this).data('filter');
    if (filter === 'all') {
        $('.card').parent().show(); // Show all cards
    } else {
        $('.card').parent().hide(); // Hide all cards
        $(`.card[data-category="${filter}"]`).parent().show(); // Show filtered category
    }
});

  // Handle the track order form submission
  $('#trackOrderForm').submit(function(e) {
    e.preventDefault();
    
    // Get the order ID entered by the user
    var orderId = $('#orderId').val();

    // Simple mock of order tracking logic
    if(orderId) {
        $('#orderStatus').show();
        $('#statusMessage').text('Your order #' + orderId + ' is being processed.');
    } else {
        alert('Please enter a valid Order ID');
    }
});