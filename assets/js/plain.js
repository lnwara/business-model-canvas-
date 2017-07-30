
$(document).ready(function() {

    var iCnt = 0;
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    var container = $(document.createElement('div')).css({
        padding: '5px', margin: '20px', width: '100%', border: '1px dashed',
        borderTopColor: '#999', borderBottomColor: '#999',
        borderLeftColor: '#999', borderRightColor: '#999'
    });

    $('#btAdd').click(function() {
        if (iCnt <= 19) {

            iCnt = iCnt + 1;

            // ADD TEXTBOX.
            $(container).append('<input type=text class="input" name=tb' + iCnt + ' ' +
                        'value="Text Element ' + iCnt + '" />');

            // SHOW SUBMIT BUTTON IF ATLEAST "1" ELEMENT HAS BEEN CREATED.
           if (iCnt == 1) {

                var divSubmit = $(document.createElement('div'));
                $(divSubmit).append('<input type=button class="bt"' +
                    'onclick="GetTextValue()"' +
                        'id=btSubmit value=Submit />');

            }

            // ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
            $('#main').after(container, divSubmit);
        }
        // AFTER REACHING THE SPECIFIED LIMIT, DISABLE THE "ADD" BUTTON.
        // (20 IS THE LIMIT WE HAVE SET)
        else {
            $(container).append('<label>Reached the limit</label>');
            $('#btAdd').attr('class', 'bt-disable');
            $('#btAdd').attr('disabled', 'disabled');
        }
    });

    // REMOVE ONE ELEMENT PER CLICK.
    $('#btRemove').click(function() {
        if (iCnt != 0) { $('#tb' + iCnt).remove(); iCnt = iCnt - 1; }

        if (iCnt == 0) {
            $(container)
                .empty()
                .remove();

            $('#btSubmit').remove();
            $('#btAdd')
                .removeAttr('disabled')
                .attr('class', 'bt');
        }
    });

    // REMOVE ALL THE ELEMENTS IN THE CONTAINER.
    $('#btRemoveAll').click(function() {
        $(container)
            .empty()
            .remove();

        $('#btSubmit').remove();
        iCnt = 0;

        $('#btAdd')
            .removeAttr('disabled')
            .attr('class', 'bt');
    });
});

// PICK THE VALUES FROM EACH TEXTBOX WHEN "SUBMIT" BUTTON IS CLICKED.
var divValue, values = '';

function GetTextValue() {

    $(divValue)
        .empty()
        .remove();

    values = '';

    $('.input').each(function() {
        divValue = $(document.createElement('div')).css({
            padding:'5px', width:'200px'
        });
        values += this.value + '<br />'
    });

    $(divValue).append('<p><b>Your selected values</b></p>' + values);
    $('body').append(divValue);
}
//2

$(document).ready(function() {

    var iCnt = 0;
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    var container = $(document.createElement('div')).css({
        padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
        borderTopColor: '#999', borderBottomColor: '#999',
        borderLeftColor: '#999', borderRightColor: '#999'
    });

    $('#btAdd2').click(function() {
        if (iCnt <= 19) {

            iCnt = iCnt + 1;

            // ADD TEXTBOX.
            $(container).append('<input type=text class="input" name=tb' + iCnt + ' ' +
                        'value="Text Element ' + iCnt + '" />');

            // SHOW SUBMIT BUTTON IF ATLEAST "1" ELEMENT HAS BEEN CREATED.
            if (iCnt == 1) {

                var divSubmit = $(document.createElement('div'));
                $(divSubmit).append('<input type=button class="bt"' +
                    'onclick="GetTextValue()"' +
                        'id=btSubmit2 value=Submit />');

            }

            // ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
            $('#main').after(container, divSubmit);
        }
        // AFTER REACHING THE SPECIFIED LIMIT, DISABLE THE "ADD" BUTTON.
        // (20 IS THE LIMIT WE HAVE SET)
        else {
            $(container).append('<label>Reached the limit</label>');
            $('#btAdd2').attr('class', 'bt-disable');
            $('#btAdd2').attr('disabled', 'disabled');
        }
    });

    // REMOVE ONE ELEMENT PER CLICK.
    $('#btRemove2').click(function() {
        if (iCnt != 0) { $('#tb' + iCnt).remove(); iCnt = iCnt - 1; }

        if (iCnt == 0) {
            $(container)
                .empty()
                .remove();

            $('#btSubmit2').remove();
            $('#btAdd2')
                .removeAttr('disabled')
                .attr('class', 'bt');
        }
    });

    // REMOVE ALL THE ELEMENTS IN THE CONTAINER.
    $('#btRemoveAll2').click(function() {
        $(container)
            .empty()
            .remove();

        $('#btSubmit2').remove();
        iCnt = 0;

        $('#btAdd2')
            .removeAttr('disabled')
            .attr('class', 'bt');
    });
});

