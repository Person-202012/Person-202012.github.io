let main = {

    start: function() {
        //let startButton = document.getElementById('startButton');
        //startButton.remove();
        console.log('getting ready to change top!');
        let imageRn1 = document.querySelector('#testimg1')
        console.log(imageRn1);
        
        imageRn1.style.transform = 'scale(30)';
        //imageRn1.style.transform = 'object-position(100%, 0)'
        //imageRn1.style.transform = "top(1000000px)";

        setTimeout(this.changeImg12, 5000);
        


    },

    changeImg12: function() {

        let words = document.getElementById('words')
        words.innerHTML = '<h1> I am Biggggg</h1>'
        let container = document.getElementById('container');

        container.innerHTML = '<img src="img/marsplanet2.jpg" alt="marssomecrater" id="testimg1">';
        let imageRn2 = document.querySelector("#testimg1");
        imageRn2.style.transform = 'scale(1)';
        console.log(imageRn2);
        console.log('waiting 2000 milis then calling zoomImg2!');
        setTimeout(main.zoomImg2, 20)
    },

    zoomImg2: function() {
                let words = document.getElementById('words')
        words.innerHTML = '<h1>REALLY Bigggggggg</h1>'
        let imageRn2 = document.querySelector("#testimg1");
        console.log('zoomImg2() has been called !!!!');
        imageRn2.style.transform = 'scale(20)';
        setTimeout(main.changeImg23, 5000);
    },

    changeImg23: function() {

        let container = document.getElementById('container')

        container.innerHTML = '<img src="img/marsplanet3.jpg" alt="marssomecrater" id="testimg1">';
        let imageRn3 = document.querySelector("#testimg1");
        console.log(imageRn3);
        imageRn3.style.transform = 'scale(1)';
        setTimeout(main.zoomImg3, 20)
    },

    zoomImg3: function() {
        let words = document.getElementById('words')
        words.innerHTML = '<h1>reallly Really BIGGGGGG MASSIVEEEEEEEEEEEEEEEEEE</h1>'
        let imageRn2 = document.querySelector("#testimg1");
        console.log('zoomImg3() has been called !!!!');
        imageRn2.style.transform = 'scale(30)';
    },

    testFunction: function() {
        console.log('Hello my name is testFunction and I have called.')
        let all = document.querySelector('body')
        all.innerHTML = '<h1>helloooooooooo</h1>'
    }
    
}
//let imageRn1 = document.querySelector('.displayWindow');

//