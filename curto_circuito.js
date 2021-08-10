/**
 * Avaliação de curto-circuito
 * Como expressões lógicas são avaliadas da esquerda para a
 * direita, elas são testadas como possíveis avaliações de 
 * "curto-circuito" utilizando as seguintes regras:
 * 
 * false && qualquercoisa é avaliado em curto-circuito como falso.
 * true || qualquercoisa é avaliado em curto-circuito como verdadeiro.
 * As regras de lógica garantem que estas avaliações estejam 
 * sempre corretas. Repare que a parte qualquercoisa das 
 * expressões acima não é avaliada, de forma que qualquer 
 * efeito colateral de fazê-lo não produz efeito algum.
 */

/*
  - AND lógico (&&)  -> expr1 && expr2 -> (E lógico) - Retorna expr1 caso possa ser convertido para falso; senão, retorna expr2. Assim, quando utilizado com valores booleanos, && retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso.
  - OU lógico (||) -> expr1 || expr2 -> (OU lógico) -  Retorna expr1 caso possa ser convertido para verdadeiro; senão, retorna expr2. Assim, quando utilizado com valores booleanos, || retorna verdadeiro caso ambos os operandos sejam verdadeiro; se ambos forem falsos, retorna falso.
  - NOT lógico (!) -> !expr -> (Negação lógica) Retorna falso caso o único operando possa ser convertido para verdadeiro; senão, retorna verdadeiro.

OBS: Exemplos de expressões que podem ser convertidas para falso são aquelas que são avaliados como nulo, 0, string vazia ("") ou undefined.

*/

//O código a seguir mostra exemplos do operador && (E lógico).
var a1 =  true && true;     // t && t retorna true
var a2 =  true && false;    // t && f retorna false
var a3 = false && true;     // f && t retorna false
var a4 = false && (3 == 4); // f && f retorna false
var a5 = "Gato" && "Cão";   // t && t retorna Cão
var a6 = false && "Gato";   // f && t retorna false
var a7 = "Gato" && false;   // t && f retorna false
console.log(a6);


//O código a seguir mostra exemplos do operador || (OU lógico).
var o1 =  true || true;     // t || t retorna true
var o2 = false || true;     // f || t retorna true
var o3 =  true || false;    // t || f retorna true
var o4 = false || (3 == 4); // f || f retorna false
var o5 = "Gato" || "Cão";   // t || t retorna Gato
var o6 = false || "Gato";   // f || t retorna Gato
var o7 = "Gato" || false;   // t || f retorna Gato

//O código a seguir mostra exemplos do operador ! (negação lógica).
var n1 = !true;   // !t retorna false
var n2 = !false;  // !f retorna true
var n3 = !"Gato"; // !t retorna false
var n3 = !!"Gato"; // !t retorna true