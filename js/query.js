$(function(){
  $(".term").click(function(){
    $(this).hide();
    $(this).siblings(".cheat").show();
  });
  $(".cheat").click(function(){
    $(this).hide();
    $(this).siblings(".term").show();
  });
});
