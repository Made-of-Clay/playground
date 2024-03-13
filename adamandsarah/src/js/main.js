jQuery(document).ready(function($){
    /** No ugly target attribute uses anymore **/
    $('.target_blank').click(function(){
        window.open(this.href);
        return false;
    });
    
    /** Timecube & Timeline Controls **/
    var stills 	= $('#stills'),
        stillAr = $('.still'),
        still1 	= $(stillAr[0]),
        story 	= $('#story'),
        cur 	= 1,
        ctrls 	= {
            'both' : $('.ctrls'),
            'prev' : $('#prev'),
            'next' : $('#next')
        };

    story.html(still1.children('figcaption').html());
    stills.addClass('s1');

    ctrls.both.click(function(){
        switch(this.id) {
            case 'prev' :
                cur = (cur === 1) ? stillAr.length-1 : --cur;
                break;
            case 'next' :
                cur = (cur === stillAr.length-1) ? 1 : ++cur;
                break;
        }

        // -- Rotates Cube
        stills.removeAttr('class').addClass('s'+cur);

        // -- Changes Text
        var storyTxt = (cur === stillAr.length-1) ? $(stillAr[cur-1]).html() : $(stillAr[cur-1]).children('figcaption').html();
        story.html(storyTxt);
    });

    /** Countdown functionality (using countdown.js) **/
    $('#counter').countdown({since: new Date(2014,5-1,2,17,30,0), format: 'YODHMS'});

    /** Parallax scrolling using [my] scroller.js **/
    $('.scroller').scroller(500,Modernizr.touch);

    /** Direction-Swapping Functionality **/
    var dlinks = $('.dirLink'),
        dbox = $('.dirBox'),
        map = $('#map');
    $('.dirLink').click(function(){
        var inx = $(this).index(),
            box = $(dbox[inx]),
            datamap = box.data('map');
        $('.show').removeClass('show');
        box.addClass('show');
        map.attr('src',datamap);
    });
});