// PICK THE VALUES FROM EACH TEXTBOX WHEN "SUBMIT" BUTTON IS CLICKED.
var divValue, values = '';

function GetTextValue() {

    $(divValue)
        .empty()
        .remove();

    values = '';

    $('.input').each(function() {
        divValue = $(document.createElement('div')).css({
            padding:'5px', width:'200px'
        });
        values += this.value + '<br />'
    });

    $(divValue).append('<p><b>Your selected values</b></p>' + values);
    $('body').append(divValue);
}
//3
$(document).ready(function() {

    var iCnt = 0;
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    var container = $(document.createElement('div')).css({
        padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
        borderTopColor: '#999', borderBottomColor: '#999',
        borderLeftColor: '#999', borderRightColor: '#999'
    });

    $('#btAdd3').click(function() {
        if (iCnt <= 19) {

            iCnt = iCnt + 1;

            // ADD TEXTBOX.
            $(container).append('<input type=text class="input" name=tb' + iCnt + ' ' +
                        'value="Text Element ' + iCnt + '" />');

            // SHOW SUBMIT BUTTON IF ATLEAST "1" ELEMENT HAS BEEN CREATED.
            if (iCnt == 1) {

                var divSubmit = $(document.createElement('div'));
                $(divSubmit).append('<input type=button class="bt"' +
                    'onclick="GetTextValue()"' +
                        'id=btSubmit3 value=Submit />');

            }

            // ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
            $('#main').after(container, divSubmit);
        }
        // AFTER REACHING THE SPECIFIED LIMIT, DISABLE THE "ADD" BUTTON.
        // (20 IS THE LIMIT WE HAVE SET)
        else {
            $(container).append('<label>Reached the limit</label>');
            $('#btAdd3').attr('class', 'bt-disable');
            $('#btAdd3').attr('disabled', 'disabled');
        }
    });

    // REMOVE ONE ELEMENT PER CLICK.
    $('#btRemove3').click(function() {
        if (iCnt != 0) { $('#tb' + iCnt).remove(); iCnt = iCnt - 1; }

        if (iCnt == 0) {
            $(container)
                .empty()
                .remove();

            $('#btSubmit3').remove();
            $('#btAdd3')
                .removeAttr('disabled')
                .attr('class', 'bt');
        }
    });

    // REMOVE ALL THE ELEMENTS IN THE CONTAINER.
    $('#btRemoveAll3').click(function() {
        $(container)
            .empty()
            .remove();

        $('#btSubmit3').remove();
        iCnt = 0;

        $('#btAdd3')
            .removeAttr('disabled')
            .attr('class', 'bt');
    });
});

// PICK THE VALUES FROM EACH TEXTBOX WHEN "SUBMIT" BUTTON IS CLICKED.
var divValue, values = '';

function GetTextValue() {

    $(divValue)
        .empty()
        .remove();

    values = '';

    $('.input').each(function() {
        divValue = $(document.createElement('div')).css({
            padding:'5px', width:'200px'
        });
        values += this.value + '<br />'
    });

    $(divValue).append('<p><b>Your selected values</b></p>' + values);
    $('body').append(divValue);
}


