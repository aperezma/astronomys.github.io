$(document).ready(function(){
    getSongs();
};
var audio;
var music;
function getSongs(){
    $.getJSON("app.json",fuction(mjson){
        music = mjson.music;
        genList(music);

    });
}
function genList(music){
    $.each(music.songs, function (i,song){
        $('#playlist').append('<li class="list-group-item" id="'+i+'">'+song.name+'</li>')
    })
}