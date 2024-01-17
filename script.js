/* 4 player related variables with properties */
var player1t=false;
var yout=false;
var player2t=false;
var player3t=false;
var cardtrans;
var randomwinner;
var housetrans;
var firstcp="p3";
var round=0;
/* card selection variables*/
var fcpgid;
var logiccol;
var card;
/* some important functions*/

function logicf1(no){
    var cardtrans;
    for(let i=0;i<cardpro.length;i++){
    if(document.getElementById(no).firstElementChild.id==cardpro[i]["gid"]){
        logiccol=cardpro[i]["type"];
        break
    }
  }
}

function logicf22(no){
    pylogic[1]=[];
    pylogic[2]=[];
    if(firstcp=="p1"){
        logicf1("player1house")
    }
     else if(firstcp=="p2"){
        logicf1("player2house")
    }
    else if(firstcp=="p3"){
        logicf1("player3house")
    }
    console.log(pylogic[0]) 
    for(let i=0;i<pylogic[0].length;i++){
        if(pylogic[0][i][1]==logiccol){
            pylogic[1].push(pylogic[0][i][0])
        }
    }
    var pyli=0
    if(pylogic[1].length!=0){
       
          for(let i=0;i<pylogic[1].length;i++){
                     if(no.id==pylogic[1][i]){
                   for(let i=0;i<pylogic[0].length;i++){
                       if(no.id==pylogic[0][i][0]){
                         pylogic[0].splice(i,1)
                         return true
                         }
                         }
                     }
                 }                                  
   } 
    
       else{
       
       for(let i=0;i<pylogic[0].length;i++){
                     if(no.id==pylogic[0][i][0]){
                         pylogic[0].splice(i,1)
                         return true
                     }
                 }
                 
           
       }  
   
}
function logicsel(no,arr){
    
    if(no=="3tf"){
       if(firstcp=="p1"){
        logicf1("player1house")
    }
     else if(firstcp=="p2"){
        logicf1("player2house")
    }
    else if(firstcp=="p0"){
        logicf1("yourhouse")
    }
    } 
   
   else if(no=="2tf"){
       if(firstcp=="p1"){
        logicf1("player1house")
    }
     else if(firstcp=="p3"){
        logicf1("player3house")
    }
    else if(firstcp=="p0"){
        logicf1("yourhouse")
    }
    }
   
  else if(no=="1tf"){
       if(firstcp=="p3"){
        logicf1("player3house")
    }
     else if(firstcp=="p2"){
        logicf1("player2house")
    }
    else if(firstcp=="p0"){
        logicf1("yourhouse")
    }
    } 
    
    
        for(let i=0;i<arr[0].length;i++){
            if(arr[0][i][1]==logiccol){             
                arr[1].push(arr[0][i][0])
            }
        }
        
        if(arr[1].length!=0){
       card=arr[1] [Math.floor(Math.random()*arr[1].length)]; cardtrans=document.getElementById(card)
 cardtrans.remove();
 if(no=="3tf"){
  document.getElementById("player3house").appendChild(cardtrans) 
 } 
 
 else if(no=="2tf"){
  document.getElementById("player2house").appendChild(cardtrans) 
 } 
 
 else if(no=="1tf"){
  document.getElementById("player1house").appendChild(cardtrans) 
 } 
 
          cardtrance=null;
      for(let i=0;i<arr[0].length;i++){
               if(card==arr[0][i][0]){                               
                   arr[0].splice(i,1);
                   console.log(arr[0].length,"1")                   
                   break
               }
           }
                      
        }
        
        else if(arr[1].length==0){
           arr[2]=new Array();
           for(let i=0;i<arr[0].length;i++){
            if(arr[0][i][1]==AIWarray["mcol"]){
                arr[2].push(arr[0][i][0])
            }
        }
        if(arr[2].length!=0){
card=arr[2][Math.floor(Math.random()*arr[2].length)]
 
 cardtrans=document.getElementById(card)
 for(let i=0;i<arr[0].length;i++){
               if(card==arr[0][i][0]){            
                   arr[0].splice(i,1);
                   console.log(arr[0].length,"2")                                  
                   break
               }
           }           
 cardtrans.remove();
 if(no=="3tf"){
 document.getElementById("player3house").appendChild(cardtrans) 
} 
else if(no=="2tf"){
  document.getElementById("player2house").appendChild(cardtrans) 
 } 
 
 else if(no=="1tf"){
  document.getElementById("player1house").appendChild(cardtrans) 
 } 

          cardtrance=null;
           
           }
          else if(arr[2].length==0){
           card=arr[0][Math.floor(Math.random()*arr[0].length)][0]; cardtrans=document.getElementById(card);
          for(let i=0;i<arr[0].length;i++){
               if(card==arr[0][i][0]){               
                   arr[0].splice(i,1);
                   
                   console.log(arr[0].length,"3")
                   break
               }
              } 
        cardtrans.remove();
        if(no=="3tf"){
 document.getElementById("player3house").appendChild(cardtrans) 
} 

  else if(no=="2tf"){
  document.getElementById("player2house").appendChild(cardtrans) 
 } 
 
 else if(no=="1tf"){
  document.getElementById("player1house").appendChild(cardtrans) 
 }       
        cardtrans=null; 
           }
               
        }              
    
   p3logic[1]=[];
   p3logic[2]=[];
   p2logic[1]=[];
   p2logic[2]=[];
   p1logic[1]=[];
   p1logic[2]=[];
   pylogic[1]=[];
   pylogic[2]=[];
}