//4
$(document).ready(function() {

    var iCnt = 0;
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    var container = $(document.createElement('div')).css({
        padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
        borderTopColor: '#999', borderBottomColor: '#999',
        borderLeftColor: '#999', borderRightColor: '#999'
    });

    $('#btAdd4').click(function() {
        if (iCnt <= 19) {

            iCnt = iCnt + 1;

            // ADD TEXTBOX.
            $(container).append('<input type=text class="input" name=tb' + iCnt + ' ' +
                        'value="Text Element ' + iCnt + '" />');

            // SHOW SUBMIT BUTTON IF ATLEAST "1" ELEMENT HAS BEEN CREATED.
            if (iCnt == 1) {

                var divSubmit = $(document.createElement('div'));//noor we might change it
                $(divSubmit).append('<input type=button class="bt"' +
                    'onclick="GetTextValue()"' +
                        'id=btSubmit4 value=Submit />');

            }

            // ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
            $('#main').after(container, divSubmit);
        }
        // AFTER REACHING THE SPECIFIED LIMIT, DISABLE THE "ADD" BUTTON.
        // (20 IS THE LIMIT WE HAVE SET)
        else {
            $(container).append('<label>Reached the limit</label>');
            $('#btAdd4').attr('class', 'bt-disable');
            $('#btAdd4').attr('disabled', 'disabled');
        }
    });

    // REMOVE ONE ELEMENT PER CLICK.
    $('#btRemove4').click(function() {
        if (iCnt != 0) { $('#tb' + iCnt).remove(); iCnt = iCnt - 1; }

        if (iCnt == 0) {
            $(container)
                .empty()
                .remove();

            $('#btSubmit4').remove();
            $('#btAdd4')
                .removeAttr('disabled')
                .attr('class', 'bt');
        }
    });

    // REMOVE ALL THE ELEMENTS IN THE CONTAINER.
    $('#btRemoveAll4').click(function() {
        $(container)
            .empty()
            .remove();

        $('#btSubmit4').remove();
        iCnt = 0;

        $('#btAdd4')
            .removeAttr('disabled')
            .attr('class', 'bt');
    });
});

// PICK THE VALUES FROM EACH TEXTBOX WHEN "SUBMIT" BUTTON IS CLICKED.
var divValue, values = '';

function GetTextValue() {

    $(divValue)
        .empty()
        .remove();

    values = '';

    $('.input').each(function() {
        divValue = $(document.createElement('div')).css({
            padding:'5px', width:'200px'
        });
        values += this.value + '<br />'
    });

    $(divValue).append('<p><b>Your selected values</b></p>' + values);
    $('body').append(divValue);
}



//5


$(document).ready(function() {

    var iCnt = 0;
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    var container = $(document.createElement('div')).css({
        padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
        borderTopColor: '#999', borderBottomColor: '#999',
        borderLeftColor: '#999', borderRightColor: '#999'
    });

    $('#btAdd5').click(function() {
        if (iCnt <= 19) {

            iCnt = iCnt + 1;

            // ADD TEXTBOX.
            $(container).append('<input type=text class="input" name=tb' + iCnt + ' ' +
                        'value="Text Element ' + iCnt + '" />');

            // SHOW SUBMIT BUTTON IF ATLEAST "1" ELEMENT HAS BEEN CREATED.
            if (iCnt == 1) {

                var divSubmit = $(document.createElement('div'));
                $(divSubmit).append('<input type=button class="bt"' +
                    'onclick="GetTextValue()"' +
                        'id=btSubmit value=Submit />');

            }

            // ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
            $('#main').after(container, divSubmit);
        }
        // AFTER REACHING THE SPECIFIED LIMIT, DISABLE THE "ADD" BUTTON.
        // (20 IS THE LIMIT WE HAVE SET)
        else {
            $(container).append('<label>Reached the limit</label>');
            $('#btAdd5').attr('class', 'bt-disable');
            $('#btAdd5').attr('disabled', 'disabled');
        }
    });

    // REMOVE ONE ELEMENT PER CLICK.
    $('#btRemove5').click(function() {
        if (iCnt != 0) { $('#tb' + iCnt).remove(); iCnt = iCnt - 1; }

        if (iCnt == 0) {
            $(container)
                .empty()
                .remove();

            $('#btSubmit5').remove();
            $('#btAdd5')
                .removeAttr('disabled')
                .attr('class', 'bt');
        }
    });

    // REMOVE ALL THE ELEMENTS IN THE CONTAINER.
    $('#btRemoveAll5').click(function() {
        $(container)
            .empty()
            .remove();

        $('#btSubmit5').remove();
        iCnt = 0;

        $('#btAdd5')
            .removeAttr('disabled')
            .attr('class', 'bt');
    });
});

