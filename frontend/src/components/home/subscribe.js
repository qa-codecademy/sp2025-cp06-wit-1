const Subscribe = () => {
    return`
<div class="subscription-card">
    <div class="subscription-text">
        <h2>Придружини се!</h2>
        <p>Бидете први што ќе дознаат за нашиот импакт, можностите за волонтирање и настаните во заедницата.</p>
    </div>
    <div class="subscription-form" id="subscription-form">
        <form id="subscribe">
            <input type="email" placeholder="Внесете емаил" id="email" required>
            <button type="submit" id=subscribeBtn>Претплати се!</button>
        </form>
    </div>
</div>
    `;
};
const initSubscribeForm = () => {
  const form = document.getElementById("subscribe");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    alert( "Добредојe, " + email + "!");
    form.reset();
  });
};

export { Subscribe, initSubscribeForm };