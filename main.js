/*NOTE : WE CAN USE css property maxHeight or height.
  for this accordion, the important css properties are "maxHeight"/"height"(you choose), "overflow" set to "hidden", and "transition" activated
*/

let btn = document.getElementById("accordion-controller");
let item = document.getElementById('accordion-item');
let content = document.getElementById('accordion-content');

  const heightBtn= btn.getBoundingClientRect().height;
  item.style.height=heightBtn;
  
  const defaultHeightContent=content.scrollHeight;
  
btn.addEventListener("click",(e)=>{
  e.preventDefault();
  let heightContent=content.style.height;
  console.log('heightContent : '+heightContent);
  
 if(!heightContent){
    console.log(01);
    content.style.height=defaultHeightContent+'px';
    }else{
      content.style.height='';
    }
  console.log('clickeding');
  
  console.log("clickeding");
  
})