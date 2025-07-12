import languageService from "../../../services/language-service.js";
const DonationMessage = () => {
    const donation = languageService.getAllTranslations().home.donation;
    
    return `<div class="donation-message">
             <p>${donation.title}</p>
            <h3>${donation.description}</h3>
            </div>`;
};

export default DonationMessage;