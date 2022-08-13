// Listen for click on toggle checkbox
$('#all').click(function(event) {   
  if(this.checked) {
      // Iterate each checkbox
      $('.selector').each(function() {
          this.checked = false;
          document.getElementById("listAll").style.display="block";
          document.getElementById("listMechanical").style.display="none";
          document.getElementById("listSoftware").style.display="none";                        
          document.getElementById("listRobotics").style.display="none";
      });
      this.checked = true;
  } else {
      $('.selector').each(function() {
          this.checked = false;                       
      });
  }
}); 

// Listen for click on toggle checkbox
$('#mechanical').click(function(event) {   
  if(this.checked) {
      // Iterate each checkbox
      $('.selector').each(function() {
          this.checked = false;
          document.getElementById("listAll").style.display="none";
          document.getElementById("listMechanical").style.display="block";
          document.getElementById("listSoftware").style.display="none";                        
          document.getElementById("listRobotics").style.display="none";                    
      });
      this.checked = true;
  } else {
      $('.selector').each(function() {
          this.checked = false;                       
      });
  }
}); 

// Listen for click on toggle checkbox
$('#software').click(function(event) {   
  if(this.checked) {
      // Iterate each checkbox
      $('.selector').each(function() {
          this.checked = false;
          document.getElementById("listAll").style.display="none";
          document.getElementById("listMechanical").style.display="none";
          document.getElementById("listSoftware").style.display="block";                        
          document.getElementById("listRobotics").style.display="none";                         
      });
      this.checked = true;
  } else {
      $('.selector').each(function() {
          this.checked = false;                       
      });
  }
}); 

// Listen for click on toggle checkbox
$('#robotics').click(function(event) {   
  if(this.checked) {
      // Iterate each checkbox
      $('.selector').each(function() {
          this.checked = false;
          document.getElementById("listAll").style.display="none";
          document.getElementById("listMechanical").style.display="none";
          document.getElementById("listSoftware").style.display="none";                        
          document.getElementById("listRobotics").style.display="block";                         
      });
      this.checked = true;
  } else {
      $('.selector').each(function() {
          this.checked = false;                       
      });
  }
}); 