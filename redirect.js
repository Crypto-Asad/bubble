// Add this code to your external JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    var urlParams = new URLSearchParams(window.location.search);
    var refID = urlParams.get('ref-id');

    if (refID) {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            window.location.href = 'https://play.google.com/store/apps/details?id=com.instagram.android';
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = 'https://apps.apple.com/app/id389801252';
        } else {
            // If it's neither Android nor iOS, maybe show a page with app download links
            window.location.href = '/app-download-links';
        }
    } else {
        // Handle the case where refID is not present, if needed
        console.log("Referral ID not found in URL");
    }
});
