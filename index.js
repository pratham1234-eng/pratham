for (var i=0;i<document.querySelectorAll('.btn').length; i++) {

document.querySelectorAll('.btn')[i].addEventListener('click',function(){
document.querySelector('.width').value = document.querySelector('.width').value + this.value;
});
}

  document.querySelector('.btnnn').addEventListener('click',function(){
  document.querySelector('.width').value = eval(document.querySelector('.width').value);
  });

  document.querySelector('.clear').addEventListener('click',function(){
  document.querySelector('.width').value = " ";

  });

 document.querySelector('.back').addEventListener('click',function(){
    document.querySelector(".width").value =  document.querySelector(".width").value.slice(0, document.querySelector(".width").value.length - 1);

});
