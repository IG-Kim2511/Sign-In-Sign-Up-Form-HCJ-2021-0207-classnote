/* 🍉 signup-btn, signin-btn 클릭한때, classList.add('change'),  ~~~ 효과 넣기 
js 023
js 025
css 027
css 030*/

/* js 023: 버튼 색 바뀌게하기

JS : 
signUp click하면 , 부모태그에 change 넣고, - 
signIn click하면 , 부모태그에 change 뺌 , 

CSS : 
부모태그에 change 있으면, signUp 에 lightcoral 넣음
부모태그에 change 없으면, signIn 에 lightcoral 넣음 */


/* js 025 : signup-btn, signin-btn 클릭한때, heading-span 내용, "Up - In" 넣어서, sign In, sing Up 만들기

textContent vs innerHTML 👉 👻노트필기    */

const container = document.querySelector('.container');
const headingSpan2 = document.querySelector('.heading-span-2');



document.querySelector('.signup-btn').addEventListener('click',()=>{

    container.classList.add('change');  /* JS 023 */    
    headingSpan2.textContent = "Up";     /* JS 025 */
});

document.querySelector('.signin-btn').addEventListener('click',()=>{

    container.classList.remove('change');    /* JS 023 */
    headingSpan2.textContent = "In";    /* JS 025 */
});


/*
js 034 input check
1. parameter inputArr : array데이터 ...parameter. (input 데이터들)

4. trim : ""무시하게 하는 함수
str.trim() – 문자열 앞과 끝의 공백 문자를 다듬어 줍니다(제거함). */

const username= document.querySelector('#username');
const email= document.querySelector('#email');
const password= document.querySelector('#password');
const password2= document.querySelector('#password2');

/* js 036 error message 만들기
2. parameter 의미 : 함수안에 뚫은 구멍. 
4. parentElement : parentNode와 비슷함
6. className : elem.className="~", class를 "~"로 덮어씌움 
8 함수실행 */

const error =(input,message)=>{

    const inputWrapper = input.parentElement;                  /* js 036-4 */
    inputWrapper.className = "fomr-input-wrapper error";            /* js 036-6 */
    inputWrapper.querySelector('.message').textContent = message;     
};

const checkRequiredFeilds = (inputArr)=>{            //js 034-1
    inputArr.forEach((input)=>{                  
        if(input.value.trim()===""){      //js 034-4
         
            // js 036-8, const error = (input, message)=>{}
            error(input,`${input.id} is required`); 

        }else{
            // success
        }
    });
}


/*  js 039, submit 클릭한때, input자료들 const error변수로 보내기 
2. e.preventDefault : 기본동작 막기   👉 submit하면 기본적으로 refresh하므로, 일단 기본동작 막고, 다음 코딩함
*/
const form = document.querySelector('.form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();             /* js 039-2 */

    checkRequiredFeilds([username, email, password, password2]);
    
});