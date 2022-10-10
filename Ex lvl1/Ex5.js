document.write("<center>");
document.write("<caption> Table de multiplication jusqu'à 9</caption>");
document.write("<table border=1>");
document.write("<tr><td>","x","</td>");
for(var a=1;a<=9;a++)
document.write("<td>",a,"</td>");
for(var a=1;a<10;a++)
{
document.write("<tr>");
document.write("<td>",a,"</td>");
for(var b=1;b<=9;b++)
{
document.write("<td>",a*b,"</td>");
}
document.write("</tr>");
}
document.write("</table>");
