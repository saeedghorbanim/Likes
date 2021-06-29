var count = 0;
var counting = document.querySelector("#likes");

console.log(counting);

function add ()
{
    count++;
    counting.innerText = count + " like(s)"
    console.log(count);
}