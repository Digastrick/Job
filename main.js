const radioMass = [{
 color:'blue',
 position:'home1',
 visibility:false,
},
{
    color:'blue',
    position:'home2',
    visibility:false,
},
{
    color:'green',
    position:'stadium',
    visibility:false,
},
{
    color:'green',
    position:'cass',
    visibility:false,
},
{
    color:'blue',
    position:'сolumn',
    visibility:false,
},
{
    color:'blue',
    position:'home3',
    visibility:false,
},
{
    color:'green',
    position:'home4',
    visibility:false,
},
{
    color:'blue',
    position:'home5',
    visibility:false,
},
{
    color:'blue',
    position:'most',
    visibility:false,
},
{
    color:'green',
    position:'home6',
    visibility:false,
},
]
let buttonElem = [];
const radioCreate = () => {
    let radioCreate = radioMass.map(res => {   

    const wrapper = document.createElement('div');
    wrapper.classList.add(res.position);
    const textButton = document.createElement('p');
    textButton.classList.add('wrapper-text');
    textButton.innerHTML = res.position;  
    const radio = document.createElement('div');
    radio.append(textButton);
    radio.addEventListener("click", function(){         
        if(res.visibility == false && buttonElem.length == 0){
        radio.classList.add('open');  
        textButton.classList.add('text-open');
        res.visibility = true;  
        buttonElem.unshift(res); 
        }else if(res.visibility == false && buttonElem.length == 1){ 
           buttonElem[0].visibility = false;
           buttonElem.pop(); 
           buttonElem.unshift(res);
            let close = document.getElementsByClassName('radio open')[0];
            let elements = document.getElementsByClassName('wrapper-text text-open')[0];
            elements.classList.remove('text-open');
            close.classList.remove('open');        
            radio.classList.add('open');  
            textButton.classList.add('text-open') 
            res.visibility = true;
        }
        else if(res.visibility == true && buttonElem.length == 1) {
            let close = document.getElementsByClassName('radio open')[0];
            close.classList.remove('open'); 
            let elements = document.getElementsByClassName('wrapper-text text-open')[0];
            elements.classList.remove('text-open');
            res.visibility = false; 
            buttonElem.pop(); 
        }    
    })
    radio.classList.add('radio');
    radio.classList.add(res.color);
    wrapper.append(radio)
    container.append(wrapper);
   })
}

const container = document.querySelector('.main');


radioCreate()
