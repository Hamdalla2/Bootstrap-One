// Qamar driver Hamdallah navigator
var obj = {}
obj.dad = []
obj.mom = []
obj.tom = []
var obj2 = {}
obj2.tom = []
obj2.dad = []
obj2.mom = []

function each(array, f) {
    if (!Array.isArray(array)) {
        for (var i in array) {
            f(array[i], i)
        }
    }
    else { for (var i = 0; i < array.length; i++) { f(array[i], i) } }
}

function display(){
	    var name = $('#userwelcom').text().split(' ')
    var Activeuser = name[1].toLowerCase()
	            $('#two').html("")
            for (var i = 0; i < obj[Activeuser].length; i++) {
                $('#two').append(obj[Activeuser][i])
            }
            $('#three').html("")
            for (var i = 0; i < obj2[Activeuser].length; i++) {
                $('#three').append(obj2[Activeuser][i])
            }
}

function s() {//Add Task Function
    var name = $('#userwelcom').text().split(' ')
    var Activeuser = name[1].toLowerCase()
    var value = $('#txt').val()
    if (Activeuser === 'user') { alert('No user selected!!!') }
    else {
        if (value === '') {
            alert('Add Some Tasks!!!')
        }
        else {
            var newtask = $('<div class=tasks></div>')
            var timeadd = Date().split(' ')
            timeadd.pop(); timeadd.pop(); timeadd.pop(); timeadd.pop()
            newtask.html("<input type=checkbox onclick=t(this)>" + value + "<input type=button value=Edit onclick=r(this)><input type=button value=Delete onclick=d(this)>Added on: " + timeadd.join(' '))
            $('#txt').val("")
            obj[Activeuser].push(newtask)
            display()
        }
    }

}
// Hamdallah driver Qamar navigator
function t(e) {//Check Completed Task
    var name = $('#userwelcom').text().split(' ')
    var Activeuser = name[1].toLowerCase()
    var x = e.parentElement
    var c = document.getElementsByClassName("tasks")
    var d = document.getElementsByClassName("deleted")

    if ($(e).is(':checked')) {
        each(c, function (item, i) {
        if (item === x)
        obj[Activeuser].splice(i, 1)
        })
        $(x).attr('class', "deleted")
        $(x).css('text-decoration', 'line-through')
        obj2[Activeuser].push(x)
    }

    else {
        each(d, function (item, i) {
        if (item === x)
        obj2[Activeuser].splice(i, 1)
        })
        $(x).attr('class', "tasks")
        $(x).css('text-decoration', 'none')
        obj[Activeuser].push(x)
    }

    display()
}

function d(e) {//Delete Task Function
    var name = $('#userwelcom').text().split(' ')
    var Activeuser = name[1].toLowerCase()
    var x = e.parentElement
    var c = document.getElementsByClassName("tasks")
    var d1 = document.getElementsByClassName("deleted")
    var something = x.firstChild
    if ($(something).not(':checked')) {
        each(c, function (item, i) {
            if (item === x)
            obj[Activeuser].splice(i, 1)
        })
    }
    if ($(something).is(':checked'))  {
        each(d1, function (item, i) {
            if (item === x)
            obj2[Activeuser].splice(i, 1)
        })
    }

    display()
}

function r(e) { //Edit Task Function
    var y = e.parentElement.firstChild
    var x = e.parentElement
    if ($(y).is(':checked')) {
        x.innerHTML = "<input type=checkbox onclick=t(this) checked><input type=\"text\" id=txt2><input type='button' value='Save' onclick=w(this)><input type=button value=Delete onclick=d(this)>"
    }
    else {
        x.innerHTML = "<input type=checkbox onclick=t(this)><input type=\"text\" id=txt2><input type='button' value='Save' onclick=w(this)><input type=button value=Delete onclick=d(this)>"
    }
}

function w(e) {//Save Edit Function
    var y = e.parentElement.firstChild
    var x = e.parentElement
    if ($("#txt2").val() === '') {
        alert("Don't leave it Empty!!")
    }
    else {
        var dat=Date().split(' ')
            dat.pop(); dat.pop(); dat.pop(); dat.pop()
            dat=dat.join(' ')
        if ($(y).is(':checked')) {
            x.innerHTML = "<input type=checkbox onclick=t(this) checked>" + $("#txt2").val() + "<input type='button' value='Edit' onclick=r(this)><input type=button value=Delete onclick=d(this)> Edited on: "+dat
        }
        else {
            x.innerHTML = "<input type=checkbox onclick=t(this)>" + $("#txt2").val() + "<input type='button' value='Edit' onclick=r(this)><input type=button value=Delete onclick=d(this)> Edited on: "+dat
        }
    }
}



var users = ['Dad', 'Mom', 'Tom']
var famImages =['dad.png','mom.jpg','tom.png']
for (var i in users) {
    var name = users[i]
    
   // $("#my_image").attr("src",FamImages[i]);
    $('#users').append('<input class=userimg type=image src='+famImages[i] +'>' + '<span onclick=st(this)>' + users[i] + '</span>')
}

function st(e) {
    $('#userwelcom').text('Welcome ' + $(e).text())
    $('span').css('color', 'rgb(33, 128, 112)')
    $(e).css('color', 'black')
    $('#userwelcom').text('Welcome ' + $(e).text())
    var name = $('#userwelcom').text().split(' ')
    display()
}