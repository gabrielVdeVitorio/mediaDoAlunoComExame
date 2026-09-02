const form = document.getElementById("userForm");
const value05Input = document.getElementById("value05");
const aditionalClass = document.getElementById("aditionalClass");
const mediaDoAluno = document.getElementById("mediaDoAluno");

let awaitingExam = false;
let media = 0;

form.addEventListener("submit", (event) =>
{
    event.preventDefault();

    const formData = new FormData(form);

    const value01 = parseFloat(document.getElementById("value01").value);
    const value02 = parseFloat(document.getElementById("value02").value);
    const value03 = parseFloat(document.getElementById("value03").value);
    const value04 = parseFloat(document.getElementById("value04").value);
    media = (value01 + value02 + value03 + value04) / 4;

    if (!awaitingExam)
    {
        if (media < 7)
        {
            awaitingExam = true;
            aditionalClass.style.display = "flex";
            value05Input.required = true;
            mediaDoAluno.textContent = `A média inicial do aluno é: ${media.toFixed(2)}, será necessário fazer o exame. Digite a nota do exame no campo acima e clique em "Calcular Média" novamente.`;

            
        }
        else
        {
            mediaDoAluno.textContent = `A média do aluno é: ${media.toFixed(2)}, o aluno está aprovado.`;
            resetForm();
        }
    }
    else
    {
        const value05 = parseFloat(value05Input.value);
        media = (media + value05) / 2;
        if (media < 5)
        {
            mediaDoAluno.textContent = `A média do aluno é: ${media.toFixed(2)}, o aluno foi reprovado.`;
        }
        else
        {
            mediaDoAluno.textContent = `A média do aluno é: ${media.toFixed(2)}, o aluno foi aprovado SOB EXAME.`;
        }
        resetForm();
    }
})

function resetForm()
{
    aditionalClass.style.display = "none";
    awaitingExam = false;
    value05Input.required = false;
    value01.setAttribute("autofocus", "true");
    form.reset();
}