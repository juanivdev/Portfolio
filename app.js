function highlightItemOnHover() {
    var topNavItems = Array.from(document.getElementsByClassName("topnavitem"));
    
    topNavItems.forEach(function(item) {
      item.addEventListener("mouseover", function() {
        // Set opacity of the hovered item to 1
        this.style.opacity = "1";
        
        // Set opacity of other items to 0.25
        topNavItems.forEach(function(otherItem) {
          if (otherItem !== item) {
            otherItem.style.opacity = "0.30";
          }
        });
      });
      
      item.addEventListener("mouseout", function() {
        // Reset opacity of all items to 1
        topNavItems.forEach(function(otherItem) {
          otherItem.style.opacity = "1";
        });
      });
    });
  }
