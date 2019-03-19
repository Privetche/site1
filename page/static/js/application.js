var wnfcraft = new Vue({
    el: '#application',
    data: {
        preloader: true,
        show: 'enter',
        isActive: false,
        coupon: "GiveMyCutters"
    },
    methods: {
        sendCoupon() {
            this.hideKeyboard();
            this.$data.show = "verify";
        },
        copyCoupon() {
            this.copyToClipboard("GiveMyCutters");
            wnfcraft.$data.coupon = "COPIED";
        },
        onInputFocus() {
            wnfcraft.$data.isActive = true;
        },
        onInputBlur() {
            wnfcraft.$data.isActive = false;
        },
        hideKeyboard() {
            document.activeElement.blur();
        },
        move ($event) {
            const cursFromCenterX = document.body.clientWidth  - (event.pageX - document.body.offsetLeft);
            const invertedX = Math.sign(cursFromCenterX) > 0 ? -Math.abs( cursFromCenterX ) : Math.abs( cursFromCenterX );
            
            var elements = document.getElementsByTagName("img");
            elements[0].style.transform = "translateX(" + (-(invertedX  / 170)) + "px)";
            elements[1].style.transform = "translateX(" + (-(invertedX  / 10)) + "px)";
            elements[2].style.transform = "translateX(" + (-(invertedX  / 150)) + "px)";
            elements[3].style.transform = "translateX(" + (-(invertedX  / 50)) + "px)";
            elements[4].style.transform = "translateX(" + (-(invertedX  / 70)) + "px)";
            elements[5].style.transform = "translateX(" + (-(invertedX  / 30)) + "px)";
        },
        copyToClipboard(str) {
            const el = document.createElement('textarea');
            el.value = str;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
    },
    created: function() {
        document.onreadystatechange = () => {
            if (document.readyState == "complete") {
                setTimeout(function(){ wnfcraft.$data.preloader = false; }, 600);
            }
        }
    }
})