// PICK THE VALUES FROM EACH TEXTBOX WHEN "SUBMIT" BUTTON IS CLICKED.
var divValue, values = '';

function GetTextValue() {

    $(divValue)
        .empty()
        .remove();

    values = '';

    $('.input').each(function() {
        divValue = $(document.createElement('div')).css({
            padding:'5px', width:'200px'
        });
        values += this.value + '<br />'
    });

    $(divValue).append('<p><b>Your selected values</b></p>' + values);
    $('body').append(divValue);
}



//6



$(document).ready(function() {

    var iCnt = 0;
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    var container = $(document.createElement('div')).css({
        padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
        borderTopColor: '#999', borderBottomColor: '#999',
        borderLeftColor: '#999', borderRightColor: '#999'
    });

    $('#btAdd6').click(function() {
        if (iCnt <= 19) {

            iCnt = iCnt + 1;

            // ADD TEXTBOX.
            $(container).append('<input type=text class="input" name=tb' + iCnt + ' ' +
                        'value="Text Element ' + iCnt + '" />');

            // SHOW SUBMIT BUTTON IF ATLEAST "1" ELEMENT HAS BEEN CREATED.
            if (iCnt == 1) {

                var divSubmit = $(document.createElement('div'));
                $(divSubmit).append('<input type=button class="bt"' +
                    'onclick="GetTextValue()"' +
                        'id=btSubmit6 value=Submit />');

            }

            // ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
            $('#main').after(container, divSubmit);
        }
        // AFTER REACHING THE SPECIFIED LIMIT, DISABLE THE "ADD" BUTTON.
        // (20 IS THE LIMIT WE HAVE SET)
        else {
            $(container).append('<label>Reached the limit</label>');
            $('#btAdd6').attr('class', 'bt-disable');
            $('#btAdd6').attr('disabled', 'disabled');
        }
    });

    // REMOVE ONE ELEMENT PER CLICK.
    $('#btRemove6').click(function() {
        if (iCnt != 0) { $('#tb' + iCnt).remove(); iCnt = iCnt - 1; }

        if (iCnt == 0) {
            $(container)
                .empty()
                .remove();

            $('#btSubmit6').remove();
            $('#btAdd6')
                .removeAttr('disabled')
                .attr('class', 'bt');
        }
    });

    // REMOVE ALL THE ELEMENTS IN THE CONTAINER.
    $('#btRemoveAll6').click(function() {
        $(container)
            .empty()
            .remove();

        $('#btSubmit6').remove();
        iCnt = 0;

        $('#btAdd6')
            .removeAttr('disabled')
            .attr('class', 'bt');
    });
});

// PICK THE VALUES FROM EACH TEXTBOX WHEN "SUBMIT" BUTTON IS CLICKED.
var divValue, values = '';

function GetTextValue() {

    $(divValue)
        .empty()
        .remove();

    values = '';

    $('.input').each(function() {
        divValue = $(document.createElement('div')).css({
            padding:'5px', width:'200px'
        });
        values += this.value + '<br />'
    });

    $(divValue).append('<p><b>Your selected values</b></p>' + values);
    $('body').append(divValue);
}



//7



