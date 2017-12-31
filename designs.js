function makeGrid(height, length) {

    $('#pixel_canvas').html('<table id="pixel_canvas"></table>');

    for(var h = 1; h <= height; h++) {
        var row = $('#pixel_canvas').append('<tr>');
        for(var l = 1; l <= length; l++) {
            row.append('<td>&nbsp;</td>');
        }
        row.append('</tr>');
    }

}

$(document).ready(function() {

    var color = "black";

    $('input[type="submit"]').on('click', function(evt) {

        var height = $('#input_height').val();
        var length = $('#input_width').val();

        evt.preventDefault();
        if(height && length) {
            makeGrid(height, length);
        }
    });

    $('#pixel_canvas').on('click', 'td', function() {
        if($(this).attr('checked')) {
            $(this).removeAttr('checked');
            $(this).css('background-color', 'white');
        } else {
            $(this).css('background-color', color);
            $(this).attr('checked', 'true');
        }
        
    });

    $("#colorPicker").on("change", function() {
        color = $(this).val();
        $('#pixel_canvas td').each(function() {
            if($(this).attr('checked')) {
                $(this).css('background-color', color);
            }
        });    
    });
    
});
