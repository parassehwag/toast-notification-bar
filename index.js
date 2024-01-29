document.querySelectorAll('button').forEach((button)=>{
    button.addEventListener('click',(event)=>{
        var text;
        var imgUrl;
        const newDiv = document.createElement('div');
        newDiv.classList.add('notification');
        if(event.target.classList.contains('success')){
            text = 'Successfully Submitted';
            imgUrl='images/success.png';
         }
        else if (event.target.classList.contains('failure')){
            text = 'Please fix the error!';
            imgUrl='images/error.png';
        }
        else if(event.target.classList.contains('invalid')){
            text = 'Invalid input, check again';
            imgUrl='images/invalid.png';
        }
        const newImage = document.createElement('img');
        newImage.setAttribute('src',imgUrl);
        const newText = document.createTextNode(text);
        newDiv.appendChild(newImage);
        newDiv.appendChild(newText);
        document.querySelector('#notification-container').appendChild(newDiv);
        setTimeout(()=>{
            newDiv.remove();
        },6000);
    })
})