/* players action function */



function player3tf(){
if(document.getElementById("p3house").lastElementChild!=null){

    setTimeout(function(){
       
     if(firstcp=="p3"){ 
     cardtrans=document.getElementById("p3house").lastElementChild;
        for(let i=0;i<p3logic[0].length;i++){
            if(cardtrans.id==p3logic[0][i][0]){
                p3logic[0].splice(i,1)
console.log(p3logic[0].length,"4");                
                break
            }
        }
        cardtrans.remove();
        player3house.appendChild(cardtrans);
        cardtrans=null; 
} 
  else{
      logicsel("3tf",p3logic)
  }
        checkwinner("3tf");       
    },1000)
  } 
}
function player1tf(){
if(document.getElementById("p1house").lastElementChild!=null){
setTimeout(function(){
if(firstcp=="p1"){ 
     cardtrans=document.getElementById("p1house").lastElementChild;
        for(let i=0;i<p1logic[0].length;i++){
            if(cardtrans.id==p1logic[0][i][0]){
                p1logic[0].splice(i,1)          
console.log(p1logic[0].length,"4");                
                break
            }
        }
        cardtrans.remove();
        player1house.appendChild(cardtrans);
        cardtrans=null; 
} 
  else{
      logicsel("1tf",p1logic)
  }    
  checkwinner("1tf"); 
    },1000)    
  }  
}
function player2tf(){
if(document.getElementById("p2house").lastElementChild!=null){
    setTimeout(function(){
if(firstcp=="p2"){ 
     cardtrans=document.getElementById("p2house").lastElementChild;
        for(let i=0;i<p2logic[0].length;i++){
            if(cardtrans.id==p2logic[0][i][0]){
                p2logic[0].splice(i,1)                
console.log(p2logic[0].length,"4");                
                break
            }
        }
        cardtrans.remove();
        player2house.appendChild(cardtrans);
        cardtrans=null; 
} 
  else{
      logicsel("2tf",p2logic)
  }  
        checkwinner("2tf");              
    },1000)     
  } 
}
/* checking winner */
var AIWarray={
    harray:["yourhouse","player3house","player1house","player2house"],
    havar:0,
    mainarray:[["yourhouse",
pid=>null,type=>null,value=>null,fcp=>null],["player3house", pid=>null,type=>null,value=>null,fcp=>null],["player1house", pid=>null,type=>null,value=>null,fcp=>null],["player2house", pid=>null,type=>null,value=>null,fcp=>null]], 
    mcol:"horton",
    ccol:null,
    mcolarray:[],
    ccolarray:[],
    bigpos:{value:0,id:null} 
} 
function ACfun(){
for(AIWarray["havar"]=0;AIWarray["havar"]<4;AIWarray["havar"]++){
            for(let i=0;i<52;i++){
                if(document.getElementById(AIWarray["harray"][AIWarray["havar"]]).firstElementChild.id==cardpro[i]["gid"]){
                    AIWarray["mainarray"][AIWarray["havar"]]["pid"]=cardpro[i]["gid"];
                    AIWarray["mainarray"][AIWarray["havar"]]["type"]=cardpro[i]["type"];
                    AIWarray["mainarray"][AIWarray["havar"]]["value"]=cardpro[i]["value"];
                    break
                    
                }
            }   
    }
    if(firstcp=="p0"){
        AIWarray["mainarray"][0]["fcp"]=1;
        AIWarray["ccol"]=AIWarray["mainarray"][0]["type"];
        AIWarray["mainarray"][1]["fcp"]=2;
        AIWarray["mainarray"][2]["fcp"]=3;
        AIWarray["mainarray"][3]["fcp"]=4;
    }
    else if(firstcp=="p1"){
        AIWarray["mainarray"][0]["fcp"]=3;
        AIWarray["mainarray"][1]["fcp"]=4;
        AIWarray["mainarray"][2]["fcp"]=1;
        AIWarray["ccol"]=AIWarray["mainarray"][2]["type"];
        AIWarray["mainarray"][3]["fcp"]=2;
    }
    else if(firstcp=="p2"){
        AIWarray["mainarray"][0]["fcp"]=2;
        AIWarray["mainarray"][1]["fcp"]=3;
        AIWarray["mainarray"][2]["fcp"]=4;
        AIWarray["mainarray"][3]["fcp"]=1;
        AIWarray["ccol"]=AIWarray["mainarray"][3]["type"];
    }
    else if(firstcp=="p3"){
        AIWarray["mainarray"][0]["fcp"]=4;
        AIWarray["mainarray"][1]["fcp"]=1;
        AIWarray["ccol"]=AIWarray["mainarray"][1]["type"];
        AIWarray["mainarray"][2]["fcp"]=2;
        AIWarray["mainarray"][3]["fcp"]=3;
    }
    console.log(AIWarray["ccol"])
    for(let i=0;i<4;i++){
        if(AIWarray["mainarray"][i]["type"]==AIWarray["mcol"]){
            AIWarray["mcolarray"].push([AIWarray["mainarray"][i]["value"],AIWarray["mainarray"][i][0]])
        }
    }
    
    
    if(AIWarray["mcolarray"].length>0){
        for(let i=0;i<AIWarray["mcolarray"].length;i++){
        if(AIWarray["bigpos"]["value"]<AIWarray["mcolarray"][i][0]){
            AIWarray["bigpos"]["value"]=AIWarray["mcolarray"][i][0];
            AIWarray["bigpos"]["id"]=AIWarray["mcolarray"][i][1];
        }
    }
        console.log(AIWarray["bigpos"]["id"])
    if(AIWarray["bigpos"]["id"]=="yourhouse"){
        randomwinner=0;
    }
    else if(AIWarray["bigpos"]["id"]=="player1house"){
        randomwinner=1;
    }
    else if(AIWarray["bigpos"]["id"]=="player2house"){
        randomwinner=2;
    }
    else if(AIWarray["bigpos"]["id"]=="player3house"){
        randomwinner=3;
    }
        
        AIWarray["bigpos"]["value"]=0;
        AIWarray["mcolarray"]=[]
    }
    
    else if(AIWarray["mcolarray"].length==0){
        for(let i=0;i<4;i++){
            if(AIWarray["mainarray"][i]["type"]==AIWarray["ccol"]){
                AIWarray["ccolarray"].push([AIWarray["mainarray"][i]["value"],AIWarray["mainarray"][i][0]])
            }
        }
        for(let i=0;i<AIWarray["ccolarray"].length;i++){
        if(AIWarray["bigpos"]["value"]<AIWarray["ccolarray"][i][0]){
            AIWarray["bigpos"]["value"]=AIWarray["ccolarray"][i][0];
            AIWarray["bigpos"]["id"]=AIWarray["ccolarray"][i][1];
        }
    }
    console.log(AIWarray["bigpos"]["id"])
    if(AIWarray["bigpos"]["id"]=="yourhouse"){
        randomwinner=0;
    }
    else if(AIWarray["bigpos"]["id"]=="player1house"){
        randomwinner=1;
    }
    else if(AIWarray["bigpos"]["id"]=="player2house"){
        randomwinner=2;
    }
    else if(AIWarray["bigpos"]["id"]=="player3house"){
        randomwinner=3;
    }



    AIWarray["ccolarray"]=[];
    AIWarray["bigpos"]["value"]=0;
        
    }
    
    
}
function checkwinner(fun_name){
if((document.getElementById("yourhouse").innerHTML!="") &&(document.getElementById("player1house").innerHTML!="")&&(document.getElementById("player2house").innerHTML!="") &&(document.getElementById("player3house").innerHTML!="")){
    ACfun()
    round+=1;
    if(randomwinner==1){
      housetrans="p1win";     
      player2t=false;
      player1t=true;
      yout=false;
      player3t=false;
      firstcp="p1";
      pagelist["p1bid"][1]+=1;
      document.getElementById("now11").innerHTML=pagelist["p1bid"][1];
             
   } 
   else if(randomwinner==0){
      housetrans="yourwin";
      player2t=false;
      player1t=false;           
      yout=true;
      player3t=false;
      firstcp="p0"
      pagelist["ybid"][1]+=1;
      document.getElementById("nowy").innerHTML=pagelist["ybid"][1];
      
      document.getElementById("massbox").style.display="block"
   }
   else if(randomwinner==2){
     housetrans="p2win";    
     player2t=true;
     player1t=false;
     yout=false;
     player3t=false;
     firstcp="p2";
     pagelist["p2bid"][1]+=1;
      document.getElementById("now22").innerHTML=pagelist["p2bid"][1];
 }
  else if(randomwinner==3){
     housetrans="p3win";     
     player2t=false;
     player1t=false;
     yout=false;
     player3t=true;
     firstcp="p3";
     pagelist["p3bid"][1]+=1;
      document.getElementById("now33").innerHTML=pagelist["p3bid"][1];
  }          
    } 
    
 else{    
     if(fun_name=="3tf"){
       player2t=false;
       player1t=true;
       yout=false;
       player3t=false;         
    }   
   else if(fun_name=="1tf"){
       player2t=true;
       player1t=false;
       yout=false;
       player3t=false;         
    }   
     else if(fun_name=="2tf"){
       player2t=false;
       player1t=false;
       yout=true;
       player3t=false;
       document.getElementById("massbox").style.display="block";
    }
    else if(fun_name=="0tf"){        
        player1t=false;
        yout=false;
        player2t=false;
        player3t=true;        
    }     
 } 
 
    if(player1t){
           player1tf();
       }
       else if(player2t){
           player2tf();
       }
       else if(player3t){
           player3tf();
       } if((document.getElementById("yourhouse").innerHTML!="") &&(document.getElementById("player1house").innerHTML!="")&&(document.getElementById("player2house").innerHTML!="") &&(document.getElementById("player3house").innerHTML!="")){
        setTimeout(function(){
        cardtrans=document.getElementById("yourhouse").firstElementChild;
            cardtrans.remove();           document.getElementById(housetrans).appendChild(cardtrans);
            cardtrans=null;          cardtrans=document.getElementById("player3house").firstElementChild
            cardtrans.remove();
            document.getElementById(housetrans). appendChild(cardtrans);
            cardtrans=null;   cardtrans=document.getElementById("player1house").firstElementChild
            cardtrans.remove();
            document.getElementById(housetrans). appendChild(cardtrans);
            cardtrans=null;         cardtrans=document.getElementById("player2house").firstElementChild         
            cardtrans.remove();
            document.getElementById(housetrans). appendChild(cardtrans);
            cardtrans=null;                    
       },400)       
    }
if(round==13){
    if(pagelist["ybid"][1]>pagelist["ybid"][0] ||pagelist["ybid"][1]==pagelist["ybid"][0]){
        pagelist["allpoint"]["bidy"]+=pagelist["ybid"][0];
        
    }
   else if(pagelist["ybid"][1]<pagelist["ybid"][0]){
        pagelist["allpoint"]["bidy"]-=pagelist["ybid"][0];
    }
   
    if(pagelist["p1bid"][1]>pagelist["p1bid"][0] ||pagelist["p1bid"][1]==pagelist["p1bid"][0]){
         pagelist["allpoint"]["bidp1"]+=pagelist["p1bid"][0];
    }
   else if(pagelist["p1bid"][1]<pagelist["p1bid"][0]){
         pagelist["allpoint"]["bidp1"]-=pagelist["p1bid"][0]; 
    }
    if(pagelist["p2bid"][1]>pagelist["p2bid"][0] ||pagelist["p2bid"][1]==pagelist["p2bid"][0]){
        pagelist["allpoint"]["bidp2"]+=pagelist["p2bid"][0];
    }
   else if(pagelist["p2bid"][1]<pagelist["p2bid"][0]){
        pagelist["allpoint"]["bidp2"]-=pagelist["p2bid"][0];
    }
    if(pagelist["p3bid"][1]>pagelist["p3bid"][0] ||pagelist["p3bid"][1]==pagelist["p3bid"][0]){
        pagelist["allpoint"]["bidp3"]+=pagelist["p3bid"][0];
    }
   else if(pagelist["p3bid"][1]<pagelist["p3bid"][0]){
        pagelist["allpoint"]["bidp3"]-=pagelist["p3bid"][0];
    }
  pagelist["ybid"][1]=0;
  pagelist["ybid"][0]=1;
   pagelist["p1bid"][1]=0;
   pagelist["p1bid"][0]=1;       
  pagelist["p2bid"][1]=0;
   pagelist["p2bid"][0]=1;
  pagelist["p3bid"][1]=0;
  pagelist["p3bid"][0]=1;
   document.getElementById("fixedy").innerHTML=pagelist["ybid"][0];
document.getElementById("nowy").innerHTML=pagelist["ybid"][1];
document.getElementById("fixed11").innerHTML=pagelist["p1bid"][0];
document.getElementById("now11").innerHTML=pagelist["p1bid"][1];
document.getElementById("fixed22").innerHTML=pagelist["p2bid"][0];
document.getElementById("now22").innerHTML=pagelist["p2bid"][1];
document.getElementById("fixed33").innerHTML=pagelist["p3bid"][0];
document.getElementById("now33").innerHTML=pagelist["p3bid"][1];
document.getElementById("ap1").innerHTML=pagelist["allpoint"]["bidp1"];
document.getElementById("ap2").innerHTML=pagelist["allpoint"]["bidp2"];
document.getElementById("ap3").innerHTML=pagelist["allpoint"]["bidp3"];
document.getElementById("apy").innerHTML=pagelist["allpoint"]["bidy"];
round=0;
document.getElementById("butrematch").style.display="block";
document.getElementById("backcover").style.display="block";
document.getElementById("massbox").style.display="none";
}    
    
}
/* ai thinkin logic during game */
var p1logic=[[],[],[]];
var p2logic=[[],[],[]];
var p3logic=[[],[],[]];
var pylogic=[[],[],[]]
/* 52 cards javascript variables with all nessery properties*/

