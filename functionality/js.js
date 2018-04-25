
  $(document).ready(function (){
        // check off the specific todos
        $("li").click(function(){
         $(this).toggleClass("completed");
        })
  })