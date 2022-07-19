$(document).ready( () => {
    
    // UPDATES PROGRESS BAR ON SCROLL
    $(window).on('scroll resize', () => {
        let scrollOffset = document.body.getBoundingClientRect().top || document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let progress = -Math.ceil( (scrollOffset / scrollHeight * 100 )) + "%";
        
        $('.nav__progress').css('width', progress);
    });

    // TOGGLES LIGHT MODE AND DARK MODE
    $('.theme__switch').click( () => {
        $('.slider').toggleClass('dark');
        $('body').toggleClass('dark');
    });

    // TOGGLES NAVIGATION MENU
    function toggleMenu() {
        $('.nav__window').toggle();
        $('.nav__bar').toggleClass('active');
        $('.sun').toggleClass('nav__active');
        $('.moon').toggleClass('nav__active');
        $('body, html').toggleClass('nav__active');
    }
    
    $('.menu__button, .nav__link').click( () => {
        toggleMenu();
    });

    // PORTFOLIO ARROWS
    let container = $('.portfolio .container');
    $('.portfolio__arrows .left').on('click', () => {
        $(container).animate({ scrollLeft: '-=' + 290 }, 300);
    });
    $('.portfolio__arrows .right').on('click', () => {
        $(container).animate({ scrollLeft: '+=' + 290 }, 300);
    });

    // MODAL ACTIONS

    let modalImages = [
        `<img src="./images/portfolio/acet-1.png">`,
        `<img src="./images/portfolio/bh-2.png">`,
        `<img src="./images/portfolio/bh-1.png">`,
        `<img src="./images/portfolio/bn-1.png">`,
        `<img src="./images/portfolio/dev-3.png">`,
        `<img src="./images/portfolio/dev-2.png">`,
        `<img src="./images/portfolio/dev-1.png">`,
        `<img src="./images/portfolio/idol-1.png">`,
        `<img src="./images/portfolio/iw-2.png">`,
        `<img src="./images/portfolio/iw-1.png">`,
        `<img src="./images/portfolio/personal-4.png">`,
        `<img src="./images/portfolio/personal-3.png">`,
        `<img src="./images/portfolio/personal-2.png">`,
        `<img src="./images/portfolio/personal-1.png">`,
        `<img src="./images/portfolio/sonder-3.png">`,
        `<img src="./images/portfolio/sonder-2.png">`,
        `<img src="./images/portfolio/sonder-1.png">`,
        `<img src="./images/portfolio/te-3.png">`,
        `<img src="./images/portfolio/te-2.png">`,
        `<img src="./images/portfolio/te-1.png">`,
        `<img src="./images/portfolio/ux-3.png">`,
        `<img src="./images/portfolio/ux-2.png">`,
        `<img src="./images/portfolio/ux-1.png">`,
        `<img src="./images/portfolio/wild-4.png">`,
        `<img src="./images/portfolio/wild-3.png">`,
        `<img src="./images/portfolio/wild-2.png">`,
        `<img src="./images/portfolio/wild-1.png">`,
        `<img src="./images/portfolio/talk-2.png">`,
        `<img src="./images/portfolio/talk-1.png">`,
    ];

    let descs = {
        sonder: `For CompSAt’s COA Recruitment Week 2021, we had Sonder! It was a packed week for recruiting interested students by enticing them with the exciting adventure in store for them with the organization’s official mascot, Corgear!<br/><br/>As the then Vice President for Communications, I created all of the assets together with most of the promotional materials as a one-person department at the time.`,
        te: `Tech Everywhere 2021 was an online conference-camp by GDSC-L that educated students on the latest technologies in the Philippines. Its branding was festive and quirky with the Philippines’s red, blue, and yellow.`,
        bn: `Buddy Nights is CompSAt’s recurring project where members hangout and get to know one another. As its Creatives Head, I created promotional materials highlighting the wide range of activities for the night in theme with the holidays.`,
        iw: `The Improv Workshop is a collaboration project between the Computer Society of the Ateneo and the Blue Bird Improv. It’s a 3-hour workshop filled with improvisation games. The branding for the event is more quirky and free with the grunge brush strokes and cartoonish mascots to tie with the chill activities.`,
        bh: `Blue Hacks 2021 is CompSAt’s annual flagship project, a 48-hour online hackathon. As its Creatives Co-head, I created the promotional materials with my co-head as a two-person team. It was the project’s first online iteration where we wanted to electrify and pop (though quite literally)!`,
        dev: `Re<dev>fined was the title for GDSC-L Recruitment Week 2021. The branding for the event highlighted the warmth, comfort, and interaction within the tech organization for students interested in joining. As the then Creatives and Branding Lead, I created some of the publication materials and design assets.`,
        acet: `I kickstarted my journey as a graphic designer by being member of the MCHS design committee back in highschool. I made multiple publication materials for the batch Twitter including an Ateneo College Entrance Test encouragement post!`,
        wild: `The Wildcard is CompSAt’s official newsletter. After years of being inactive, the Department of Communications collaborated with the Department of Documentations to revive Wildcard. As the then Vice President for Communications, we updated the branding of the entire newsletter and successfully released the very first issue in years to the organization’s members!`,
        ux: `The UX University: Bootcamp Edition is a month-long case competition providing a rigorous UX Research, Product Design, and User Testing curriculum to its participants. Its branding mainly takes from the Apple 2022 Event and the Figma and Apple UI. As a Creatives Officer, I was assigned to make some publication materials in collaboration with the team.`,
        talk: `Talk 2022 was one of the flagship projects of Ateneo peers. As a Creatives member, I was assigned to create some of its publication materials. The project promoted mental growth and blooming through the skill of talking—with others and one’s self.`,
        personal: `Aside from creating publication materials, I do like to paint digitally too! I love drawing portraits and it is where I started taking art and design seriously.`,
    }

    $('.portfolio__card').on('click', e => {
        let card = e.target.closest('.portfolio__card');
        let cardId = $(card).attr('id');
        let cardTitle = $(card).find('.captions h3').html();
        let filtered = modalImages.filter( element => element.includes(cardId));
        
        $('#modal__title').html(cardTitle);
        $('#modal__description').html( descs[String(cardId)] );
        filtered.forEach(element => {
            $('#modal__images').prepend(element);
        });
    
        $('.overlay, .modal').show();
    });
    $('.close, .overlay').on('click', () => {
        $('.overlay, .modal').hide();
        $('#modal__images').empty();
    });
});