var cardpro=[
cr1={type:"ruiton",value:13,gid:"idcr1",owner:"your"},
cr2={type:"ruiton",value:1,gid:"idcr2",owner:"your"},
cr3={type:"ruiton",value:2,gid:"idcr3",owner:"your"},
cr4={type:"ruiton",value:3,gid:"idcr4",owner:"your"},
cr5={type:"ruiton",value:4,gid:"idcr5",owner:"your"},
cr6={type:"ruiton",value:5,gid:"idcr6",owner:"your"},
cr7={type:"ruiton",value:6,gid:"idcr7",owner:"your"},
cr8={type:"ruiton",value:7,gid:"idcr8",owner:"your"},
cr9={type:"ruiton",value:8,gid:"idcr9",owner:"your"},
cr10={type:"ruiton",value:9,gid:"idcr10",owner:"your"},
cr11={type:"ruiton",value:10,gid:"idcr11",owner:"your"},
cr12={type:"ruiton",value:11,gid:"idcr12",owner:"your"},
cr13={type:"ruiton",value:12,gid:"idcr13",owner:"your"},
cc1={type:"chira",value:13,gid:"idcc1",owner:"player1er"},
cc2={type:"chira",value:1,gid:"idcc2",owner:"player1er"},
cc3={type:"chira",value:2,gid:"idcc3",owner:"player1er"},
cc4={type:"chira",value:3,gid:"idcc4",owner:"player1er" },
cc5={type:"chira",value:4,gid:"idcc5", owner:"player1er"}, cc6={type:"chira",value:5,gid:"idcc6", owner:"player1er"},
cc7={type:"chira",value:6,gid:"idcc7",owner:"player1er" },
cc8={type:"chira",value:7,gid:"idcc8",owner:"player1er" },
cc9={type:"chira",value:8,gid:"idcc9", owner:"player1er"},
cc10={type:"chira",value:9,gid:"idcc10",owner:"player1er" },
cc11={type:"chira",value:10,gid:"idcc11", owner:"player1er"},
cc12={type:"chira",value:11,gid:"idcc12",owner:"player1er" },
cc13={type:"chira",value:12,gid:"idcc13", owner:"player1er"},
ch1={type:"horton",value:13,gid:"idch1",owner:"player2er"},
ch2={type:"horton",value:1,gid:"idch2", owner:"player2er"},
ch3={type:"horton",value:2,gid:"idch3", owner:"player2er"},
ch4={type:"horton",value:3,gid:"idch4", owner:"player2er"},
ch5={type:"horton",value:4,gid:"idch5", owner:"player2er"}, 
ch6={type:"horton",value:5,gid:"idch6", owner:"player2er"},
ch7={type:"horton",value:6,gid:"idch7", owner:"player2er"},
ch8={type:"horton",value:7,gid:"idch8", owner:"player2er"},
ch9={type:"horton",value:8,gid:"idch9", owner:"player2er"},
ch10={type:"horton",value:9,gid:"idch10", owner:"player2er"},
ch11={type:"horton",value:10,gid:"idch11", owner:"player2er"},
ch12={type:"horton",value:11,gid:"idch12", owner:"player2er"},
ch13={type:"horton",value:12,gid:"idch13",owner:"player2er" }, 
ci1={type:"iskapan",value:13,gid:"idci1",owner:"player3er" },
ci2={type:"iskapan",value:1,gid:"idci2",owner:"player3er" },
ci3={type:"iskapan",value:2,gid:"idci3", owner:"player3er"},
ci4={type:"iskapan",value:3,gid:"idci4", owner:"player3er"},
ci5={type:"iskapan",value:4,gid:"idci5",owner:"player3er" }, 
ci6={type:"iskapan",value:5,gid:"idci6",owner:"player3er" },
ci7={type:"iskapan",value:6,gid:"idci7", owner:"player3er"},
ci8={type:"iskapan",value:7,gid:"idci8", owner:"player3er"},
ci9={type:"iskapan",value:8,gid:"idci9",owner:"player3er" },
ci10={type:"iskapan",value:9,gid:"idci10",owner:"player3er"},
ci11={type:"iskapan",value:10,gid:"idci11", owner:"player3er"},
ci12={type:"iskapan",value:11,gid:"idci12", owner:"player3er"},
ci13={type:"iskapan",value:12,gid:"idci13",owner:"player3er" }
];
/* taking all the place src  where we put the 52 cards or devide into 4 players*/
var cardpl=[document.getElementById("cp1"),document.getElementById("cp2"),document.getElementById("cp3"),document.getElementById("cp4"),document.getElementById("cp5"),document.getElementById("cp6"),document.getElementById("cp7"),document.getElementById("cp8"),document.getElementById("cp9"),document.getElementById("cp10"),document.getElementById("cp11"),document.getElementById("cp12"),document.getElementById("cp13")];
var p1erhouse=document.getElementById("p1house");
var p2erhouse=document.getElementById("p2house");
var p3erhouse=document.getElementById("p3house");
/* owners changeing for create a random distribution to 4 player*/
function ranowner(){
var ownerlist=[];
var owner1=0;
var owner2=0;
var owner3=0;
var owner4=0;
var passnum=false;
var randomnum;
var idis=0;
var mdis=0;
function gra(){
    passnum=true;
while(passnum==true){
   
    randomnum=Math.floor(Math.random()*(5-1))+1;
    
    if(randomnum==1&&owner1<13){
        ownerlist.push(randomnum);
        owner1+=1;
        
    }
    
    else if(randomnum==2&&owner2<13){
        ownerlist.push(randomnum);
        owner2+=1;
        
    }
    else if(randomnum==3&&owner3<13){
        ownerlist.push(randomnum);
        owner3+=1;
        
    }

   else if(randomnum==4&&owner4<13){
        ownerlist.push(randomnum);
        owner4+=1;
        
    }
  
   if(owner1==13&&owner2==13&&owner3==13&&owner4==13){
       passnum=false;
   }
}
}
function display(){
    gra();
    for(idis=0;idis<52;idis++){
        
        if(ownerlist[idis]==1){
            cardpro[idis].owner="player1er";
        }
        
        else if(ownerlist[idis]==2){
            cardpro[idis].owner="player2er";
        }
        
        else if(ownerlist[idis]==3){
            cardpro[idis].owner="player3er";
        }
        
         else if(ownerlist[idis]==4){
            cardpro[idis].owner="your";
        }
    }
    
    ownerlist=[];
    owner1=0;
    owner2=0;
    owner3=0;
    owner4=0;
    passnum=false;
    randomnum;
    idis=0;   
}

display()
}
ranowner()
/* makeing this game again like fisrt time by this function*/
var rcc;
function rematchwork(){
    document.getElementById("backcover").style.display="none";
 document.getElementById("butrematch").style.display="none";
document.getElementById("gameonid").style.display="block";
document.getElementById("bedid").innerHTML=1;
    rcc=Math.floor(Math.random()*4)
    if(rcc==0){
    AIWarray["mcol"]="ruiton";
    }
    else if(rcc==1){
    AIWarray["mcol"]="iskapan";
    }
    else if(rcc==2){
    AIWarray["mcol"]="chira";
    }
    else if(rcc==3){
    AIWarray["mcol"]="horton";
    }
    rang()
    player1t=false;
    yout=false;
    player2t=false;
    player3t=false;   
    for(let i=0;i<52;i++){
      if(document.getElementById(cardpro[i].gid)!=null){ document.getElementById(cardpro[i].gid).remove();}  
}
ranowner();
p1logic=[[],[],[]];
p2logic=[[],[],[]];
p3logic=[[],[],[]];
pylogic=[[],[],[]];
celement();
}
/* main game logic and rules function declearation */
 function cardclick(cardname){
    if(yout==true){
    if(firstcp=="p0"){
    cardname.remove();
    cardname.setAttribute("onclick","nowork()") ; document.getElementById("yourhouse").appendChild(cardname);    
     
    for(let i=0;i<pylogic[0].length;i++){
        if(cardname.id==pylogic[0][i][0]){
            pylogic[0].splice(i,1)
            console.log(pylogic[0])
        }
    }
    
    
    cardname=null; document.getElementById("massbox").style.display="none";
     checkwinner("0tf");
   } 
   else{
       if(logicf22(cardname)){
           cardname.remove();
    cardname.setAttribute("onclick","nowork()") ; document.getElementById("yourhouse").appendChild(cardname);    
     cardname=null;
     document.getElementById("massbox").style.display="none";
     checkwinner("0tf");
       }
   }
           
    } 
 }
 
