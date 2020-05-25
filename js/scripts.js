///what we do icons
$(document).ready(function(){
  $("#designiconanddescription").click(function(){
    $("#designiconshowing").toggle();
    $("#designdescriptionshowing").toggle();
  });
});

$(document).ready(function(){
  $("#developmenticonanddescription").click(function(){
    $("#developmenticonshowing").toggle();
    $("#developmentdescriptionshowing").toggle();
  });
});

$(document).ready(function(){
  $("#producticonanddescription").click(function(){
    $("#producticonshowing").toggle();
    $("#productdescriptionshowing").toggle();
  });
});


///hover

///FOR WORK ONE TO EIGHT

$(document).ready(function(){
$('.workoneimage').hover(function(){
    $(this).addClass('workoneimageplustitle', 800);
}, function(){
    $(this).removeClass('workoneimageplustitle', 800);
});

$(document).ready(function(){
$('.worktwoimage').hover(function(){
    $(this).addClass('worktwoimageplustitle', 800);
}, function(){
    $(this).removeClass('worktwoimageplustitle', 800);
});

$(document).ready(function(){
$('.workthreeimage').hover(function(){
    $(this).addClass('workthreeimageplustitle', 800);
}, function(){
    $(this).removeClass('workthreeimageplustitle', 800);
});

$(document).ready(function(){
$('.workfourimage').hover(function(){
    $(this).addClass('workfourimageplustitle', 800);
}, function(){
    $(this).removeClass('workfourimageplustitle', 800);
});

$(document).ready(function(){
$('.workfiveimage').hover(function(){
    $(this).addClass('workfiveimageplustitle', 800);
}, function(){
    $(this).removeClass('workfiveimageplustitle', 800);
});

$(document).ready(function(){
$('.worksiximage').hover(function(){
    $(this).addClass('worksiximageplustitle', 800);
}, function(){
    $(this).removeClass('worksiximageplustitle', 800);
});

$(document).ready(function(){
$('.worksevenimage').hover(function(){
    $(this).addClass('worksevenimageplustitle', 800);
}, function(){
    $(this).removeClass('worksevenimageplustitle', 800);
});

$(document).ready(function(){
$('.workeightimage').hover(function(){
    $(this).addClass('workeightimageplustitle', 800);
}, function(){
    $(this).removeClass('workeightimageplustitle', 800);
});
});

//ALERT ON SUBMIT

$(document).ready(function() {
    $("#emailmessage").submit(function(event) {
        event.preventDefault();
        alert("We have received your message. Thank you for contacting us!");
    });
});
