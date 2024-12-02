const items = [
  {
    id: 1,
    label: "Dashboard",
    sub_title: "Overview of your SamzugaGPT",
    icon: "ic:outline-dashboard",
    url: "/",
    header: false,
    parent: "home",
    isLink: true,
  },

  {
    id: 2,
    label: "Deposit",
    sub_title: "Fund your SamzugaGPT",
    icon: "streamline:money-atm-card-2-deposit-money-payment-finance-atm-withdraw",
    url: "/deposit",
    hasChildren: false,
    isLink: true,
    parent: "deposit",
  },

  // {
  //   id: 3,
  //   label: "Staking",
  //   sub_title: "Earn rewards by staking funds",
  //   icon: "bx:lock",
  //   url: "/staking",
  //   hasChildren: false,
  // isLink: true,
  //   parent: "staking",
  // },

  {
    id: 4,
    label: "Withdraw",
    sub_title: "Send out your staking rewards",
    icon: "uil:money-withdrawal",
    url: "/withdraw",
    hasChildren: false,
    isLink: true,
    parent: "withdraw",
  },

  {
    id: 5,
    label: "Swap",
    sub_title: "Swap your currencies",
    icon: "mi:repeat",
    url: "/swap",
    hasChildren: false,
    isLink: true,
    parent: "swap",
  },

  {
    id: 5,
    label: "Transfer",
    sub_title: "Swap your currencies",
    icon: "mi:repeat",
    url: "/transfer",
    hasChildren: false,
    isLink: true,
    parent: "transfer",
  },

  {
    id: 8,
    label: "Refer and Earn",
    sub_title: "Earn amazing bonuses",
    icon: "ri:share-line",
    url: "/referral",
    hasChildren: false,
    isLink: true,
    parent: "referral",
  },

  {
    id: 7,
    label: "Transaction History",
    sub_title: "See transactions you've made",
    icon: "ep:list",
    url: "/transaction-history",
    isLink: true,
    hasChildren: false,
    parent: "transaction-history",
  },

  // {
  //   id: 6,
  //   label: "Personal Information",
  //   sub_title: "Your profile settings",
  //   icon: "solar:user-linear",
  //   url: "/personal-information",
  //   hasChildren: false,
  // isLink: true,
  //   parent: "personal-information",
  // },

  {
    id: 9,
    label: "Help & Support",
    sub_title: "Make Enquiries/resolve issues",
    icon: "charm:help",
    url: "/help-and-support",
    hasChildren: false,
    isLink: true,
    parent: "help-and-support",
  },

  {
    id: 10,
    label: "Logout",
    sub_title: "Sign Out",
    icon: "fe:logout",
    hasChildren: false,
    isLink: false,
    parent: "logout",
  },
]

export default items
