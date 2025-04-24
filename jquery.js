// Wait for the document to be fully loaded before applying jQuery effects
$(document).ready(function() {
    // FadeIn effect: Initially hide skills and fade them in on page load
    $('.skill').hide().each(function(index) {
        $(this).delay(200 * index).fadeIn(500);
    });

    // Animate effect: Scale up a skill when clicked
    $('.skill').on('click', function() {
        // Reset any previous animations
        $(this).siblings().css({ transform: 'scale(1)' });
        // Animate the clicked skill to scale up
        $(this).animate({
            scale: 1.2
        }, {
            step: function(now) {
                $(this).css('transform', 'scale(' + now + ')');
            },
            duration: 300
        });
    });

    // Autosuggest: Implement jQuery UI autocomplete for skill search
    const skills = ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Python', 'C++', 'x86', 'ARM'];
    $('#skills-search').autocomplete({
        source: skills, // Source array for autocomplete suggestions
        minLength: 1, // Show suggestions after 1 character
        select: function(event, ui) {
            // When a suggestion is selected, filter the skill list
            const searchTerm = ui.item.value.toLowerCase();
            $('.skill').each(function() {
                const skillText = $(this).text().toLowerCase();
                if (skillText.includes(searchTerm)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    }).on('input', function() {
        // On input, filter skills based on the search term
        const searchTerm = $(this).val().toLowerCase();
        $('.skill').each(function() {
            const skillText = $(this).text().toLowerCase();
            if (skillText.includes(searchTerm) || searchTerm === '') {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});