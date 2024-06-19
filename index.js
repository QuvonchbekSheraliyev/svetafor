const qizil = document.getElementById("btn-one")
const sariq = document.getElementById("btn-two")
const yashil = document.getElementById("btn-tree")

qizil.addEventListener('click' , () =>
{
    qizil.style. opacity = 1
    qizil.style.background = 'red'

    setTimeout(() => {
     qizil.style. opacity = 0.5
    qizil.style.background = 'red'
    }, 5000);

})
sariq.addEventListener('click' , () =>
    {
        sariq.style. opacity = 1
        sariq.style.background = 'yellow'
    
        setTimeout(() => {
         sariq.style. opacity = 0.5
        sariq.style.background = 'yellow'
        }, 5000);
    
    })
    yashil.addEventListener('click' , () =>
        {
            yashil.style. opacity = 1
            qizil.style.background = 'gren'
        
            setTimeout(() => {
             yashil.style. opacity = 0.5
            yashil.style.background = 'gren'
            }, 5000);
        
        })




