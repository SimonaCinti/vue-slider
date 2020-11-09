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
        ]
     },
     methods: {
        nextPhoto() {
            this.indexPhoto ++
        }
     }

 })