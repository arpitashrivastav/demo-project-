import { useState } from "react";
import { Dropdown, Wallet } from "./svgIcons";

const navList = [
  { name: "Home", logo: "/assets/home.png" },
  { name: "Orders", logo: "/assets/orders.png" },
  { name: "Products", logo: "/assets/products.png" },
  { name: "Marketing", logo: "/assets/marketing.png" },
  { name: "Delivery", logo: "/assets/delivery.png" },
  { name: "Analytics", logo: "/assets/analytics.png" },
  { name: "Payments", logo: "/assets/payments.png" },
  { name: "Tools", logo: "/assets/tools.png" },
  { name: "Discounts", logo: "/assets/discounts.png" },
  { name: "Audience", logo: "/assets/audience.png" },
  { name: "Appearance", logo: "/assets/appearance.png" },
  { name: "Plugins", logo: "/assets/plugins.png" },
];

const LOGO =
  "https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbXTfDpbx17Dm1UyWrCahHzqo902mog-y7REyL1EVX~ssIEzwHiEcj6MiIHeiOkbDRFcMpt3V-MvddqZyRBHDd-J3LkmTahxCv-UGtnU09Z3J2BfloJvJ7n8-My8RcF0WYqZ6UDqdBSium9I8xL4YyFvx4xreX-agyTnc8DLipLOn6ZANnuZqbZvpSsvyo6nPQr02YzgWu2BYAX~IzuUpJyPWDgjMwbgfHvQm7gpqsVVRXVoDqHJITXGmx4iYGsyfrawR5P-RLJ4ZNnwLYic-E7LCK2GbM-tOGgZf5OIKoUZwQMm35-HaH8YZ-MFzxSXKu~EwjGP9buXyfGZwoPdMg__";

export default function Navigation() {
  const [activeItem, setActiveItem] = useState(6);

  return (
    <nav>
      <div className="nav-head">
        <div className="nav-head-left">
          <div className="nav-logo">
            <img src={LOGO} />
          </div>
          <div className="">
            <div className="brandName font4 bold-500">Nishyan</div>
            <a href="/" className="brandName-link">
              Visit Store
            </a>
          </div>
        </div>
        <div className="nav-head-right">
          <button>
            <Dropdown />
          </button>
        </div>
      </div>
      <div className="nav-main">
        {navList.map(({ name, logo }, index) => (
          <div
            onClick={() => setActiveItem(index)}
            className={`nav-item ${
              activeItem === index ? "activeNavItem" : ""
            }`}
            key={name}
          >
            <div className="item-img">
              <img src={logo} />
            </div>
            <div className="item-name">{name}</div>
          </div>
        ))}
      </div>
      <div className="nav-credits">
        <div className="container">
          <Wallet width="24" height="24" />
        </div>
        <div>
          <div className="title">Available credits</div>
          <div className="value">222.10</div>
        </div>
      </div>
    </nav>
  );
}
