let main = {

    start: function() {
        //let startButton = document.getElementById('startButton');
        //startButton.remove();
        console.log('getting ready to change top!');
        let imageRn1 = document.querySelector('#testimg1')
        console.log(imageRn1);
        
        //imageRn1.style.transform = 'scale(33)'
        //imageRn1.style.transform = 'object-position(100%, 0)'
        //imageRn1.style.transform = "top(1000000px)";
        let container = document.getElementById('container')

        container.innerHTML = '<img src="img/marsplanet2.jpg" alt="marssomecrater" id="testimg2">';
        let imageRn2 = document.querySelector("#testimg2");
        console.log(imageRn2);

    }
    
}
//let imageRn1 = document.querySelector('.displayWindow');

//