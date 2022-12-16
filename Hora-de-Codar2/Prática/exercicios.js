/* Exercício 1
      var n1 = prompt ("Digite o primeiro número: ");
      var n2 = prompt ("Digite o segundo número: ");
      if (n1 > n2) {
          alert ("O primeiro número é o maior: " + n1);
      }
      if (n1< n2) {
          alert ("O segundo número é o maior: " + n2);
      } */

      /* Exercício 2
      var n1 = prompt ("Digite o primeiro valor: ");
        var n2 = prompt ("Digite o segundo valor: ");
        if (n1 > 0) {
            alert ("O primeiro valor: " + n1 + " é positivo "); 
        }
        if (n1 < 0) {
            alert ("O primeiro valor: " + n1 + " é negativo ");
        }
        if (n1 = 0){
            alert ("O primeiro valor é zero: "); 
        }
        if (n2 > 0) {
            alert ("O segundo valor: " + n2 + " é positivo ");
        }
        if (n2 < 0) {
           alert ("O segundo valor: " + n2 + " é negativo ");
        }
        if (n2 = 0){
            alert ("O segundo valor: é zero: ");
        }*/

        /* Exercício 3
        var n1 = prompt ("Digite o primeiro número: ");
        var n2 = prompt ("Digite o segundo número:  ");
        var n3 = prompt ("Digite o terceiro número: ");

        if ( n1  >  n2  &&  n1  >  n3 ) {
            alert ( "O primeiro valor:  "  +  n1  +  " é maior " ) ;
        }
        if ( n2  >  n1  &&  n2  >  n3 ) {
            alert ( "O segundo valor:  "  +  n2  +  " é maior " ) ;
        }
        if ( n3  >  n1  &&  n3  >  n2 ) {
            alert ( "O terceiro valor:  "  +  n3  +  " é maior " ) ;
        } */

        /* Exercício 4 
        var  n1  =  parseInt (prompt ( "Digite o primeiro número?" )) ;
        var  n2  =  parseInt (prompt ( "Digite o segundo número?" )) ;
        var  n3  =  parseInt (prompt ( "Digite o terceiro número?" )) ;
        var  soma ;

        if  ( n3  <  n1  &&  n1  <  n2 )  {
        soma  =  n1  +  n2 ;
        alert ( "A soma é: "  +  soma ) ;
        } 

        if  ( n2  <  n1  &&  n1  <  n3 )  {
        soma  =  n1  +  n3 ;
        alert ( "A soma é: "  +  soma ) ;
        } 

        if  ( n1  >  n3 )  {
        soma  =  n1  +  n2 ;
        alert ( "A soma é: "  +  soma ) ;
        } */

        /* Exercício 5
        var n1 = parseInt (prompt ( "Digite o primeiro número: " ));
        var n2 = parseInt (prompt ( "Digite o segundo número: " ));
        var n3 = parseInt (prompt ( "Digite o terceiro número: " ));
        var n4 = parseInt (prompt ( "Digite o quarto número: " ));
        var n5 = parseInt (prompt ( "Digite o quinto número: " ));
        var n6 = parseInt (prompt ( "Digite o sexto número: " ));

        var soma = n1 + n2 + n3+ n4 + n5 + n6;
        var media = soma/6;

        alert ( " " +  " " +  " " +  " "  +  " "  + " soma : "  +  soma  +  " media: "  +  media ) ; */

        /* Exercício 6
        var  n1  =  parseInt (prompt ( "Digite o primeiro número: " ));
        var  n2  =  parseInt (prompt ( "Digite o segundo número: " ));
        var  n3  =  parseInt (prompt ( "Digite o terceiro número: " ));
        var  n4  =  parseInt (prompt ( "Digite o quarto número: " ));

        if  ( n1  >  n2  &&  n1  >  n3  &&  n1  >  n4 )  {
        alert ( "O primeiro número é: "  +  n1  +  " o último número é: "  +  n4  +  " o maior número é: "  +  n1 ) ;
        }

        if  ( n2  >  n1  &&  n2  >  n3  &&  n2  >  n4 )  {
        alert ( "O primeiro número é: "  +  n1  +  " o último número é: "  +  n4  +  " o maior número é: "  +  n2) ;
    
        }

        if  ( num3  >  n1  &&  n3  >  n2  &&  n3  >  n4 ) {
        alert ( "O primeiro número é: "  +  n1  +  " o último número é: "  +  n4  +  " o maior número é: "  +  n3) ;

        }
   

        if  ( num4  >  n1  &&  n4  >  n2  &&  n4  >  n3 )  {
        alert ( "O primeiro número é: "  +  n1  +  " o último número é: "  +  n4  +  " o maior número é: "  +  n4 ) ;
   
        } */

        /* Exercício 7
        var  n1  =  parseInt (prompt ( "Digite o primeiro número:" ));
        var  n2  =  parseInt (prompt ( "Digite o segundo número:" ));
        var  n3  =  parseInt (prompt ( "Digite o terceiro número:" ));
        var  n4  =  parseInt (prompt ( "Digite o quarto número:" ));
        var  n5  =  parseInt (prompt ( "Digite o quinto número:" ));
        var  n6  =  parseInt (prompt ( "Digite o sexto número:" ));
        var soma = 0;
 
        if  ( n1  <=  72 ) {
        soma  +=  n1 ;
        }
        if  ( n2  <=  72 ) {
        soma  +=  n2 ;
        }
        if  ( n3  <=  72 ) {
        soma  +=  n3 ;
        }
        if  ( n4  <=  72 ) {
        soma  +=  n4 ;
        }
        if  ( n5  <=  72 ) {
        soma  +=  n5 ;
        }
        if  ( n6  <=  72 ) {
        soma  +=  n6 ;
        }
 
        alert ("O resultado da soma é: " + soma);
        alert ("Números que o usuário informou: " +  n1  +  ', '  +  n2  +  ', '  +  n3  +  ', '  +  n4  +  ', '  +  n5  +  ', '  +  n6 ); */

        /* Exercício 8
        var n1  =  parseInt (prompt ( "Digite o primeiro número?" ) ) ;
        var n2  =  parseInt (prompt ( "Digite o segundo número?" ) ) ;
        var n3  =  parseInt (prompt ( "Digite o terceiro número?" ) ) ;
        var n4  =  parseInt (prompt ( "Digite o quarto número?" ) ) ;
        var soma = 0;
        var media = (n1 + n2 + n3 + n4)/4;

        if  (media  >  5) {
          soma  +=  n1 ;
          alert ( "Você passou no teste!" ) ;
        }
        if  (media  <  5) {
          soma  +=  n2 ;
          alert ("Tente novamente!") ;
        }
        alert ("A sua média é: " + media); */

        /* Exercício 9
        var ano = parseInt (prompt("Qual ano você nasceu?"));
        if (ano < 2004) {
            alert ("Você poderá votar este ano!")
        }

        if (ano >2004) {
            alert ("Você não poderá votar este ano.")
        } */

        /* Exercício 10
        var masculino; 
        var feminino;
  
        var  altura = parseInt (prompt( "Digite a sua altura:" ));
        var  sexo = parseInt (prompt( "Digite o seu sexo:" ));
  
        if  (sexo  =  masculino) {
          masculino =  (72,7  *  altura - 58);
        }
        alert ("O seu peso ideial é: "  +  masculino);
          if  (sexo  =  feminino)  {
          f  =  (62,1  *  altura  -  44,7);
          }
          alert ("O seu peso ideial é:"  +  feminino); */

        /* Exercício 10
        var  n1  =  parseInt (prompt("Digite o primeiro número:"));
        var  n2  =  parseInt (prompt("Digite o segundo número: "));
        var  calculadora  =  parseInt (prompt("Qual operação deseja realizar? :  1 = Adição, 2 = Subtração, 3 = Divisão, 4 = Multiplicação"));
        var  resultado =  0 ;

        if (calculadora  ==  1) {
            valor= n1 + n2;
        }

        else  if (calculadora  ==  2) {
            valor= n1 - n2;
        }

        else if (calculadora  ==  3) {
            valor =  n1  /  n2;
        }

        else  if  (calculadora  ==  4) {
            valor  =  n1  *  n2;
        }

        alert ( "O resultado da sua operação é: "  +  valor);*/ 