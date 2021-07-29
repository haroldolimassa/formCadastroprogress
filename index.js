let fields = document.querySelectorAll('.fields');
fields.forEach( element => {
    let input =
element.querySelector('.input');
    let highlight =
element.querySelector('.highlight');

input.addEventListener('keyup', e
=> {
        let value = input.value;
        highlight.innerHTML = 
value;

});
});

function alert()
        {
            Swal.fire(
             'Obrigado!',
             'You clicked the button!',
             'success'
                    )
        }