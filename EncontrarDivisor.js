function PlayerMain(){
    let nums = readline();
    let list = nums.split(",");
    parseInt(list);

    //Para debug

    console.error("My Debug Message");
    console.log(resolver(list));

    function resolver(){
        let divisor = 0;
        let maior = 0;
        let menor = 0;
        let soma = 0;
        let media = 0;
        let resultado = 0;

        for (let i = 0; i < list.length; i++) {
            if (list[i] > maior) {
                maior = list[i];
            }
            if (list[i] < menor) {
                menor = list[i];
            }
            soma += list[i];
        }
        media = soma / list.length;

        for (let i = 0; i < list.length; i++) {
            if (list[i] % media == 0) {
                divisor++;
            }
        }
        return divisor;
    }
}

PlayerMain();
