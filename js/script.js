var app = new Vue(
    {
        el: "#root",
        data: {
            imageSrc: [
                "https://www.ilbosone.com/wp-content/uploads/animali-selvatici.jpg",
                "http://www.pixolo.it/wp-content/uploads/2012/12/nature_birds_eagles_1920x1080_wallpaper_Wallpaper_2560x1600_www.wall321.com_.jpg",
                "https://www.ilblogsonoio.com/wp-content/uploads/2014/02/orso-polare-cuccioli-4.jpg",
                "https://www.aipozzivillage.com/wp-content/uploads/2020/08/animali-selvatici-liguria-volpe-1080x675.jpg",
                "https://cdn.cosedicasa.com/wp-content/uploads/2018/02/nutria.jpg",
                "https://www.changethefuture.it/assets/uploads/2020/05/animali-selvatici.jpg",
                "https://ladomenicadivicenza.gruppovideomedia.it/foto/PRI/art_4643_1_cinghiale3.jpg",
                "https://www.laleggepertutti.it/wp-content/uploads/2016/08/animali-diffamazione.jpg",
                "https://www.claudiocia.it/wp-content/uploads/2017/03/riccio.jpg",
                "https://www.greenstyle.it/app/uploads/2015/02/shutterstock_162829856.jpg",
                "https://www.miglioripuzzle.it/wp-content/uploads/2020/03/Migliori-Puzzle-Animali-Selvatici-scaled.jpg"
            ],
            imageIndex: 0,
        },
        methods: {
            next: function() {
                this.imageIndex++;
                if (this.imageIndex == this.imageSrc.length) {
                    this.imageIndex = 0;
                }
            },
            back: function() {
                this.imageIndex--;
                if (this.imageIndex == -1) {
                    this.imageIndex = this.imageSrc.length - 1;
                }
            }

        }
    }
    
)