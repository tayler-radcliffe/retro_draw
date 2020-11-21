function makePalette(){

const PALETTE = [
    'red',
    'blue',
    'yellow',
    'orange',
    'green',
    'purple',
    'black'
]

for (let i = 0; i < PALETTE.length; i++) {
    const nextColor = PALETTE[i];
    const button = $('<button>').css("backgroundColor", nextColor);
    $('.palette').append(button);
    }
    $('.palette button').first().addClass('active');
}

makePalette();

function makeGrid(){
    for (let i = 0; i < 64; i++) {
        $('.grid').append($('<div>').addClass("cell"));
    }    
}

makeGrid();

function onPaletteClick(){
    $('.palette button').click(function(){
        $('.palette button').removeClass('active')
        $(this).addClass('active');
    })
}

$('.palette button').click(onPaletteClick);


function onGridClick() {
    $('.grid .cell').click(function () {
        if ($(this).css('backgroundColor') === $('.palette .active').css('backgroundColor'))
                {
            $(this).css('backgroundColor', 'rgba(0, 0, 0, 0');
        }
        else $(this).css("backgroundColor", $('.palette .active').css('backgroundColor'))
    });
}

onGridClick();


function onClearClick() {
    $('.controls .clear').click(function(){
        $('.grid .cell').css('backgroundColor', '');
    })
}

onClearClick();


function onFillAllClick() {
    $('.controls .fill-all').click(function() {
        $('.grid .cell').css('backgroundColor', $('.palette .active').css('backgroundColor'))
    })
}

onFillAllClick();


function onFillEmptyClick() {
    $('.controls .fill-empty').click(function(){
        const elements = $('.grid .cell')

        for (let index = 0; index < elements.length; index = index + 1) {
          let nextElement = $( elements[index] );
          if (nextElement.css('backgroundColor') === 'rgba(0, 0, 0, 0)') {
            nextElement.css('backgroundColor', $('.palette .active').css('backgroundColor'))
          }
        }
    })
}

onFillEmptyClick();


// stretch goal 1
function addAColor() {

    const newColor = $('<input placeholder="Add new color..." id="myInput" size="14"></input>');

    newColor.css('marginTop', 10)
    $('.controls').append(newColor)

    let addButton = $('<button>').text('Add')
    addButton.css({
        padding: 5,
        marginTop: 10,
    })

    $('.controls').append(addButton);

    $(addButton).click(function() {
        const newButton = $('<button>').click(onPaletteClick);
        newButton.css('backgroundColor', $("#myInput").val());
        $('.palette').prepend(newButton)
        $('.palette button').removeClass('active');
        $('.palette button').first().addClass('active');
  })
}

addAColor();


// stretch goal 2
// couldn't figure out how to do the mousedown & mouseup
// to color more than one cell
// function colorMoreThanOne() {

//     mouseIsDown = false


//     if($('.grid .cell').mousedown()) {
//         mouseIsDown = true
//     } 
//     if ($('.grid .cell').mouseup()) {
//         mouseIsDown = false
//     } 
//     while(mouseIsDown = true){
//         $('.grid .cell').mouseenter().css('backgroundColor', $('.palette .active').css('backgroundColor'));
//     }
// }

// colorMoreThanOne();


// tried to add a button to remove the button that's active
// but kept removing the whole palette, not the single color
// function removeAColor() {

    //     const removeButton = $('<button>').text('Remove');
    //     removeButton.css({
    //         padding: 5,
    //         margin: 0,
    //         marginBottom: 30,
    //     })
    
    //     $('body').append(removeButton);
    
    //     $(removeButton).click(function(){
    //         if ($('.palette button').hasClass('active')) {
    //             $('.palette button').toggleClass('remove') }
    //         if ($('.palette button').hasClass('remove')) {
    //             $('.palette button').remove();
    //         }
    //     })
    
    // }
    
    // removeAColor();