/* none function declearation which does not work anything.it is needed*/
function nowork(){    
}
 /* creating cards by dom in html*/
var cardpli=0;
var eimg;
function celement(){
for(let i=0;i<52;i++){
    let element=document.createElement("div");
    let textbig=cardpro[i].value;
    var texts;
    if(textbig==10){
        
        texts=document.createTextNode("J");
    }
    else if(textbig==11){
        
        texts=document.createTextNode("Q");
    }
    else if(textbig==12){
        
        texts=document.createTextNode("K");
    }
     else if(textbig==13){
        
        texts=document.createTextNode("A");
    }
    else{
     texts=document.createTextNode(cardpro[i].value+1);
   } 
    element.appendChild(texts);  
    element.setAttribute("id",cardpro[i].gid);
    element.style.position="absolute";

  
    if(cardpro[i].type=="ruiton"){
    element.style.backgroundColor="#ffa815";
    element.style.backgroundImage="url('rimg.png')";
       element.style.backgroundSize="50px 50px";
       element.style.backgroundRepeat="no-repeat"; 
       element.style.backgroundPosition="center";
    }
    else if(cardpro[i].type=="chira"){
  element.style.backgroundColor="green";       
        element.style.backgroundImage="url('chimg.png')";
       element.style.backgroundSize="50px 50px";
       element.style.backgroundRepeat="no-repeat"; 
       element.style.backgroundPosition="center";
      } 
    
    else if(cardpro[i].type=="horton"){     
       element.style.backgroundColor="blue";  element.style.backgroundImage="url('himg.png')";
       element.style.backgroundSize="50px 50px";
       element.style.backgroundRepeat="no-repeat"; 
       element.style.backgroundPosition="center";
   
    }
           
    else if(cardpro[i].type=="iskapan"){
       element.style.backgroundColor="brown";
       element.style.backgroundImage="url('ipimg.png')";
       element.style.backgroundSize="50px 50px";
       element.style.backgroundRepeat="no-repeat"; 
       element.style.backgroundPosition="center";
    }  
    element.style.fontSize="45px";
    element.style.color="white";    
    if(cardpro[i].owner=="your"){
      element.style.width="100px";
    element.style.height="150px"; element.setAttribute("onclick","cardclick(this)");
    cardpl[cardpli].appendChild(element);
    cardpli++;
    if(cardpli==13){
        cardpli=0;
    }
    pylogic[0].push([cardpro[i].gid,cardpro[i].type]); 
    }    
    else if(cardpro[i].owner=="player1er"){
       element.style.width="100px";
    element.style.height="150px";
    element.setAttribute("onclick","nowork()");
    p1erhouse.appendChild(element);
    p1logic[0].push([cardpro[i].gid,cardpro[i].type]);  
    }
    else if(cardpro[i].owner=="player2er"){
       element.style.width="150px";
    element.style.height="100px";
    element.setAttribute("onclick","nowork()");
    p2erhouse.appendChild(element);
    
    p2logic[0].push([cardpro[i].gid,cardpro[i].type]);  
    }  
     else if(cardpro[i].owner=="player3er"){
       element.style.width="150px";
    element.style.height="100px";
    element.setAttribute("onclick","nowork()");
    p3erhouse.appendChild(element);
    
    p3logic[0].push([cardpro[i].gid,cardpro[i].type]);  
    }  
  } 
}
celement();

