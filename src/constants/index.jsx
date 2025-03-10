import { BotMessageSquare } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/joe.jpeg";
import user2 from "../assets/profile-pictures/fluffy.jpeg";
import user3 from "../assets/profile-pictures/donkey.jpeg";
export const navItems = [
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Joe Mama",
    company: "urmum",
    image: user1,
    text: "I was extremely delighted to see my values be divided by shrek. It opened in me a door that only shrek can suffice.",
  },
  {
    user: "100% Fluffy hair",
    company: "SigmaBoiCorporate",
    image: user2,
    text: "Sigma sigma boi sigma boi sigma boi",
  },
  {
    user: "Donkey",
    company: "Shrek2",
    image: user3,
    text: "Are we there yet? Are we there yet?",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Uhm.. Shrek?",
    description:
      "Bruh, comma sucks asl bruh. Shrek Goated fr fr.",
  },
  {
    icon: <Fingerprint />,
    text: "This is shrek Fingers",
    description:
      "Kiss em, kiss em now",
  },
  {
    icon: <GlobeLock />,
    text: "Values are separated by Shreks",
    description:
      "Ong What?! fr bussing",
  },
];

export const checklistItems = [
  {
    title: "Includes Shrek",
    description:
      "Very Nice. 100000+ social credit!",
  },
  {
    title: "It's about shrek?",
    description:
      "Wow, so nice.",
  },
  {
    title: "Helps maintain clean data structure",
    description:
      "It doesn't.",
  },
  {
    title: "Are we there yet?",
    description:
      "Are we there yet?",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Shrek",
      "values will be separated by shrek"
    ],
    notIncluded: [
      "Joe",
      "Mama"
    ],
  },
  {
    title: "Pro",
    price: "$0",
    features: [
      "Shrek",
      "I will personal shrek you (i will not)",
      "Values will still be separated by Shrek",
      ],
      notIncluded: [
        "Commas"
      ],
  },
  {
    title: "Enterprise",
    price: "$0",
    features: [
      "You will win $10B (nope, you won't)",
      "Values are separated by shrek.",
    ],
    notIncluded: [
      "Obamna",
      "Baby gronk rizzed up livy dune.",
    ],
  },
];

export const resourcesLinks = [
  { href: "#hero", text: "Getting Started" },
  { href: "https://medium.com/@marzdevlog/what-is-shrek-separated-values-and-how-to-use-it-37c1d72a646a", text: "Documentation" },
  { href: "https://youtu.be/sod9nYJ8xj8?si=kUEf8zBXPpDZvFL6", text: "Tutorials" }
];

export const platformLinks = [
  { href: "#features", text: "Features" },
  { href: "https://youtu.be/Iypb1FndUg4?si=WGkxew-aSJTfxFUv", text: "System Requirements" },
  { href: "#pricing", text: "Downloads" }
];

export const whoLinks = [
  { href: "https://marzulu.rf.gd", text: "ME?"}
];
