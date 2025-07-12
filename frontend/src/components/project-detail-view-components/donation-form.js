export function renderDonationForm(t) {
  return `
    <div class="modal-overlay">
      <div class="modal-content">
        <form id="donationForm" class="donation-form">
          <h3>${t.enterDonationDetails}</h3>

          <label for="cardHolder">${t.cardHolder}</label>
          <input type="text" id="cardHolder" placeholder="${t.cardHolderName}" />
          <span id="cardHolderError" class="error"></span>

          <label for="cardNumber">${t.cardNumber}</label>
          <input type="text" id="cardNumber" placeholder="•••• •••• •••• ••••" />
          <span id="cardNumberError" class="error"></span>

          <label for="donationAmount">${t.amount}</label>
          <input type="number" id="donationAmount" placeholder="1000" />
          <span id="donationAmountError" class="error"></span>

          <button type="submit" id="submitDonation">${t.confirmDonation}</button>
        </form>
      </div>
    </div>
  `;
}
