

$(document).ready(function () {
    var notes = {
        "list" : []
       };
    // if (typeof(Storage) !== "undefined") {
        
    //     // Retrieve
    //     var lsData =  JSON.parse(localStorage.getItem("ntfList") );
    //     console.log(lsData);
    //     if(lsData){
    //         notes.list = lsData;
    //         checkLsForNotifications();
    //     }
    // }
    $('#notifications').hide();
    

    $('#notification-bell').click(function () {

        // TOGGLE (SHOW OR HIDE) NOTIFICATION WINDOW.
        $('#notifications').fadeToggle('slow', 'linear', function () {
            if ($('#notifications').is(':hidden')) {
                // $("#badge-id").text(0);
                notes.list=[];
                $("#badge-id").text(notes.list.length);
                $("#list-notifications").html("");
                // localStorage.removeItem("ntfList");

            }
        });
        resert();

        return false;
    });

    // HIDE NOTIFICATIONS WHEN CLICKED ANYWHERE ON THE PAGE.
    $(document).click(function () {
        if (!$('#notifications').is(':hidden')) {
            notes.list=[];
            $('#notifications').hide("slow");
            
            $("#badge-id").text(notes.list.length);
            $("#list-notifications").html("");
            // localStorage.removeItem("ntfList");

        }
        

    
    });

    $('#notifications').click(function () {
        return false;       // DO NOTHING WHEN CONTAINER IS CLICKED.
    });


    increment = function () {
        var el = $("#notification-bell");

        var count = Number(el.attr("data-count")) || 0;
        count++;
        el.attr("data-count", count);
       
        var infoText = "This is notification number - " + count ;
        notes.list.push({
            "address":"https://www.w3schools.com/bootstrap/cinqueterre.jpg",
            "info":infoText

        });
        $("#badge-id").text(notes.list.length);
        dynamic(notes.list);
                el.addClass('notify');
        el.addClass('show-count');
        
    }
    checkLsForNotifications = function () {
        var el = $("#notification-bell");

        // var count = Number(el.attr("data-count")) || 0;
        // count++;
        el.attr("data-count", notes.list.length);
       
        $("#badge-id").text(notes.list.length);
        dynamic(notes.list);
                el.addClass('notify');
        el.addClass('show-count');
        
    }

    resert = function () {
        var el = $("#notification-bell");
        el.attr("data-count", "0");
        el.removeClass('show-count');
        // localStorage.removeItem("ntfList");
    }

    dynamic = function(list){
        
        // Store
        
        // localStorage.setItem("ntfList", JSON.stringify(list));

           var inHTML = "";

           $.each(list, function(index, value){
               var newItem = "<li><p><img class='img-circle' src='"+ value.address + "' /> "+ value.info +"</p></li>"
               inHTML += newItem;  
           });
           
           $("#list-notifications").html(inHTML)
    }


});

