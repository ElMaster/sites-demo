$('#bg-video').animate({opacity: 1}, 300);




    if ($.cookie('intervals')) {
        var num = parseInt($.cookie('intervals')) ;
    } else  {
        var num = 8732
    }

    // initialise
    $('#jackpot').kCounter({ initial: num, easing: 'easeOutElastic' }) ;

    $('#jackpot').kCounter('update', '00'+num);
    if($('#jackpot ul').length > 6) {
        $('#jackpot ul:nth-child(1)').css('display','none')
    }
    if($('#jackpot ul').length > 7) {
        $('#jackpot ul:nth-child(0)').css('display','none')
    }


    function randRange(data) {
        var newTime = data[Math.floor(data.length * Math.random())];
        return newTime;
    }

    function toggleSomething() {
        var timeArray = new Array(200, 300, 150, 250, 2000, 3000, 1000, 1500);

        // do stuff, happens to use jQuery here (nothing else does)

        $('#jackpot').kCounter('update', '00'+num++) ;
        $.cookie('intervals', num)

        if($('#jackpot ul').length > 6) {
            $('#jackpot ul:nth-child(1)').css('display','none')
        }
        if($('#jackpot ul').length > 7) {
            $('#jackpot ul:nth-child(0)').css('display','none')
        }


        clearInterval(timer);
        timer = setInterval(toggleSomething, randRange(timeArray));

    }

    var timer = setInterval(toggleSomething, 1000);


