// console.log('hello', Vue);

/**
 * Vue Slider
 */

 const  app = new Vue ({
    el: '#app',
    data: {
        indexPhoto: 0,
        photos: [
            './img/image1.jpg',
            './img/image2.jpg',
            './img/image3.jpg',
            './img/image4.jpg'
        ],
        loopId: 0
    },

    created(){
        this.startLoop();
    },

    methods: {
        nextPhoto() {
            this.indexPhoto ++
            if (this.indexPhoto > this.photos.length - 1){
                this.indexPhoto = 0
            }
        },
        prevPhoto() {
            this.indexPhoto --
            if (this.indexPhoto < 0){
                this.indexPhoto = this.photos.length - 1
            }
        },
        //Funzione sul circle 

        clickPhoto(index) { //nda il valore di questo index si trova all'interno dell'html ed è stato inizializzato nel v-for=(photo, index)
            this.indexPhoto = index;
        },
        //Loop photo in automatico
        startLoop(){
            this.loopId = setInterval(() =>{
                this.nextPhoto();
            }, 3000);
        }
    }

});