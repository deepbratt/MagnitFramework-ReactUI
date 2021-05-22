import Img1 from "../../../../assets/Pricing/Img1.png"
import Img2 from "../../../../assets/Pricing/Img2.png"
import Img3 from "../../../../assets/Pricing/Img3.png"
import Img4 from "../../../../assets/Pricing/Img4.png"
import checked from "../../../../assets/Pricing/checked.png"
import icon from "../../../../assets/Pricing/Path.png"
import {Colors} from "../../../../Theme/color.constants"


export const Heading = "Simple, transparent pricing"
export const paragraph = "No contracts. No surprise fees."

const {lightningYellow,tulipTree,turquioseBlue,scooter,geraldine,sunsetOrange,mint,darkMint,cockTail,darkCockTail} = Colors

export const PricingArray = [{
    color1: lightningYellow,
    color2: tulipTree,
    Img: Img1,
    price: "$20",
    span: "/month",
    title: "Personal",
    subTitle: "Best Choice for Individuals",
    check : checked,
    item1: "All limited links",
    item2: "Own analytics platform",
    item3: "Chat support",
    item4: "Optimize hashtags",
    item5: "Unlimited users",
    buttonText: "Choose plan"

},
{
    color1: turquioseBlue,
    color2: scooter,
    Img: Img2,
    price: "$50",
    span: "/month",
    title: "Business",
    subTitle: "Small Businesses & Freelancers",
    check : checked,
    item1: "All limited links",
    item2: "Own analytics platform",
    item3: "Chat support",
    item4: "Optimize hashtags",
    item5: "Unlimited users",
    buttonText: "Choose plan"
},
{
    color1: mint,
    color2: darkMint,
    Img: Img3,
    price: "$100",
    span: "/month",
    title: "Developer",
    subTitle: "Agencies and Developers",
    check : checked,
    item1: "All limited links",
    item2: "Own analytics platform",
    item3: "Chat support",
    item4: "Optimize hashtags",
    item5: "Unlimited users",
    popular: "Most Popular",
    Icon: icon,
    main1: cockTail,
    main2: darkCockTail,
    buttonText: "Choose plan"
},
{
    color1: geraldine,
    color2: sunsetOrange,
    Img: Img4,
    price: "$200",
    span: "/month",
    title: "Agency",
    subTitle: "Design a custom package",
    check : checked,
    item1: "All limited links",
    item2: "Own analytics platform",
    item3: "Chat support",
    item4: "Optimize hashtags",
    item5: "Unlimited users",
    buttonText: "Choose plan"
}
]