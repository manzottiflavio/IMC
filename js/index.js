function Calcular(Calcular){
        
    var n1=window.document.getElementById('n1')
    var n2=window.document.getElementById('n2')
    var res=window.document.getElementById('res')
    var name1=Number(n1.value)
    var name2=Number(n2.value)
    var name3=(name1/(name2*name2)).toFixed(2)
    if(name3 <= 18.5){
        res.innerHTML=`<b>Seu indice de massa corporal é de ${name3} você esta abaixo do minimo e magro </b>`
   }else if(name3 >18.5  && name3 < 24.9){
        res.innerHTML=`<b>Seu indice de massa corporal é de  ${name3}  você esta bom </b> `;
    }else  if(name3 >25.0 &&  name3 <29.9){
        res.innerHTML=`<b>Seu indice de massa corporal é de  ${name3} você  esta com sobrepeso </b>`;
    }else if(name3 >30.0  && name3 <39.9){
        res.innerHTML=`<b>Seu indice de massa corporal é de  ${name3}  você esta com obesidade </b>`;
    } else if( name3 > 40.0){
        res.innerHTML=`<b>Seu indice de massa corporal é de  ${name3}  você esta com obesidade grave </b>`;
    }else{
        
    }
}

function Limpar(Limpar){
    window.location.href='index.html'
}
