const a = [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 3, 2, 1, 5, 4, 3, 2, 5, 1, 2, 3];

const res = new Map();
var i;

for(i = 0; i < a.length; i++)
{
    if(res.has(a[i]))
    {
        res.set(a[i], res.get(a[i]) + 1);
    }
    else
    {
        res.set(a[i], 1);
    }
}


console.log(res);

let keys = new Array();
keys = res.keys();
var i;

for(i of keys)
{
    document.write(i, " -> ", res.get(i), "<br>");
}

console.log(typeof keys);
console.log(typeof res.keys());
