let expression='';
let bracketcount=0;

 function Message(button) {
    const num=button.value;
    if (
        expression === "Syntax Error" ||
        expression === "Infinity" ||
        expression === "-Infinity" ||
        expression === "NaN"
    ) {
        expression = '';
        bracketcount=0;
        }  
    if (num!== "undo" && num!=="AC" && num!=="=" && num!=="()"){         
    expression=expression+num;
    }
    
    if(num==="AC")
    {
       expression='';
    }
    else if(num==="undo")
    {
       expression= expression.slice(0, -1);
    }
    else if(num==="()"){
        bracketcount+=1
        if(bracketcount==1){
        expression+='(';
        }
        else{
            expression+=')';
            bracketcount=0;
        
        }
    }
    else if (num==="="){
 
       try {
          expression = eval(expression).toString();
      } catch {
          expression = "Syntax Error";
          bracketcount=0;
      }
      
         
    }
    document.getElementById('display').textContent = expression || "0";
 
 }