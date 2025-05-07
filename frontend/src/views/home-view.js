import OurMission from "../components/our-mission.js";
import { renderResultsSection } from "../components/sectionResults.js";

const HomeView = () => {
    return `
        <section class="home-view container">
            <h1>This is the home view.</h1>
            ${OurMission()}
            ${renderResultsSection()}
        </section>`;
};

export default HomeView;
