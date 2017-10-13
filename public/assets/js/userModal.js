function userModal(srcImg,hist,hrNeed,charName){
    
          
          $(".frame").attr("src", srcImg);
          $(".hours").text(hrNeed);
          $("#overView").text(hist);
          $(".charNam").text(charName);
          
    }