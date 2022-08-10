const footerItems = [
  {
    title: "Information",
    links: [
      {
        label: "About Us",
        href: "#",
      },
      {
        label: "Delivery Information",
        href: "#",
      },
      {
        label: "Privacy Policy",
        href: "#",
      },
      {
        label: "Terms and Conditions",
        href: "#",
      },
      {
        label: "Contact Us",
        href: "#",
      },
    ],
  },

  {
    title: "My Account",
    links: [
      {
        label: "Sign Inc",
        href: "#",
      },
      {
        label: "View Cart",
        href: "#",
      },
      {
        label: "My Whistlist",
        href: "#",
      },
      {
        label: "Track my Order",
        href: "#",
      },
      {
        label: "Help",
        href: "#",
      },
    ],
  },
];

const footer = document.querySelector("#footer-contents");

footer.innerHTML = `
    <div class="col">
        <img class="logo" src="./assets/logo.png" alt="">
        <h4>Contact</h4>
        <p><b>Address: </b>224 Johnson Street, ijegun egba, satellite town, Lagos</p>
        <p><b>Phone: </b> +234810-2688-946 / (+234) 81 6773 3810</p>
        <p><b>Address: </b>09:00 - 18:00, Mon - Sat</p>
        <div class="follow">
            <h4>Follow Us</h4>
            <div class="icon">
                <a href="https://web.facebook.com/">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.twitter.com">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com">
                    <i class="fab fa-instagram"></i></a>
                <a href="https://www.pinterest.com">
                    <i class="fab fa-pinterest-p"></i>
                </a>
                <a href="https://www.youtube.com/">
                    <i class="fab fa-youtube"></i>
                </a>
            </div>
        </div>
    </div>


    <div class="col install">
        <h4>Install App</h4>
        <p>From App or Google Play</p>
        <div class="row">
            <img src="./assets/pay/app.jpg" alt="App play">
            <img src="./assets/pay/play.jpg" alt="Google play">
        </div>
        <p>Secured Payment Gateways </p>
        <img src="./assets/pay/pay.png" alt="">
    </div>

    <div class="copyright">
        <p>&copy; 2021, Max_Deals Ecommerce Template</p>
    </div>
`;
const contact = footer.firstElementChild;

let current = contact;

for (let index = 0; index < footerItems.length; index++) {
  const footerItem = footerItems[index];
  const div = document.createElement("div");
  div.classList.add("col");

  div.innerHTML = `
    <h4>${footerItem.title}</h4>
    `;

  for (const link of footerItem.links) {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.label;
    div.append(anchor);
  }

  current.after(div);

  current = div;
}
