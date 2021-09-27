function calcular(){
    var t1 = document.getElementById('txtn1')
    var t2 = document.getElementById('txtn2')
    var g = document.getElementById('resultado')

    var n1 =  Number(t1.value)
    var n2 =  Number(t2.value)
    

    var calc = document.getElementsByName('rad')

    if(calc[0].checked){
        var s = n1 + n2

    } else if(calc[1].checked){
var s = n1 - n2

    }else if(calc[2].checked){
var s = n1 * n2

    }else if(calc[3].checked){
var s = n1 / n2

    }

    g.innerHTML = `O resultado de ${n1} e ${n2} é igual a <strong>${s}</strong>`

}