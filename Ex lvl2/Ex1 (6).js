var b;
do{
   b=prompt("Entrer un nombre entier");
}while(isNaN(b) || b%1!==0);

document.write("<h4>La table de multiplication du nombre: "+b+"</h4>")
document.write("<table border >");

for(var c=1;c<=10;c++){
   document.write("<tr>");
   document.write("<td>"+b+" x "+c+" =</td>");
   document.write("<td>"+b*c+"</td>");
   document.write("</tr>");
}
document.write("</table>");