new Vue({
    el: '.js-slideshow',
    data: {
      current: 0,
      slides: [
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/152873415.jpg?k=086525a0cee8373bf36c906dd42073689285eb550f19566f0783bc34fb154413&o=&hp=1', title: 'Hotel Image 1' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/465212365.jpg?k=7d9e13f541421d27023dd07e72ab7e504d205769afcbebb76a2d7867afacc6b0&o=&hp=1', title: 'Hotel Image 2' },
        // Add more images as needed
      ],
      speed: 3000,
      timer: null
    },
    methods: {
      startRotation: function () {
        this.timer = setInterval(this.next, this.speed);
      },
      stopRotation: function () {
        clearTimeout(this.timer);
        this.timer = null;
      },
      next: function () {
        var current = this.current;
        var next = current + 1;
  
        if (next > this.slides.length - 1) {
          next = 0;
        }
        this.current = next;
      },
      isActive: function (index) {
        return this.current === index;
      }
    },
    created: function () {
      this.startRotation();
    }
  });  