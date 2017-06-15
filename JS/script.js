        console.log($('p').css('font-weight'));

        function toggleText() {
            if ($('p').css('font-weight') === "400") {
                $('p, a, h1, h2, h3, h4, h5, pre').css('font-weight', '600')
            } else {
                $('p, a, h1, h2, h3, h4, h5, pre').css('font-weight', '400')
            }
        }
