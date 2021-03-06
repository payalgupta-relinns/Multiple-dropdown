let li=[
['Angular','React','Java','Python','Javascript'],
[1,2,3,4,5,6],
['Item1','Item2','Item3','Item4','Item5'],
['A','B','C','D','E'],
[10,20,30,40,50],
['Comp1','Comp2','Comp3','Comp4','Comp5'],
['F','G','H','I','J'],
['Item5','Item6','Item7','Item8','item9'],
['Android','Digital marketting','IOS','Sales','Backend'],
['Relinns1','Relinns2','Relinns3','Relinns4','Relinns5']
];
let ptot=[];
console.log(ptot.length);
let total=10;
let global=-1;
let data='<h1>Dropdown List</h1>';
for(let i=0;i<total;i++)
{
  data+='<div class="sel1">'
  data+='<span class="inn"  id="inputt_'+i+'"> Select Any</span>';
  data+='<button id="drop_'+i+'" class="arrow" onclick="showlist('+i+')" style="font-weight: bold;font-size: 18px;" value=0>&#9660</button>'
  data+='<div id="main_'+i+'" class="main" style="width: 200px;">';

       for(let j=0;j<li[i].length;j++)
            {
                data +=`<div class="items" id="li${j+1}" onclick="showvalue(this)">${li[i][j]}</div>`
            };
  data += '</div></div>'; 
//   console.log(data); 
  document.querySelector('.select').innerHTML=data;

}

document.addEventListener('click',function(event)
    { 
        if(global != -1){
            let tar=document.getElementById('drop_'+global+'');
            if(event.target!=tar)
            {   
            
                document.getElementById('main_'+global+'').style.display="none";
                document.getElementById('drop_'+global+'').innerHTML="&#9660"; 
                document.getElementById('drop_'+global+'').value=0;
            }
        }

    })
function showlist(i)
{  
    while(ptot.length!=0)
    {
        for(k of ptot)
        {
            document.getElementById('main_'+k+'').style.display="none";
            document.getElementById('drop_'+k+'').innerHTML="&#9660"; 
            document.getElementById('drop_'+k+'').value=0;
            ptot.shift();
        }
    }
   ptot.push(i);
    global=i;
    document.getElementById('main_'+i+'').style.display="block";
    if(document.getElementById('drop_'+i+'').value==0)
    {  
     document.getElementById('drop_'+i+'').innerHTML="&#9650";
     document.getElementById('drop_'+i+'').value=1;
     ptot.push(i);
     document.getElementById('main_'+i+'').style.display="block"
}
else if( document.getElementById('drop_'+i+'').value==1)
{
document.getElementById('main_'+i+'').style.display="none";
document.getElementById('drop_'+i+'').value=0;
document.getElementById('drop_'+i+'').innerHTML="&#9660";}
}
function showvalue(id)
{       
        document.getElementById('inputt_'+global+'').innerHTML=id.innerHTML
        document.getElementById('main_'+global+'').style.display="none";
        document.getElementById('drop_'+global+'').innerHTML="&#9660"; 
        document.getElementById('drop_'+global+'').value=0;
}