/* функция добавления ведущих нулей */
/* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(value)
{
    if (value < 10)
    {
        value='0'+value;
    }
    return value;
}

/* функция получения текущей даты и времени */
function date_time()
{
    var current_datetime = new Date();/*
    var day = zero_first_format(current_datetime.getDate());
    var month = zero_first_format(current_datetime.getMonth()+1);
    var year = current_datetime.getFullYear();*/
    var hours = zero_first_format(current_datetime.getHours());
    var minutes = zero_first_format(current_datetime.getMinutes());
    var seconds = zero_first_format(current_datetime.getSeconds());

    // return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    return hours+":"+minutes+":"+seconds;
}

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
// document.getElementById('current_date_time_block').innerHTML = date_time();

/* каждую секунду получаем текущую дату и время */
/* и вставляем значение в блок с id "current_date_time_block2" */
console.log('test');

setInterval(function () {
    document.getElementById('current_date_time').innerHTML = date_time();
}, 1000);

// let font="./"+document.getElementById('font').value+"/"+document.getElementById('font').value.split('-').join('')+document.getElementById('font_style').value+".ttf";
let font=document.getElementById('font').value.split('-').join('')+document.getElementById('font_style').value;

document.addEventListener('change', function(){
    font=document.getElementById('font').value.split('-').join('')+document.getElementById('font_style').value;
    console.log('Изменен шрифт: '+font);
    document.getElementById('time_center').style.fontFamily=font;
});

togglePanel=true;
document.querySelector('.toggle_panel').addEventListener('click', function() {
    console.log('Нажата');
    if(togglePanel==true){
        document.querySelector('.selector').style.display='none';
        togglePanel=false;
    }
    else{
        document.querySelector('.selector').style.display='block';
        togglePanel=true;
    }
});

document.querySelector('#font_color').addEventListener('change', function() {
    console.log('Изменён цвет');
    document.getElementById('current_date_time').style.color=document.querySelector('#font_color').value
});

// console.log(document.getElementById('font').value);