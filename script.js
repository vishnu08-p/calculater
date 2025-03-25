const ans = () =>{
 let ans = document.getElementById('ans');
 ans.value = eval(ans.value);
}

const cls = () =>{
 let ans = document.getElementById('ans');
    ans.value = ""
    
}

const lcls = () =>{
 let ans = document.getElementById('ans');
 let val = ''
 for (let i = 0 ; i < (ans.value.length-1) ; i++){
    val += ans.value[i]
 }

 ans.value = val

}
const num = (ele) =>{
 let ans = document.getElementById('ans');
 ans.value+=ele;
    
}