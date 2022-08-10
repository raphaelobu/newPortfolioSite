// Listen for click on toggle checkbox
$('#all').click(function(event) {   
  if(this.checked) {
      // Iterate each checkbox
      $(':checkbox').each(function() {
          this.checked = true;                        
      });
  } else {
      $(':checkbox').each(function() {
          this.checked = false;                       
      });
  }
}); 

// Listen for click on toggle checkbox
$('#mechanical').click(function(event) {   
  if(!this.checked) {
      // Iterate each checkbox
      $('#all').each(function() {
          this.checked = false;                        
      });
  } else {
    if($('#software').checked && $('#robotics').checked){
      $('#all').each(function() {
        this.checked = true;                        
      });
    };              
  };
});

function checkall(){

}