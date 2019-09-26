function page1() {
    let highlight = document.querySelector(".nav-highlight");
    let page1 = document.querySelector("#page-1");
    let page2 = document.querySelector("#page-2");
    
    highlight.classList.remove("expand");
    page1.classList.remove("expand");  
    page2.classList.remove("expand");  
}

function page2() {
    let highlight = document.querySelector(".nav-highlight");
    let page1 = document.querySelector("#page-1");
    let page2 = document.querySelector("#page-2");

    highlight.classList.add("expand");  
    page1.classList.add("expand");  
    page2.classList.add("expand");  
}

var throttleScroll = false;
var lastScroll;
(function () {
    console.log("start");
    lastScroll = document.documentElement.scrollTop;

    window.addEventListener("scroll", function(event) {
        if(!throttleScroll) {
            let delta = this.document.documentElement.scrollTop - lastScroll;
            if(document.documentElement.scrollTop > 100 && delta > 0) {
                this.document.querySelector(".navbar").classList.add("collapse");
            }

            if(delta < 0) {
                this.document.querySelector(".navbar").classList.remove("collapse");
            }
            throttleScroll = true;
            this.setTimeout(()=>{throttleScroll=false}, 0.2);
            lastScroll = this.document.documentElement.scrollTop;
            console.log(delta);
        }
    })
})();