$(document).ready(function() {

    var iCnt = 0;
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    var container = $(document.createElement('div')).css({
        padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
        borderTopColor: '#999', borderBottomColor: '#999',
        borderLeftColor: '#999', borderRightColor: '#999'
    });

    $('#btAdd7').click(function() {
        if (iCnt <= 19) {

            iCnt = iCnt + 1;

            // ADD TEXTBOX.
            $(container).append('<input type=text class="input" name=tb' + iCnt + ' ' +
                        'value="Text Element ' + iCnt + '" />');

            // SHOW SUBMIT BUTTON IF ATLEAST "1" ELEMENT HAS BEEN CREATED.
            if (iCnt == 1) {


//noor we might need to change this


                var divSubmit = $(document.createElement('div'));
                $(divSubmit).append('<input type=button class="bt"' +
                    'onclick="GetTextValue()"' +
                        'id=btSubmit7 value=Submit />');

            }

            // ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
            $('#main').after(container, divSubmit);
        }
        // AFTER REACHING THE SPECIFIED LIMIT, DISABLE THE "ADD" BUTTON.
        // (20 IS THE LIMIT WE HAVE SET)
        else {
            $(container).append('<label>Reached the limit</label>');
            $('#btAdd7').attr('class', 'bt-disable');
            $('#btAdd7').attr('disabled', 'disabled');
        }
    });

    // REMOVE ONE ELEMENT PER CLICK.
    $('#btRemove7').click(function() {
        if (iCnt != 0) { $('#tb' + iCnt).remove(); iCnt = iCnt - 1; }

        if (iCnt == 0) {
            $(container)
                .empty()
                .remove();

            $('#btSubmit7').remove();
            $('#btAdd7')
                .removeAttr('disabled')
                .attr('class', 'bt');
        }
    });

    // REMOVE ALL THE ELEMENTS IN THE CONTAINER.
    $('#btRemoveAll7').click(function() {
        $(container)
            .empty()
            .remove();

        $('#btSubmit7').remove();
        iCnt = 0;

        $('#btAdd7')
            .removeAttr('disabled')
            .attr('class', 'bt');
    });
});

// PICK THE VALUES FROM EACH TEXTBOX WHEN "SUBMIT" BUTTON IS CLICKED.
var divValue, values = '';

function GetTextValue() {

    $(divValue)
        .empty()
        .remove();

    values = '';

    $('.input').each(function() {
        divValue = $(document.createElement('div')).css({
            padding:'5px', width:'200px'
        });
        values += this.value + '<br />'
    });

    $(divValue).append('<p><b>Your selected values</b></p>' + values);
    $('body').append(divValue);
}



//8



$(document).ready(function() {

    var iCnt = 0;
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    var container = $(document.createElement('div')).css({
        padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
        borderTopColor: '#999', borderBottomColor: '#999',
        borderLeftColor: '#999', borderRightColor: '#999'
    });

    $('#btAdd8').click(function() {
        if (iCnt <= 19) {

            iCnt = iCnt + 1;

            // ADD TEXTBOX.
            $(container).append('<input type=text class="input" name=tb' + iCnt + ' ' +
                        'value="Text Element ' + iCnt + '" />');

            // SHOW SUBMIT BUTTON IF ATLEAST "1" ELEMENT HAS BEEN CREATED.
            if (iCnt == 1) {

                var divSubmit = $(document.createElement('div'));
                $(divSubmit).append('<input type=button class="bt"' +
                    'onclick="GetTextValue()"' +
                        'id=btSubmit8 value=Submit />');

            }

            // ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
            $('#main').after(container, divSubmit);
        }
        // AFTER REACHING THE SPECIFIED LIMIT, DISABLE THE "ADD" BUTTON.
        // (20 IS THE LIMIT WE HAVE SET)
        else {
            $(container).append('<label>Reached the limit</label>');
            $('#btAdd8').attr('class', 'bt-disable');
            $('#btAdd8').attr('disabled', 'disabled');
        }
    });

    // REMOVE ONE ELEMENT PER CLICK.
    $('#btRemove8').click(function() {
        if (iCnt != 0) { $('#tb' + iCnt).remove(); iCnt = iCnt - 1; }

        if (iCnt == 0) {
            $(container)
                .empty()
                .remove();

            $('#btSubmit8').remove();
            $('#btAdd8')
                .removeAttr('disabled')
                .attr('class', 'bt');
        }
    });

    // REMOVE ALL THE ELEMENTS IN THE CONTAINER.
    $('#btRemoveAll8').click(function() {
        $(container)
            .empty()
            .remove();

        $('#btSubmit8').remove();
        iCnt = 0;

        $('#btAdd8')
            .removeAttr('disabled')
            .attr('class', 'bt');
    });
});

