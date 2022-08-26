var cricket = setInterval(function(){
    console.log('msd');
}, 500);

setTimeout(function(){
    clearInterval(cricket);
},2500);