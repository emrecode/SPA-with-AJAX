$(document).ready(function(){
    var projeler = $.getJSON("/api/projelerroutes");
    
    projeler
    .then(projelerEkle);

    $("#Inputa").keypress((e)=>{
        if(e.which == 13){
           yeniProjeEkle();
        }
    });
    $("#Inputu").keypress((e)=>{
        if(e.which == 13){
            yeniProjeEkle();
        }
    });
    $("#Inputi").keypress((e)=>{
        if(e.which == 13){
            yeniProjeEkle();
        }
    });
    $("#Inputy").keypress((e)=>{
        if(e.which == 13){
            yeniProjeEkle();
        }
    });

    
    
    $('.projeler').on('click','.fa',function(){
        var tiklanan = $(this).parent().parent();
        var silinenURL = '/api/projelerroutes/' + tiklanan.data('id');
        $.ajax({
            method:'DELETE',
            url: silinenURL
        })
        .then((silinenData)=>{
            console.log(silinenData);
            tiklanan.remove();
        })
    });

    
});

function projelerEkle(projeler){
    projeler.forEach(function(proje){
      projeEkle(proje);
    });
}   

function projeEkle(proje){
    var yeniProje =  $('<li class="projelerimiz"> '+proje.projeadi+' - '+proje.uniadi+' - '+proje.isim+' - '+proje.yil+' <span> <i class="fa fa-trash-o" aria-hidden="true"></i> </span> </li>');

    yeniProje.data('id', proje._id);
   
    $('.projeler').append(yeniProje);
}

function yeniProjeEkle(){
    var yeniProje = $('#Inputa').val();
    var yeniUniAdi = $('#Inputu').val();
    var yeniIsim = $('#Inputi').val();
    var yeniYil = $('#Inputy').val();

    $.post('/api/projelerroutes', { projeadi : yeniProje , uniadi : yeniUniAdi , isim : yeniIsim , yil:yeniYil })

    .then((yeniEklenenProje)=>{
        projeEkle(yeniEklenenProje);

        $('#Inputa').val('');
        $('#Inputu').val('');
        $('#Inputi').val('');
        $('#Inputy').val('');
    })
}