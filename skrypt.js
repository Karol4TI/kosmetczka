function ObliczCeneZabiegow(){
    const checkboxes=
    document.querySelectorAll('.zabieg');
    let CalkowitaCena=0;
    checkboxes.forEach(function(chekbox){
        if (checkboxe.checked){
            CalkowitaCena +=
            parseFloat(checkbox.getAttribute('data-cena'));
        }
    });
    document.getElementById('calkowitaCena').innerText = 'Calkowaita cena : '+ calkowitaCena +' PLN';
}
document.getElementById('obliczCene').addEventListener('click',obliczCeneZabiegow);