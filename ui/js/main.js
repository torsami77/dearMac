
let phoneAppCount = 0;
let iti;

const phoneApp = () => {
  if (phoneAppCount < 1) {
    //document.querySelector("#phone").removeAttribute('placeholder');
    const input = document.querySelector("#phone");
    iti = window.intlTelInput(input, {
      utilsScript: "./intl-tel-input-master/build/js/utils.js",
      autoPlaceholder: true,
    });
  }
  phoneAppCount = 1;
  $('#phone').focus(function() {
    //$(this).attr('placeholder', '');
    // console.log(iti);
  }).blur(function() {
    if (iti.isValidNumber()) {
      phoneAppCount = 0;
     document.querySelector("#phoneContainer").innerHTML = `
     <input onclick="phoneApp();" type="tel" placeholder="Mobile Number" id="phone" class="form-text-field" value="${iti.getNumber(intlTelInputUtils.numberFormat.E164)}"/><br/>`
    } else {
     // $(this).attr('placeholder', 'Mobile Number');
    }
  });
};
            
let defaultImageNumber = 0;
const imageArray = [
	'<img src="./img/testimonial_.jpeg" class="show-profile-pic"/>',
	'<img src="./img/banner_.jpg" class="show-profile-pic"/>',
	'<img src="./img/author_.png" class="show-profile-pic"/>'
]
const changeImage = (value) => {
  if (value === 'minus') {
		defaultImageNumber--;
  } else {
    defaultImageNumber++;
	}
	if ( defaultImageNumber > imageArray.length) {
    defaultImageNumber = 1;
	}
	if ( defaultImageNumber < 1) {
    defaultImageNumber = imageArray.length;
	}
  document.getElementById('showProfileImage').innerHTML = imageArray[defaultImageNumber - 1];
};


const memberArea = (choice) => {
  switch(choice) {
    case 'signUp':
      document.getElementById('memberArea').innerHTML = signUpForm;
      break;
    case 'forgotPassword':
      document.getElementById('memberArea').innerHTML = forgotPasswordForm;
      break;
    case 'showProfile':
			document.getElementById('memberArea').innerHTML = showProfile;
      break;
    case 'showContact':
			document.getElementById('memberArea').innerHTML = showContact;
			break;
		case 'viewAlbum':
      document.getElementById('memberArea').innerHTML = viewAlbum;
      break;
    default:
      document.getElementById('memberArea').innerHTML = signInForm;
  }
	 document.getElementsByClassName('memberArea')[0].style.display = 'block';
	 return false;
}

const changeDashBoard = (menu) => {
  switch(menu) {
    case 'persona':
      document.getElementById('user-side-bar').innerHTML = persona;
      document.getElementById('user-page-main').innerHTML = myConnections;
      break;
    case 'showConnections':
      document.getElementById('user-page-main').innerHTML = myConnections;
      break;
    case 'showPictureAlbums':
      document.getElementById('user-page-main').innerHTML = myPictureAlbums;
      break;
    case 'showBioData':
      document.getElementById('user-page-main').innerHTML = bioDataForm;
      break;
    case 'passwordRequest':
      document.getElementById('user-page-main').innerHTML = passwordChangeRequest;
      break;
    default:
      document.getElementById('user-side-bar').innerHTML = narrowSearch;
      document.getElementById('user-page-main').innerHTML = searchResult;
  }
  return false;
}

const closePopUp = () => {
  phoneAppCount = 0;
  document.getElementById('memberArea').innerHTML = "";
  document.getElementsByClassName('memberArea')[0].style.display = 'none';
  return false;
}




$(function(){


  /* ========================================================================= */
  /*  Init WOW js for css3 animation
	/* ========================================================================= */

  var wow = new WOW({
	    mobile: false // trigger animations on mobile devices (default is true)
  });
  wow.init();
	
  var windowHeight = $(window).height();

  $(".fullscreen").css("height", windowHeight);

  $(window).scroll(function() {
    	if ($(window).scrollTop() >= 85) {
    		$(".site-header").addClass("fixed");
    	}else {
    		$(".site-header").removeClass("fixed");
    	}
  });


  $(".testimonial-slider").owlCarousel({
    singleItem : true,
    autoPlay:true,
  });


  // menu toggle 
  $(".toggle-btn").on("click", function() {
    	$(this).toggleClass("active");
    	$(".site-header").toggleClass("active");
  });

  $('#mygallery').justifiedGallery({
    rowHeight : 240,
    lastRow : 'nojustify',
    margins : 6,
    captions: false,
    sizeRangeSuffixes: {
      100 : '_t', // used with images which are less than 100px on the longest side
      240 : '_m', // used with images which are between 100px and 240px on the longest side
      320 : '_n', // ...
      500 : '',
      640 : '_z',
      1024 : '_b' // used which images that are more than 640px on the longest side
    }
  });
    
});



$(window).load(function() {

  $("#preloader").fadeOut("slow");
});

