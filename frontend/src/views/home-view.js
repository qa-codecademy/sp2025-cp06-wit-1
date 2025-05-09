import OurMission from "../components/home/our-mission.js";
import DonationMessage from "../components/home/header/donation-message.js";
import SuccessCarousel from "../components/home/header/success-carousel.js";
import initCarousel from "../components/util.js";
import { fetchCarouselItems, fetchPeople } from "../services/carousel-service.js";
import PeopleCarousel from "../components/home/header/people-carousel.js";
import { Subscribe,initSubscribeForm } from "../components/home/subscribe.js";
import { renderResultsSection } from "../components/sectionResults.js"
import { renderDifferenceSection } from "../components/sectionDifference.js"

const HomeView = async () => {

    let itemsSucces = await fetchCarouselItems();
    let itemsPeople = await fetchPeople();

    setTimeout(() => {
      initCarousel('#success-carousel');
      initCarousel('#people-carousel');
      initSubscribeForm();
    }, 0);
    
    return `
    <section class="home-view container">
    <header class="home-header">
    ${SuccessCarousel(itemsSucces)}
    <div class="right">
     ${DonationMessage()}
     ${PeopleCarousel(itemsPeople)}
    </div>
    ${OurMission()}
    </header>
    <div>
    ${renderResultsSection()}
    ${renderDifferenceSection()}
    </div>
    ${Subscribe()}
    </section>`;
}

export default HomeView;