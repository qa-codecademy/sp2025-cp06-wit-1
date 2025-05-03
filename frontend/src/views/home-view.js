import OurMission from "../components/our-mission.js";

const HomeView = () => {

    return `
    <section class="home-view container">
        <h1>This is the home view.</h1>
        ${OurMission()}
    </section>`;
}

export default HomeView;