function rang(){
    if(AIWarray["mcol"]=="ruiton"){
        document.getElementById("ccolid").style.backgroundImage="url('rimg.png')";
       document.getElementById("ccolid").style.backgroundSize="50px 50px";
       document.getElementById("ccolid").style.backgroundRepeat="no-repeat"; 
      document.getElementById("ccolid").style.backgroundPosition="center";
    }
    else if(AIWarray["mcol"]=="iskapan"){
        document.getElementById("ccolid").style.backgroundImage="url('ipimg.png')";
       document.getElementById("ccolid").style.backgroundSize="50px 50px";
       document.getElementById("ccolid").style.backgroundRepeat="no-repeat"; 
      document.getElementById("ccolid").style.backgroundPosition="center";
    }
    else if(AIWarray["mcol"]=="horton"){
        document.getElementById("ccolid").style.backgroundImage="url('himg.png')";
       document.getElementById("ccolid").style.backgroundSize="50px 50px";
       document.getElementById("ccolid").style.backgroundRepeat="no-repeat"; 
      document.getElementById("ccolid").style.backgroundPosition="center";
    }
    else if(AIWarray["mcol"]=="chira"){
        document.getElementById("ccolid").style.backgroundImage="url('chimg.png')";
       document.getElementById("ccolid").style.backgroundSize="50px 50px";
       document.getElementById("ccolid").style.backgroundRepeat="no-repeat"; 
      document.getElementById("ccolid").style.backgroundPosition="center";
    }
}
rang()   
/* page controll  */

