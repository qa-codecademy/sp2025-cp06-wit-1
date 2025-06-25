import languageService from "../services/language-service.js";
import OurMission from "../components/home/our-mission.js";
import OurVision from "../components/about/our-vision.js";
import { Gallery, renderGallery} from "../components/about/gallery.js";

const AboutView = () => {
    const about = languageService.getAllTranslations().about

    const html= `
    <div class="aboutWrapper">
        <div class="aboutTitle"> <h1>${about.title}</h1></div>
            <section class="aboutContainer">
            ${OurMission()}
            ${OurVision()}
            </section>
            <section class="aboutLocation">
                    <div class="contactWaysContainer">
                        <h1>${about.info}</h1>
                        <a href="tel:+38978247111"><i class="bi bi-telephone-fill"></i>+38978247111</a>
                        <a href="mailto:troublegostivar@gmail.com"> <i class="bi bi-envelope-fill"></i>troublegostivar@gmail.com</a>
                        <a href="https://maps.app.goo.gl/HxovBrJhVMzxbyuG9" target="_blank"><i class="bi bi-geo-alt-fill"></i>${about.address}</a>
                    </div>
                    <div class="mapFrame">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.2200189696287!2d20.9132942!3d41.802020500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135157798cc54d7b%3A0xf8332e6ba108d53f!2sSretko%20Krsteski%2C%201230%20Gostivar!5e0!3m2!1sen!2smk!4v1750010345893!5m2!1sen!2smk" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
            </section>
            ${Gallery()}
        </div>
    </div>`;
    return {
        html,
        setup:()=>{
            renderGallery();
        }
    }
}

export default AboutView;