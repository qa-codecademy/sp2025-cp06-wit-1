import OurMission from "../components/our-mission.js";
import { renderDifferenceSection } from "../components/sectionDifference.js";

const HomeView = () => {

    return `
    <section class="home-view container">
        <h1>This is the home view.</h1>
        ${OurMission()}
        ${renderDifferenceSection()}
    </section>`;
}

export default HomeView;