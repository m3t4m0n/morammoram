// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


//----------------------------------------------------------------Isotope--------
// external js: isotope.pkgd.js
$(document).ready(function(){
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  
  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  
  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

});


//----------------------------------------------------------------Isotope - end-------
  
  
 

    var list_slideSpeed = 50;    // Higher value = faster
    var list_timer = 20;    // Lower value = faster
    
    var objectIdToSlideDown = false;
    var list_activeId = false;
    var list_slideInProgress = false;
    function showHideContent(e,inputId)
    {
        if(list_slideInProgress)return;
        list_slideInProgress = true;
        if(!inputId)inputId = this.id;
        inputId = inputId + '';
        var numericId = inputId.replace(/[^0-9]/g,'');
        var memberDiv = document.getElementById('list_a' + numericId);
    
        objectIdToSlideDown = false;
        
        if(!memberDiv.style.display || memberDiv.style.display=='none'){        
            if(list_activeId &&  list_activeId!=numericId){            
                objectIdToSlideDown = numericId;
                slideContent(list_activeId,(list_slideSpeed*-1));
            }else{
                
                memberDiv.style.display='block';
                memberDiv.style.visibility = 'visible';
                
                slideContent(numericId,list_slideSpeed);
            }
        }else{
            slideContent(numericId,(list_slideSpeed*-1));
            list_activeId = false;
        }    
    }
    
    function slideContent(inputId,direction)
    {
        
        var obj =document.getElementById('list_a' + inputId);
        var contentObj = document.getElementById('list_ac' + inputId);
        height = obj.clientHeight;
        if(height==0)height = obj.offsetHeight;
        height = height + direction;
        rerunFunction = true;
        if(height>contentObj.offsetHeight){
            height = contentObj.offsetHeight;
            rerunFunction = false;
        }
        if(height<=1){
            height = 1;
            rerunFunction = false;
        }
    
        obj.style.height = height + 'px';
        var topPos = height - contentObj.offsetHeight;
        if(topPos>0)topPos=0;
        contentObj.style.top = topPos + 'px';
        if(rerunFunction){
            setTimeout('slideContent(' + inputId + ',' + direction + ')',list_timer);
        }else{
            if(height<=1){
                obj.style.display='none'; 
                if(objectIdToSlideDown && objectIdToSlideDown!=inputId){
                    document.getElementById('list_a' + objectIdToSlideDown).style.display='block';
                    document.getElementById('list_a' + objectIdToSlideDown).style.visibility='visible';
                    slideContent(objectIdToSlideDown,list_slideSpeed);                
                }else{
                    list_slideInProgress = false;
                }
            }else{
                list_activeId = inputId;
                list_slideInProgress = false;
            }
        }
    }
    
     
    
    function initShowHideDivs()
    {
        var divs = document.getElementsByTagName('DIV');
        var divCounter = 1;
        for(var no=0;no<divs.length;no++){
            if(divs[no].className=='list_no'){
                divs[no].onclick = showHideContent;
                divs[no].id = 'list_q'+divCounter;
                var member = divs[no].nextSibling;
                while(member && member.tagName!='DIV'){
                    member = member.nextSibling;
                }
                member.id = 'list_a'+divCounter;    
                contentDiv = member.getElementsByTagName('DIV')[0];
                contentDiv.style.top = 0 - contentDiv.offsetHeight + 'px';     
                contentDiv.className='list_member_content';
                contentDiv.id = 'list_ac' + divCounter;
                member.style.display='none';
                member.style.height='1px';
                divCounter++;
            }        
        }    
    }
  
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

function showPopup(link) {
  var width = screen.width / 2 - 250;
  var height = screen.height / 2 - 225;
  window.open(link, '팀 신청', 'width=500, height=450, left=' + width + ', top=' + height);
}
