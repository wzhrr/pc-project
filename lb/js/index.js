$(function(){
	var banner = {
		init: function(){
			this.imgs = $('.img-wrapper img');
			this.now = 0;
			this.next = 0;
			this.timer = null;
			this.btnL = $('.arrow-left');
			this.btnR = $('.arrow-right');
			this.autoPlay();
			this.control();
			this.nextImg();
			this.proImg();
		},
		autoPlay: function(){
			var that = this;
			this.timer = setInterval(function(){
				that.next++;
				that.next %= that.imgs.length;
				that.switchImg();
			},1500)
		},
		switchImg: function(){
			this.imgs.eq(this.now).fadeOut(500);
			this.imgs.eq(this.next).fadeIn(500);
			this.now = this.next;
		},
		control: function(){
			var that = this;
			$('.banner-wrapper').hover(function(){
				clearInterval(that.timer);
			},function(){
				that.autoPlay();
			})
		},
		nextImg: function(){
			var that = this;
			this.btnR.click(function(){
				that.next++;
				that.next %= that.imgs.length;
				that.switchImg();
			})
		},
		proImg: function(){
			var that = this;
			this.btnL.click(function(){
				that.next--;
				that.next == -1 ? that.next = 5 : that.next;
				that.switchImg();
			})
		}
	}
	banner.init();
})