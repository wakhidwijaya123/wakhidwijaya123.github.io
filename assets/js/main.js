$(window).scroll(function(){
	if ($(this).scrollTop() > 135) {
		$('.navbar').addClass('fixed-top');
	} else {
		$('.navbar').removeClass('fixed-top');
	}
});

$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
  $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
  $("#myCarousel").carousel("prev");
});

// Enable Carousel Controls
$(".right").click(function(){
  $("#myCarousel").carousel("next");
});

$(window).scroll(function(){
	if ($(this).scrollTop() > 20) {
		$('.scrlup').addClass('d-lg-block');
		$('.scrlup').removeClass('d-none');
	} else {
		$('.scrlup').removeClass('d-lg-block');
		$('.scrlup').addClass('d-none');
	}
});

$('.scrlup').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

//BUTTON PROFIL
$('.sejarahbtn').click(function(){
	$('.visi').addClass('d-none');
	$('.prestasi').addClass('d-none');
	$('.sejarah').removeClass('d-none');
	
	$('.sejarahbtn').addClass('active');
	$('.visibtn').removeClass('active');
	$('.prestasibtn').removeClass('active');
});

$('.visibtn').click(function(){
	$('.visi').removeClass('d-none');
	$('.prestasi').addClass('d-none');
	$('.sejarah').addClass('d-none');
	
	$('.sejarahbtn').removeClass('active');
	$('.visibtn').addClass('active');
	$('.prestasibtn').removeClass('active');
});

$('.prestasibtn').click(function(){
	$('.visi').addClass('d-none');
	$('.prestasi').removeClass('d-none');
	$('.sejarah').addClass('d-none');
	
	$('.sejarahbtn').removeClass('active');
	$('.visibtn').removeClass('active');
	$('.prestasibtn').addClass('active');
});

//BUTTON KURIKULUM
$('.kurikulum1').click(function(){
	$('.ips').addClass('d-none');
	$('.ipa').addClass('d-none');
	$('.kelas10').removeClass('d-none');
	
	$('.kurikulum1').addClass('active');
	$('.kurikulum2').removeClass('active');
	$('.kurikulum3').removeClass('active');
});

$('.kurikulum2').click(function(){
	$('.kelas10').addClass('d-none');
	$('.ipa').removeClass('d-none');
	$('.ips').addClass('d-none');
	
	$('.kurikulum1').removeClass('active');
	$('.kurikulum2').addClass('active');
	$('.kurikulum3').removeClass('active');
});

$('.kurikulum3').click(function(){
	$('.kelas10').addClass('d-none');
	$('.ipa').addClass('d-none');
	$('.ips').removeClass('d-none');
	
	$('.kurikulum1').removeClass('active');
	$('.kurikulum2').removeClass('active');
	$('.kurikulum3').addClass('active');
});

function initMap() {
    var myLatLng = {lat: -7.843423, lng: 110.442106}; 

    var map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 15,
      center: myLatLng
    });

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'SMA N 1 Piyungan'
    });
  }


$('.responsive').slick({
  dots: false,
  infinite: false,
  speed: 300,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});
