export function big(elem, degStart) {

    if (elem != null) {


        if (window.innerWidth > 992) {

            let array = document.querySelectorAll(elem);
            for (let i = 0; i < array.length; i++) {
                const element = array[i];



                element.addEventListener('mousemove', card3d)

                element.addEventListener('mouseout', function() {
                    let tl = gsap.timeline();
                    tl.to(this, 3, { transformPerspective: 1200, rotateY: degStart, rotateX: "0", ease: "power4.out" })
                })


                function card3d(e) {



                    let widthC = this.clientWidth;
                    let heightC = this.clientHeight;

                    let nowCursorW = e.offsetX;
                    let nowCursorH = e.offsetY;

                    let midW = widthC / 2;
                    let midH = heightC / 2;

                    let WCard = nowCursorW - midW;
                    let HCard = nowCursorH - midH;


                    let tl = gsap.timeline();

                    tl.to(this, 5, { transformPerspective: 1200, rotateY: WCard / 40, rotateX: -HCard / 40, ease: "power4.out" })


                }


            }
        }
    }
}

export function small(elem, degStart) {




    if (elem != null) {


        if (window.innerWidth > 992) {

            let array = document.querySelectorAll(elem);
            for (let i = 0; i < array.length; i++) {
                const element = array[i];



                element.addEventListener('mousemove', card3d)

                element.addEventListener('mouseout', function() {
                    let tl = gsap.timeline();
                    tl.to(this, 3, { transformPerspective: 200, rotateY: degStart, rotateX: "0", ease: "power4.out" })
                })


                function card3d(e) {



                    let widthC = this.clientWidth;
                    let heightC = this.clientHeight;

                    let nowCursorW = e.offsetX;
                    let nowCursorH = e.offsetY;

                    let midW = widthC / 2;
                    let midH = heightC / 2;

                    let WCard = nowCursorW - midW;
                    let HCard = nowCursorH - midH;


                    let tl = gsap.timeline();

                    tl.to(this, 3, { transformPerspective: 200, rotateY: WCard / 20, rotateX: -HCard / 20, ease: "power4.out" })


                }


            }
        }
    }
}
