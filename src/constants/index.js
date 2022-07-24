import iconCeFi from "../assets/resources/mobile/icon-CeFi.png";
import iconDAOS from "../assets/resources/mobile/icon-DAOS.png";
import iconDeFi from "../assets/resources/mobile/icon-DeFi.png";
import ICONGAMING from "../assets/resources/mobile/ICON-GAMING.png";
import ICONInfrasctructure from "../assets/resources/mobile/ICON-Infrasctructure.png";
import ICONNFT from "../assets/resources/mobile/ICON-NFT.png";
import ICONWALET from "../assets/resources/mobile/ICON-WALET.png";
import ICONWeb3Apps from "../assets/resources/mobile/ICON-Web3-Apps.png";

export const FOCUS_DEFAULT_IMAGE_MOBILE = [
  {
    img: iconCeFi,
    name: "CeFi",
  },
  {
    img: iconDAOS,
    name: "DAOs",
  },
  {
    img: iconDeFi,
    name: "DeFi",
  },
  {
    img: ICONGAMING,
    name: "Gaming",
  },
  {
    img: ICONInfrasctructure,
    name: "Infrastructure",
  },
  {
    img: ICONNFT,
    name: "NFT",
  },
  {
    img: ICONWALET,
    name: "Walet",
  },
  {
    img: ICONWeb3Apps,
    name: "Web3-Apps",
  },
];

export const API_ENDPOINT = "https://www.kkfund.co/wp-json/acf/v3/kkdao/data/";

export const SETTING_HOMEPAGE = {
  title: "KKDAO",
  description:
    '<p class="introContent"><b style="font-family: SFUFutura;">FIRST DAO</b> RUN BY A VC FIRM<br>IN <b style="font-family: SFUFutura;">SOUTHEAST ASIA</b> </p>',
  cta: { logo_link: "#", twitter_link: "#", email: "contact@tenomad.com" },
};
export const SETTING_ABOUT = {
  title: "ABOUT THE PROJECT",
  description:
    '<b style="font-family: MontserratBold; font-weight: bold;">KKDAO is the first DAO run by a VC firm in Southeast Asia.</b> We believe that KK DAO can create opportunities for next generation talent in Web 3.0 in developing countries, support the underserved talent in emerging markets. We build, support, and invest in early blockchain-agnostic startups in the area, DAOs, DeFi, CeFi (centralized finance), Web3 Apps, Infrastructure, Wallet, Gaming, and NFT.',
  button: { content: "SHARE YOUR INNOVATION HERE", link: "#" },
};

export const SETTING_FOCUS = {
  projects: [
    { title: "DAOs", image: "/kkdao/images/projects/DAOs.png" },
    { title: "Defi", image: "/kkdao/images/projects/Defi.png" },
    { title: "Cefi", image: "/kkdao/images/projects/Cefi.png" },
    { title: "Web3-Apps", image: "/kkdao/images/projects/Web3-Apps.png" },
    {
      title: "Infrastructure",
      image: "/kkdao/images/projects/Infrastructure.png",
    },
    { title: "Wallet", image: "/kkdao/images/projects/Wallet.png" },
    { title: "Gaming", image: "/kkdao/images/projects/Gaming.png" },
    { title: "NFT", image: "/kkdao/images/projects/NFT.png" },
  ],
  title: "FOCUS PROJECT",
};

export const SETTING_INVESTOR = {
  first_investor: {
    description:
      "Mistletoe is a venture capital firm that prefers to invest in start up companies. The firm seeks to invest in the education, software and support sectors. It is based in Tokyo, Japan and was founded in 2013.",
    title: "MISTLETOE",
  },
  other_investor: [
    { title: "Investor Title", description: "Investor Description" },
  ],
};

export const SETTINGS = {
  about: SETTING_ABOUT,
  focus_project: SETTING_FOCUS,
  homepage: SETTING_HOMEPAGE,
  investor: SETTING_INVESTOR,
};
