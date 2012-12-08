/// <reference path="jquery.js" />

var custom = {
    
    messageFooter: "The Progress of Love, an exhibition at CCA Lagos, 9 McEwen, thru Jan 27, 2013",
    
    loveMessages: function () {
        var messages = [];

        messages[0] = "I live for our love.";
        messages[1] = "I am infatuated with you.";
        messages[2] = "My sugar, You think you are suffering more than I do, but you are wrong.  The thing is this: my heart is strong for you but my body is weak.";
        messages[3] = "Apart from being sexy, what do you do for a living?";
        messages[4] = "A little act of kindness can fill a heart with joy.";
        messages[5] = "I promise to never make u cry, but to make u high, never to mock u, but to trust u, never to jilt u but to kiss u.";
        messages[6] = "D day I first met u was like my first time seeing a woman in my life.  Pls, walk wit me and let’s extract the honey of di world 2geda.";
        messages[7] = "Girl: Will you love me after marriage? Boy: This depends on your husband, if he allows me.";
        messages[8] = "Anybody can love a rose, but it takes a great deal to love a leaf.";
        messages[9] = "Roses are red. Violets are blue. Sugar is sweet.  And so are you. But the roses are wilting, the violets are dead, the sugar bowl’s empty, and so is your head.";

        return messages;
    },

    selectedMessageIndex: -1,
    setMessageIndex: function (item) {
        this.selectedMessageIndex = item;
    },
    getMessageIndex: function () {
        return this.selectedMessageIndex;
    },

    senderName: '',
    setSenderName: function (name) {
        senderName = name;
    },
    getSenderName: function () {
        return senderName;
    },

    recipientPhone: '',
    setRecipientPhone: function (phone) {
        recipientPhone = phone;
    },
    getRecipientPhone: function () {
        return recipientPhone;
    },

    sendMessageOnSuccess: function (msg, el) {
        //window.elements['finish-button'] = el;
        //jsTouch.loadPage('pages/page5.html', { transition: 'slide-down', target: 'finish-button' });

        //jsTouch.loadPage('pages/page5.html', { transition: 'slide-down'});
    },

    sendMessageOnFailure: function (msg, el) {
        // for now do this, however u need to save message on fone database to send later
        //window.elements['finish-button'] = el;
        //jsTouch.loadPage('pages/page5.html', { transition: 'slide-down', target: 'finish-button' });

        //jsTouch.loadPage('pages/page5.html', { transition: 'slide-down'});
    },

    getCurrentdate: function () {
        var currentDate = new Date()
        var day = currentDate.getDate()
        var month = currentDate.getMonth() + 1
        var year = currentDate.getFullYear()
        var hr = currentDate.getHours();
        var min = currentDate.getMinutes();
        var sec = currentDate.getSeconds();

        return year + '-' + month + '-' + day + ' ' + hr + ':' + min + ':' + sec;
    },

    sendMessage: function (onSuccess, onFailure,el) {
        
        var loc = "http://localhost/lovesms/Send.aspx";
        
        var message = {
            'content': custom.loveMessages()[custom.getMessageIndex()],// + " " + custom.getSenderName() + " " + custom.messageFooter,
            'sender': custom.getSenderName(),
            'recipient': custom.getRecipientPhone(),
            'logDate': custom.getCurrentdate(),
        };

        // post to the server to send the message
        $.ajax({
            type: "POST",
            url: loc + "/SendMessage",
            data: JSON.stringify(message),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (msg) {
                if (msg !== undefined) {
                    onSuccess(msg);
                } else {
                    onFailure('unknown error occured on the server, please contact administrator');
                }

            },
            error: function(statusCode, errorThrown) {
                if (statusCode.status == 0) {
                    //alert("you're offline");
                }
            }
            
        });
    },

    sendMessage1: function (onSuccess, onFailure, el) {
        var url = "http://art.smartmalls.net/Send.aspx?callback=?";
        //var url = "http://localhost:8088/Send.aspx?callback=?";

        $.getJSON(url, {
            'content': custom.loveMessages()[custom.getMessageIndex()],// + " " + custom.getSenderName() + " " + custom.messageFooter,
            'sender': custom.getSenderName(),
            'recipient': custom.getRecipientPhone(),
            'logDate': custom.getCurrentdate(),
        },
       function (data) {
           onSuccess(data);
       });
          


        //$.get(url, {
        //    'content': custom.loveMessages()[custom.getMessageIndex()],// + " " + custom.getSenderName() + " " + custom.messageFooter,
        //    'sender': custom.getSenderName(),
        //    'recipient': custom.getRecipientPhone(),
        //    'logDate': custom.getCurrentdate(),
        //},
        //  function (data) {
        //      onSuccess(data);
        //  });
    },
};