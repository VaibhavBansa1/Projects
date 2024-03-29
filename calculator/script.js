function val_a(val)
{
    if (Dis_up_op.innerText === '+' || Dis_up_op.innerText === '-' || Dis_up_op.innerText === '÷' || Dis_up_op.innerText === '*')
    {
        document.getElementById("Dis_down").innerText = val
        Dis_up_op.innerText =""
    }
    else
    {
        let sum = parseInt(document.getElementById("Dis_down").innerText)
        val = 10 * sum + val
        document.getElementById("Dis_down").innerText = val
    }
}
function op(opera)
{
    let Dis_down = document.getElementById("Dis_down"),
    Dis_up_num =document.getElementById("Dis_up_num"),
    Dis_up_op = document.getElementById("Dis_up_op");
    if( opera === 'CE')
    {
        Dis_down.innerText = '0'
        Dis_up_num.innerText = '0'
        Dis_up_op.innerText = ''
    }
    if ( opera === '+')
    {
        Dis_up_op.innerText = opera
        Dis_up_num.innerText = parseInt(Dis_up_num.innerText) + parseInt(Dis_down.innerText)
        // Dis_down.innerText = 0
    }
    else if ( opera === '-')
    {
        Dis_up_op.innerText = opera
        Dis_up_num.innerText = parseInt(Dis_up_num.innerText) - parseInt(Dis_down.innerText)
        // Dis_down.innerText = 0
    }
    else if ( opera === '/')
    {
        Dis_up_op.innerText = '÷'
        if (parseInt(Dis_up_num.innerText) === 0)
        {
            Dis_up_num.innerText = Dis_down.innerText
        }
        else
        {
            Dis_up_num.innerText = parseInt(Dis_up_num.innerText) / parseInt(Dis_down.innerText)
        }
    }
    else if ( opera === '*')
    {
        Dis_up_op.innerText = opera
        if (parseInt(Dis_up_num.innerText) === 0)
        {
            Dis_up_num.innerText = Dis_down.innerText
        }
        else
        {
            Dis_up_num.innerText = parseInt(Dis_up_num.innerText) * parseInt(Dis_down.innerText)
        }
        // Dis_down.innerText = 0
    }
    else if(opera === 'C')
    {
        let val = document.getElementById("Dis_down").innerText
        document.getElementById("Dis_down").innerText = parseInt(val / 10)
    }
}
function equal_2()
{
    op(Dis_up_op.innerText)
    Dis_up_op.innerText = ''
    Dis_down.innerText = 0
}