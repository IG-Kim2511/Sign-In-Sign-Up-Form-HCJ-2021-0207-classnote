


/* js 023: signup-btn, signin-btn 클릭한때, 버튼 색 바뀌게하기

JS : 
signUp click하면 , 부모태그에 change 넣고, - 
signIn click하면 , 부모태그에 change 뺌 , 

CSS : 
부모태그에 change 있으면, signUp 에 lightcoral 넣음
부모태그에 change 없으면, signIn 에 lightcoral 넣음 */


/* js 025 : signup-btn, signin-btn 클릭한때, heading-span 내용, "Up - In" 넣어서, sign In, sing Up 만들기

textContent vs innerHTML 👉 👻노트필기

*/

/*  */


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