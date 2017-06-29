$(document).ready(function(){
	bgColor();
	fontColor();
	deviceSel();
	fontSel();
	fontWSel();
	fontSize();
	makeIcon();
	$('#icon').css({'color':'black'});
});

function bgColor(){
	$('.btn-bg').click(function(){
		var hi = $(this).css('background-color');
	  $('#icon').css({'background-color':hi});
	})
}

function fontSize(){
	$('.btn-radio').click(function(){
		var hi = $(this).val();
	  $('#icon').css({'font-size':hi});
	});
}

function fontWSel(){
	$('.btn-weight').click(function(){
		var hi = $(this).css('font-weight');
	  $('#icon').css({'font-weight':hi});
	})
} 

function fontColor(){
	$('.btn-cl').click(function(){
		var hi = $(this).css('color');
	  $('#icon').css({'color':hi});
	})
}

function deviceSel(){
	$('#radio1').click(function(){
		$('#icon').css({'border-radius':'20px'});
	});

	$('#radio2').click(function(){
		$('#icon').css({'border-radius':'10px'});
	})
}

function fontSel(){
	$('.dropdown-item').click(function(){
		var hi = $(this).css('font-family');
	  $('#icon').css({'font-family':hi});
	})
	return false;
}

function iconApple(iconImg){
	var ilink = document.createElement('link');
	ilink.setAttribute('rel','apple-touch-icon');
	ilink.setAttribute('sizes','192x192');
	ilink.setAttribute('href',iconImg);
	document.getElementsByTagName('head')[0].appendChild(ilink);
}

function iconAndor(iconImg){
	var ilink = document.createElement('link');
	ilink.setAttribute('rel','icon');
	ilink.setAttribute('sizes','192x192');
	ilink.setAttribute('href',iconImg);
	document.getElementsByTagName('head')[0].appendChild(ilink);
}

function makeIcon(){
	$("#btn-save").click(function() {
		document.title = $('#icon span').text();
        html2canvas($("#icon"), {
            onrendered: function(canvas) {
                theCanvas = canvas;
                document.body.appendChild(canvas);
                console.log("hi");
                var iconURI = canvas.toDataURL("image/png"); 
                iconApple(iconURI);
                // Clean up 
                document.body.removeChild(canvas);
            }
        });
    });
}