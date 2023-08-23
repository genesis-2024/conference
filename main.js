jQuery(document).ready(function($) {
    //navScroll();
    navItems();
    activeNav();
    scopriDiPiu();
    seeDayProgram();
    //privacy();
    hostsOrGuests();
    speakers();
});

// Logo hide while scrolling the page and show at the beginning of the page
/*function navScroll() {
    $(window).scroll(function() {
        $(".navbar-brand > img").hide();
        if ($(window).scrollTop() < 50) {
            $(".navbar-brand > img").show();
        }
    })
}*/

// Navbar items click and scroll to corresponding id
let navItems = () => {
    $(".nav-item").click(function() {
        var navItem = $(this).parent();
        var divItem = $(this).attr("value");
        $("html, body").animate({
            scrollTop: $("#" + divItem).offset().top + 1
          }, 800
        )
        $(".nav-li").removeClass("active");
        $(navItem).addClass("active");
    })
}

// Dynamic active class on navbar items while scrolling the page
let activeNav = () => {
    $(window).scroll(function() {
        var posWin = window.pageYOffset;
        $(".nav-item").each(function() {
            var navItem = $(this).parent();
            var idSec = $(this).attr("value");
            var posSec = $("#" + idSec).offset().top; 
            var sec = $("#" + idSec);
            if (posWin > posSec) {
                $(".nav-li").removeClass("active");
                $(navItem).addClass("active");
            };
        });
    });
};

// Learn more - Scopri di più button
function scopriDiPiu() {
    $("#find-more").click(function() {
        $("html, body").animate({
            scrollTop: $("#about").offset().top + 1
          }, 800
        )
    })
}

// Buttons to show different days of a program
function seeDayProgram() {
    $("#1st-program").click(function() {
        $(".1st-day-program").show();
        $(".2nd-day-program").hide();
        $("#1st-program").removeClass("button-round-empty-dimgray").addClass("button-round-dimgray");
        $("#2nd-program").removeClass("button-round-dimgray").addClass("button-round-empty-dimgray");
    })
    $("#2nd-program").click(function() {
        $(".1st-day-program").hide();
        $(".2nd-day-program").show();
        $("#1st-program").removeClass("button-round-dimgray").addClass("button-round-empty-dimgray");
        $("#2nd-program").removeClass("button-round-empty-dimgray").addClass("button-round-dimgray");
    })
}

/* Privacy */ // Do not delete it, maybe it can be useful in other projects.
/*function privacy() {
    $("#privacy-button").click(function(){
        $("#privacy-info").toggle("slow");
    })
}*/

// Copy command
function copyURL() {
    var copyText = document.getElementById("copyURL");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById("copiedAlert").style.display = "block";
}

// Copied text alert
function outFunc() {
    document.getElementById("copiedAlert").style.display = "none";
}

// Speakers hosts and guests
let hostsOrGuests = () => {
    $(".sec-speaker").not(".active").hide();
    $(".btn-speaker").on("click", function() {
        var type = $(this).data("target");
        $(".sec-speaker[data-content='" + type + "']").show().addClass("active");
        $(".sec-speaker[data-content!='" + type + "']").hide().removeClass("active");
        $(".sec-speaker[data-content='" + type + "']").find("li[data-target]:first").click();
        $(".btn-speaker[data-target='" + type + "']").addClass("button-round-dimgray").removeClass("button-round-empty-dimgray");
        $(".btn-speaker[data-target!='" + type + "']").removeClass("button-round-dimgray").addClass("button-round-empty-dimgray");
    });
};

// Speakers profile
let speakers = () => {   
    $(".profile").not(".active").hide();
    var activeSpeaker = $(".profile.active").data("content");
    $("li[data-target='" + activeSpeaker + "']").addClass("bold");
    $("li[data-target]").on("click", function() {
        var speaker = $(this).data("target");
        $(".profile[data-content='" + speaker + "']").show().addClass("active");
        $(".profile[data-content!='" + speaker + "']").hide().removeClass("active");
        $("li[data-target='" + speaker + "']").addClass("bold");
        $("li[data-target!='" + speaker + "']").removeClass("bold");
    });
};