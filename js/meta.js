window.onload = () =>{
    let delay = 1000;
    let cardCount = $('.card').length;
    console.log(cardCount);
    let cardWidth = $('.card').width();
    let cardHeight = $('.card').height();
    let totalWidth = cardCount *cardWidth;
    
    $('#card-container').css({
        width: totalWidth
    })

    $('#slider-show').css({
        width: cardWidth,
        height: cardHeight,
        // margin: cardWidth
    })

    let currentLeft = 0;

    $('#laquo').click(()=>{
        currentLeft += cardWidth
        if(currentLeft == cardWidth) currentLeft = 0
        $('#card-container').animate({
            left: currentLeft
        }, delay, ()=>{

        })
    })

    $('#raquo').click(()=>{
        currentLeft -= cardWidth
        if(currentLeft == -totalWidth) currentLeft = -totalWidth +cardWidth
        $('#card-container').animate({
            left: currentLeft
        }, delay, ()=>{

        })
    })
}