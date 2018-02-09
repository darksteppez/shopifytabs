jQuery(function($) {
    
    var createTabs = function() {
      var $tabContainer = $('.tabs-container');
      var $tabContent = {
        'how-to-use': {
          'content': $('#tab-content__how-to-use').html(), 
          'title': $('#tab-content__how-to-use').data('title')
        }, 
        'cautions': {
          'content': $('#tab-content__cautions').html(), 
          'title': $('#tab-content__cautions').data('title')
        }, 
        'ingredients': {
          'content': $('#tab-content__ingredients').html(), 
          'title': $('#tab-content__ingredients').data('title')
        }
      };
      var $tabs = '<ul class="tabs clearfix">';
      var $content = '';
      var $counter = 0;
      $.map($tabContent, function(v, k) {
        if ($counter == 0) {
          var active = ' active';
        } else {
          var active = '';
        }
        if (v.content) {
        	$tabs += '<li class="tabs-button ' + active + '" data-target="' + k + '-tab">' + v.title + '</li>';
        	$content += '<div class="tabs-content ' + active + '" id="' + k + '-tab">' + v.content + '</div>';
	        $counter++;
        }
      });
      $tabs += '</ul>';
      $tabContainer.html($tabs + $content);
    }
    
    $(document).ready(function() {
      if ($('.tabs-content__placeholder').length) {
        createTabs();
        $('.tabs-button').click(function() {
          var target = $(this).data('target');
          $('.tabs-button.active').removeClass('active');
          $('.tabs-content.active').removeClass('active');
          $('#' + target ).addClass('active');
          $(this).addClass('active');
        });
      }
    });
    
  });