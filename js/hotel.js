new Vue({
    el: '.js-slideshow',
    data: {
      current: 0,
      slides: [
        { id: 1, url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/152873415.jpg?k=086525a0cee8373bf36c906dd42073689285eb550f19566f0783bc34fb154413&o=&hp=1', title: 'Hotel Image 1' },
        { id: 2, url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/465212365.jpg?k=7d9e13f541421d27023dd07e72ab7e504d205769afcbebb76a2d7867afacc6b0&o=&hp=1', title: 'Hotel Image 2' },
        { id: 3, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/486580961.jpg?k=258df39036cf8f9ef7d5a93eab2d045b7addee42dde95f61a6bcaa0f8074a1fd&o=&hp=1', title: 'Hotel Image 3' },
        { id: 4, url: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/465212365.jpg?k=7d9e13f541421d27023dd07e72ab7e504d205769afcbebb76a2d7867afacc6b0&o=&hp=1', title: 'Hotel Image 4' },
        { id: 5, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/486580891.jpg?k=e318f7c7bdecc933e255adcae557fcb3198110b9c561a8710ee1f97d112396db&o=&hp=1', title: 'Hotel Image 5' },
        { id: 6, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/486580918.jpg?k=669c958c2107cced66e5c2b1e04f416b8bcc3cfeea105dc6254fd32a952c229f&o=&hp=1', title: 'Hotel Image 6' },
        { id: 7, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/486580921.jpg?k=baca209dd375ad6e7b20fb9a5ff09922ab39a2cee9f7b8034ab85589b3ad7dfa&o=&hp=1', title: 'Hotel Image 7' },
        { id: 8, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436799341.jpg?k=7755b92f03450447158c01e2598e22b05338ac959f03a02bbf3b240ec86a6d0d&o=&hp=1', title: 'Hotel Image 8' },
        { id: 9, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/465221632.jpg?k=9a47c9df192f73f5b93bda952da4f79fde0f2c096cbb7f0d70de393f677d3eb8&o=&hp=1', title: 'Hotel Image 9' },
        { id: 10, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436801936.jpg?k=c1faa2653d4f271ed17b2ca5a1416eddebf6858a36b159e24765788af7af1986&o=&hp=1', title: 'Hotel Image 10' },
        { id: 11, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/436802091.jpg?k=c3c0cfab41c3ea85ae0ccf92f4758cfe87b46f7692d819eecc30c32e3aac690e&o=&hp=1', title: 'Hotel Image 11' },
        { id: 12, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/522247102.jpg?k=4d7a1ffe3e7a04fad9e2e3e8d8970f13496aa5e25c31c6982ec3e1e88ebe2635&o=&hp=1', title: 'Hotel Image 12' },
        { id: 13, url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/522247090.jpg?k=c20654e988b317d8b15db6a2c46be7cadf41d6535936d8ef079855e6a80795ae&o=&hp=1', title: 'Hotel Image 13' },
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
