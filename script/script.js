gsap.registerPlugin(ScrollTrigger);

let lenis;

function lenisScroll() {
    lenis = new Lenis({
        autoRaf: false,
    });

    let backToUp = document.querySelector('.back-to-up');
    backToUp.addEventListener("click", function () {
        lenis.scrollTo(0, {
            duration: 3.5,
        });
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

function blocks() {
    const block1 = document.querySelector('.b1');
    const block2 = document.querySelector('.b2');
    const block3 = document.querySelector('.b3');

    function resetBlock() {
        [block1, block2, block3].forEach((block) => {
            block.style.height = ''
            block.style.width = ''
        })
    }

    block1.addEventListener('mouseover', () => {
        block1.style.height = '35vh'
        block2.style.height = '35vh'
        block3.style.height = '25vh'

        block1.style.width = '30.8vw'
        block2.style.width = '24.8vw'
    })

    block2.addEventListener('mouseover', () => {
        block1.style.height = '35vh'
        block2.style.height = '35vh'
        block3.style.height = '25vh'

        block1.style.width = '24.8vw'
        block2.style.width = '30.8vw'
    })

    block3.addEventListener('mouseover', () => {
        block3.style.height = '35vh'
        block1.style.height = '25vh'
        block2.style.height = '25vh'
    })

    block1.addEventListener('mouseleave', resetBlock)
    block2.addEventListener('mouseleave', resetBlock)
    block3.addEventListener('mouseleave', resetBlock)
}

function cursor() {
    const cursor = document.querySelector('.cursor');

    window.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.x,
            y: e.y,
            duration: .6,
            ease: 'back.out'
        })
    })
}

function numCountAni() {
    const countNum = document.querySelectorAll('.count-cont .elem h1');

    countNum.forEach(el => {
        let counter = { value: 0 };
        let targetValue = parseInt(el.dataset.target, 10);

        gsap.to(counter, {
            scrollTrigger: {
                trigger: el,
                start: "top 100%",
                end: "top 50%",
                // markers: true,
            },
            value: targetValue,
            duration: 3,
            ease: "back.out(1.7)",
            onUpdate: () => {
                el.textContent = Math.floor(counter.value).toLocaleString();
            }
        })
    })
}

function backToUp() {
    const circle = document.querySelector('.back-to-up')
    circle.style.backgroundColor = 'black';

    gsap.from(circle, {
        y: 70,
        duration: 0.1,
        scrollTrigger: {
            trigger: circle,
            scroller: 'body',
            // markers: true,
            start: 'top bottom',
            end: 'top top',
            scrub: 1,
        }
    })
}

function loader() {
    let loader = document.querySelector(".loader");
    document.body.style.overflow = "hidden";

    setTimeout(() => {
        loader.style.top = "-100%";
        window.scrollTo(0, 0);
        document.body.style.overflow = "auto";
    }, 3000);
}

function pageScroll() {
    document.querySelectorAll('.about, .mission').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            lenis.scrollTo(target, {
                duration: 4,
                offset: -100
            });
        });
    });

    document.querySelectorAll('.contact').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            lenis.scrollTo(target, {
                duration: 4,
                // offset: -100
            });
        });
    });
}



cursor();
lenisScroll();
blocks();
numCountAni();
backToUp();
pageScroll();
loader();