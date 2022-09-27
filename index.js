function createFields()
{

var count=document.getElementById("count").value;
var container=document.getElementById("container");
container.innerHTML='';
for(var i=0;i<count;i++)
{
var id="inp"+i;
console.log("Inside getValue "+id);
container.innerHTML += '<div class="row"><div class="col-2"><label class="btn-sm btn-success" for="var3">Multiplier of gobbler- '+(i+1)+'</label>'+'</div><div class="col-2"><input type="text" class="form-control" name="' + i + '" id="inp' + i + '" value="" ></div><div class="col-2"><label class="btn-sm btn-success">Goo allocated for Gobbler '+(i+1)+'</label></div><div class="col-2"><input type="text" class="form-control" name="' + i + '" id="allocated' + i + '" value="" ></div><div class="col-2"><label class="btn-sm btn-success me-2" for="var3">Goo earned by Gobbler- '+(i+1)+'</label>'+'</div><div class="col-2"><input class="form-control" type="text" id="res'+i+'"></div></div><br>';
}
}


function getValue()
{

var res,sum=0,totalGoo=0;
var count=document.getElementById("count").value;
var intitalGoo=parseInt(document.getElementById("initialGoo").value);
var time=parseInt(document.getElementById("time").value);


for(var i=0;i<count;i++)
{
if(document.getElementById("inp"+i).value!=null){

sum+=parseInt(document.getElementById("inp"+i).value);
console.log("sum "+parseInt(document.getElementById("inp"+i).value));
}
}

for(var i=0;i<count;i++)
{
if(document.getElementById("inp"+i).value!=null){
var y=parseInt(document.getElementById("inp"+i).value);
console.log("sum "+(y/4)+' '+Math.sqrt(intitalGoo/sum)+' '+intitalGoo +' ');
document.getElementById("res"+i).value=(y/4)*(time+2*(Math.sqrt(intitalGoo/sum)))*(time+2*(Math.sqrt(intitalGoo/sum)));
document.getElementById("allocated"+i).value=(y/sum)*intitalGoo;
}

}
for(var i=0;i<count;i++)
{
if(document.getElementById("res"+i).value!=null){
var y=parseFloat(document.getElementById("res"+i).value);
totalGoo+=y;

}
}
document.getElementById("totalGooEarned").value=totalGoo;
console.log("sum "+sum);
}