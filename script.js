function create_account(){
    var a=document.getElementById("a").value;
    var b=document.getElementById("b").value;
    var c=document.getElementById("c").value;
    var d=document.getElementById("d").value;
    var e=document.getElementById("e").value;
    var f=document.getElementById("f").value;
    var g=document.getElementById("g").value;
    var h=document.getElementById("h").value;
    var i=document.getElementById("i").value;
    var j=document.getElementById("j").value;
    var k=document.getElementById("k").value;
    var l=document.getElementById("l").value;
    var m=document.getElementById("m").value;

    var letters = /^[A-Za-z]+$/;
    var number = /^[0-9]+$/

    if(a==''||b==''||c==''||d==''||e==''||f==''||g==''||h==''||i==''||j==''||k==''||l==''||m==''){
        alert("Isian tidak boleh kosong!");
    }
    else {
        alert("pendaftaran berhasil");
        window.location="https://www.javatpoint.com/";
    }
}
