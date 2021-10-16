$(function() {
  

    const devlabs = [
        {
            title: "manywow",
            link: "https://github.com/NashJ99/manyWow", 
           
          },
          {
            title: "echo",
            link: "https://github.com/NashJ99/echo", 
           
          },
          {
            title: "delta",
            link: "https://github.com/NashJ99/labdelta",
            
            },
            {
        title: "foxtrot",
        link: "https://github.com/NashJ99/foxtrot",
        
        }
    ];
    // iterate over the JSON array
    $.each(devlabs, function ( item) {
      console.log("Game Title: " + item.title);
      console.log("Game URL: " + item.link);
    
    
      // create a brand new HTML element JUST with code
    
    var el = `<div class='card text-center mx-auto bg-dark blue' style="width: 200px"> \
      <button class='cardOpen2 btn btn-outline-info'> ${ item.title } </button> \
       <div class='cardHide'> \
           <br> \
           <a href="${ item.link }" target="_blank" class="link-info" >Previouslabs</a> \
           <br> \
           <button class='btn btn-outline-info cardClose2'>Close</button> \
       </div>
     </div>`; 
    
     console.log(el); 
    
    
    $('#firstCard').append(el);
    
    $('.nav-dropdown').append($(`<li><a href="#!"> ${item.link} </a></li>`));
    
    });
    
    
    });
    