var pagelist={
    p1bid:[1,0],
    p2bid:[1,0],
    p3bid:[1,0],
    ybid:[1,0],
    allpoint:{bidp1:0,bidp2:0,bidp3:0,bidy:0},
    maincol:{},    
}

function bidf(but){
    if(but==document.getElementById("addid")){
         
        if(pagelist["ybid"][0]<13){
            pagelist["ybid"][0]+=1;
            document.getElementById("bedid").innerHTML=pagelist["ybid"][0];
            document.getElementById("fixedy").innerHTML=pagelist["ybid"][0];
        }
    }
    else if(but==document.getElementById("subid")){
         if(pagelist["ybid"][0]>1){
            pagelist["ybid"][0]-=1;
            document.getElementById("bedid").innerHTML=pagelist["ybid"][0];
            document.getElementById("fixedy").innerHTML=pagelist["ybid"][0];
        }
    }
 else if(but==document.getElementById("btom")){
        document.getElementById("backcover").style.display="none";
document.getElementById("setbid").style.display="none";
    } 
}


function tablef1(but){
if(but==document.getElementById("closeid")){
document.getElementById("ptable").style.display="none";

document.getElementById("backcover").style.display="none";

} 

else if(but==document.getElementById("ptbut")){
document.getElementById("ptable").style.display="block";
document.getElementById("backcover").style.display="block";
}

else if(but==document.getElementById("cdec")){
    document.getElementById("cdec").style.display="none";
}
else if(but==document.getElementById("okid")){
    document.getElementById("setbid").style.display="none";
document.getElementById("backcover").style.display="none";
pagelist["p1bid"][0]=Math.floor(Math.random()*7)+1;
document.getElementById("fixed11").innerHTML=pagelist["p1bid"][0]
pagelist["p2bid"][0]=Math.floor(Math.random()*7)+1;
document.getElementById("fixed22").innerHTML=pagelist["p2bid"][0]
pagelist["p3bid"][0]=Math.floor(Math.random()*7)+1;
document.getElementById("fixed33").innerHTML=pagelist["p3bid"][0]
document.getElementById("gameonid").style.display="none";
document.getElementById("massbox").style.display="none";
    rcc=Math.floor(Math.random()*4);
    if(rcc==0){
    firstcp="p1";
    player1t=true;
    yout=false;
    player2t=false;
    player3t=false;
    player1tf();
    }
    else if(rcc==1){
    firstcp="p3";
    player1t=true;
    yout=false;
    player2t=false;
    player3t=true;
    player3tf();
    }
    
    else if(rcc==2){
    firstcp="p2";
    player1t=false;
    yout=false;
    player2t=true;
    player3t=false;
    player2tf();
    }
    
    if(rcc==3){
    firstcp="p0";
    player1t=false;
    yout=true;
    player2t=false;
    player3t=false;
    document.getElementById("massbox").style.display="block"
    }
    
}

}

function setf1(){
    document.getElementById("backcover").style.display="block";
document.getElementById("setbid").style.display="block";

    
}
