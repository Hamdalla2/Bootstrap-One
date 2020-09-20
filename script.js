// Qamar driver Hamdallah navigator
var obj = {}
obj.tom = []
obj.sam = []
obj.kat = []
var obj2 = {}
obj2.tom = []
obj2.sam = []
obj2.kat = []

function each(array,f){
	if(!Array.isArray(array)){
    for(var i in array){
    	f(array[i],i)
    }
	}
	else{for(var i=0;i<array.length;i++){f(array[i],i)}}
}

function s() {
    var name = $('#userwelcom').text().split(' ')
    var Activeuser = name[1].toLowerCase()
    var value = $('#txt').val()
    console.log(Activeuser)
    if (Activeuser === 'user') { alert('No user selected!!!') }
    else {
        if (value === '') {
            alert('Add Some Tasks!!!')
        }
        else {
            var newtask = $('<div class=tasks></div>')
            var timeadd = Date().split(' ')
            timeadd.pop(); timeadd.pop(); timeadd.pop(); timeadd.pop()
            newtask.html("<input type=checkbox onclick=t(this)>" + value + "<input type=button value=Edit onclick=r(this)><input type=button value=Delete onclick=d(this)>Added on:" + timeadd.join(' '))
            $('#txt').val("")
            obj[Activeuser].push(newtask)
            $('#two').html("")
            for(var i=0;i<obj[Activeuser].length;i++){
            $('#two').append(obj[Activeuser][i])}
        }
    }

}
// Hamdallah driver Qamar navigator
function t(e) {
	var name = $('#userwelcom').text().split(' ')
    var Activeuser = name[1].toLowerCase()
	var x = e.parentElement
	var c=document.getElementsByClassName("tasks")
	each(c,function(item,i){if(item===x)
	obj[Activeuser].splice(i,1)})
	obj2[Activeuser].push(x)
    if ($(e).is(':checked')) {
            obj2[Activeuser].push(newtask)
            $('#two').html("")
            for(var i=0;i<obj[Activeuser].length;i++){
            $('#two').append(obj[Activeuser][i])}
        $(x).css('text-decoration', 'line-through black')
    }
    else {
        $('#two').append(x)
        $(x).css('text-decoration', 'none')
    }
}

function d(e) {
    var x = e.parentElement
    x.remove()
}

function r(e) {
    var y = e.parentElement.firstChild
    var x = e.parentElement
    if ($(y).is(':checked')) {
        x.innerHTML = "<input type=checkbox onclick=t(this) checked><input type=\"text\" id=txt2><input type='button' value='Save' onclick=w(this)><input type=button value=Delete onclick=d(this)>"
    }
    else {
        x.innerHTML = "<input type=checkbox onclick=t(this)><input type=\"text\" id=txt2><input type='button' value='Save' onclick=w(this)><input type=button value=Delete onclick=d(this)>"
    }
}

function w(e) {
    var y = e.parentElement.firstChild
    var x = e.parentElement
    if ($("#txt2").val() === '') {
        alert("Don't leave it Empty!!")
    }
    else {
        if ($(y).is(':checked')) {
            x.innerHTML = "<input type=checkbox onclick=t(this) checked>" + $("#txt2").val() + "<input type='button' value='Edit' onclick=r(this)><input type=button value=Delete onclick=d(this)>"
        }
        else {

            x.innerHTML = "<input type=checkbox onclick=t(this)>" + $("#txt2").val() + "<input type='button' value='Edit' onclick=r(this)><input type=button value=Delete onclick=d(this)>"
        }
    }
}



var users = ['Tom', 'Sam', 'Kat']

for (var i in users) {
    var name = users[i]
    $('#users').append('<input class=userimg type=image src=user1.png >' + '<span onclick=st(this)>' + users[i] + '</span>')
}

function st(e) {

    $('#userwelcom').text('Welcome ' + $(e).text())
    //console.log(name)

    $('span').css('color', 'rgb(33, 128, 112)')
    $(e).css('color', 'black')
    $('#userwelcom').text('Welcome ' + $(e).text())
    var name = $('#userwelcom').text().split(' ')
    console.log(name[1].toLowerCase())


}