// PICK THE VALUES FROM EACH TEXTBOX WHEN "SUBMIT" BUTTON IS CLICKED.
var divValue, values = '';

function GetTextValue() {

    $(divValue)
        .empty()
        .remove();

    values = '';

    $('.input').each(function() {
        divValue = $(document.createElement('div')).css({
            padding:'5px', width:'200px'
        });
        values += this.value + '<br />'
    });

    $(divValue).append('<p><b>Your selected values</b></p>' + values);
    $('body').append(divValue);
}



//9



$(document).ready(function() {

    var iCnt = 0;
    // CREATE A "DIV" ELEMENT AND DESIGN IT USING jQuery ".css()" CLASS.
    var container = $(document.createElement('div')).css({
        padding: '5px', margin: '20px', width: '170px', border: '1px dashed',
        borderTopColor: '#999', borderBottomColor: '#999',
        borderLeftColor: '#999', borderRightColor: '#999'
    });

    $('#btAdd9').click(function() {
        if (iCnt <= 19) {

            iCnt = iCnt + 1;

            // ADD TEXTBOX.
            $(container).append('<input type=text class="input" name=tb' + iCnt + ' ' +
                        'value="Text Element ' + iCnt + '" />');

            // SHOW SUBMIT BUTTON IF ATLEAST "1" ELEMENT HAS BEEN CREATED.
            if (iCnt == 1) {

                var divSubmit = $(document.createElement('div'));
                $(divSubmit).append('<input type=button class="bt"' +
                    'onclick="GetTextValue()"' +
                        'id=btSubmit9 value=Submit />');

            }

            // ADD BOTH THE DIV ELEMENTS TO THE "main" CONTAINER.
            $('#main').after(container, divSubmit);
        }
        // AFTER REACHING THE SPECIFIED LIMIT, DISABLE THE "ADD" BUTTON.
        // (20 IS THE LIMIT WE HAVE SET)
        else {
            $(container).append('<label>Reached the limit</label>');
            $('#btAdd9').attr('class', 'bt-disable');
            $('#btAdd9').attr('disabled', 'disabled');
        }
    });

    // REMOVE ONE ELEMENT PER CLICK.
    $('#btRemove9').click(function() {
        if (iCnt != 0) { $('#tb' + iCnt).remove(); iCnt = iCnt - 1; }

        if (iCnt == 0) {
            $(container)
                .empty()
                .remove();

            $('#btSubmit9').remove();
            $('#btAdd9')
                .removeAttr('disabled')
                .attr('class', 'bt');
        }
    });

    // REMOVE ALL THE ELEMENTS IN THE CONTAINER.
    $('#btRemoveAll9').click(function() {
        $(container)
            .empty()
            .remove();

        $('#btSubmit9').remove();
        iCnt = 0;

        $('#btAdd9')
            .removeAttr('disabled')
            .attr('class', 'bt');
    });
});

// PICK THE VALUES FROM EACH TEXTBOX WHEN "SUBMIT" BUTTON IS CLICKED.
var divValue, values = '';

function GetTextValue() {

    $(divValue)
        .empty()
        .remove();

    values = '';

    $('.input').each(function() {
        divValue = $(document.createElement('div')).css({
            padding:'5px', width:'200px'
        });
        values += this.value + '<br />'
    });

    $(divValue).append('<p><b>Your selected values</b></p>' + values);
    $('body').append(divValue);
}
