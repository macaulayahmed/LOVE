/// <reference path="custom.js" />
/// <reference path="jquery.js" />

var page2 = {
    init: function () {
        var li = $("<li></li>");
        var message = custom.loveMessages()
        for (var i = 0; i < message.length; i++) {
            var mainDiv = $("<div>").text(message[i]).addClass('center').attr('id', i).click(function () {
                custom.setMessageIndex($(this).attr("id"));
                jsTouch.loadPage('pages/page3.html', { transition: 'slide-down' });
            });
            mainDiv.append($("<div/>").addClass("samll-size").text(custom.messageFooter));
            li.append(mainDiv);
            $("#messagelist").append(li);
        }
    },
};


var page3 = {
    init: function () {
        $("#next").click(function (e) {
            e.preventDefault();
            
            var phone = $("#phone").val();
            if (phone === '') {
                $("#error").text("Please enter the recipient phone");
            } else { //if (result = /^\d{11}$/.test(phone)) {
                $("#error").text("");
                custom.setRecipientPhone(phone);
            }   jsTouch.loadPage('pages/page4.html', { transition: 'slide-down' });
            //} else {
            //    $("#error").text("Phone number is incorrect");
            //}
        });
    },
};

var page4 = {
    init: function () {
        $("#sender").hide();
        $("#recipient").text(custom.getRecipientPhone());
        $("#message").text(custom.loveMessages()[custom.getMessageIndex()]);
        $("#identity").click(function () {
            $("#sender").toggle('slow');
        });
        $("#finish").click(function () {
            custom.setSenderName($("#myName").val());
            custom.sendMessage1(custom.sendMessageOnSuccess, custom.sendMessageOnFailure);
            jsTouch.loadPage('pages/page5.html', { transition: 'slide-down' });
        });
    },
};

var page5 = {
    init: function () {
        //if(custom.getSenderName() !== '')
        //{
        //    $("#identity").text("Hi " + custom.getSenderName() + ",");
        //}else{
        //    $("#identity").hide();
        //}
            
        $("#phone").text(custom.getRecipientPhone());

        $("#home").click(function () {
            jsTouch.loadPage('pages/home.html', { transition: 'flip-bottom' });
        });
        $("#content").click(function () {
            jsTouch.loadPage('pages/home.html', { transition: 'flip-bottom' });
    });
    },
};