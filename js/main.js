// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(data => data.json())
//     .then(response => {
//         console.log(response)
//         if (response.status !== "success") return;
        
//         const imgSrc = response.message;

//         document.querySelector('.js-image-output').innerHTML = `
//             <img src='${imgSrc}' alt='image'>
//         `;
//     });


const originalTitle = document.querySelector('.js-original-title');
const updateMem = document.querySelector('.js-mem-btn');

updateMem.addEventListener( 'click', () => {
    originalTitle.classList.add('hidden');

    fetch('https://yesno.wtf/api')
    .then(data => data.json())
    .then(response => {
        const imageSrc = response.image;
        const answer = response.answer;

        console.log(response);

        document.querySelector('.js-answer-output').innerHTML = `
            <h2 class="answer-output__title">${answer}</h2>
        `

        document.querySelector('.js-image-output').innerHTML = `
            <img 
            src='${imageSrc}'
            width='400px'
            alt='image'>
        `
    })
});