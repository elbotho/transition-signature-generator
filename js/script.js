
gEnglish = false;

$('#input-form input').on('input', function() {
	
  var $elem = $(this);
  var id = $(this).attr('id');

  if( id==='profile-link-url'){ $('[data-id="exp-profile-link"]').attr( 'href', $elem.val() ); }
  else if( id==='addon-link-url'){ $('[data-id="exp-addon-link"]').attr( 'href', $elem.val() ); }
  else if (id==='english-version') { gEnglish = $('#english-version').is(":checked"); checkLanguage(); }

  else $('[data-id="exp-'+id+'"]').html( $elem.val() );

  if($('#profile-link').val().length>0 ) $('[data-id="exp-profile-wrapper"]').show();
  else $('[data-id="exp-profile-wrapper"]').hide();

  if($('#addon-link').val().length>0 ) $('[data-id="exp-addon-wrapper"]').show();
  else $('[data-id="exp-addon-wrapper"]').hide();

  exportHTML();

});

function exportHTML () {
  var html = $('.signature-wrap.active').html();
  html = html.replace( /<.* style="display: none;".?>.*<\/.*>/g, '');
  $('#textarea').val( html );
}

function checkLanguage(){
  if(gEnglish){
    $('#signature-wrap-de').hide().removeClass('active');
    $('#signature-wrap-en').show().addClass('active');
  }
  else {
    $('#signature-wrap-en').hide().removeClass('active');
    $('#signature-wrap-de').show().addClass('active');
  }
}

$('#copy-button').click( function() {
  $('#textarea').focus();
  $('#textarea').select();
  document.execCommand('copy');
});


$('#copy-button-gmail').click( function(){
  copyToClip( $('#textarea').val() );
});

function copyToClip(str) {
  console.log(str);
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    console.log(e);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
};


$('#textarea').click(function(){
  this.focus();
  this.select();
})

