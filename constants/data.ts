import { icons } from './icons'

export const tabs = [
    { name: 'index', title: 'Home', icon: icons.home },
    { name: 'subscriptions', title: 'Subscriptions', icon: icons.wallet },
    { name: 'insights', title: 'Insights', icon: icons.activity },
    { name: 'settings', title: 'Settings', icon: icons.setting },
];

export const HOME_USER = {
    name: "Loumie | AOL Hub",
}

export const HOME_BALANCE = {
    amount: 50564.48,
    nextRenewalDate: "2026-03-18T09:00:00.000Z",
}

export const UPCOMING_SUBSCRIPTIONS: UpcomingSubscription[] = [
    {
        id: "spotify",
        name: "Spotify",
        icon: icons.spotify,
        price: 5.99,
        currency: "USD",
        daysLeft: 2,
    },
    {
        id: "notion",
        name: "Notion",
        icon: icons.notion,
        price: 12.0,
        currency: "USD",
        daysLeft: 4,
    },
    {
        id: "figma",
        name: "Figma",
        icon: icons.figma,
        price: 15.0,
        currency: "USD",
        daysLeft: 6,
    },

];

export const HOME_SUBSCRIPTIONS: Subscription[] = [
    {
        id: "adobe-creative-cloud",
        name: "Adobe Creative Cloud",
        icon: icons.adobe,
        plan: "Teams Plan",
        category: "Design",
        paymentMethod: "Visa ending in 8530",
        status: "active",
        startDate: "2026-03-18T09:00:00.000Z",
        price: 77.49,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2027-03-18T09:00:00.000Z",
        color: "#f5c542",
    },
    {
        id: "github-pro",
        name: "GitHub Pro",
        icon: icons.github,
        plan: "Developer",
        category: "Developer Tools",
        paymentMethod: "Mastercard ending in 2408",
        status: "active",
        startDate: "2026-07-18T09:00:00.000Z",
        price: 9.99,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2027-07-18T09:00:00.000Z",
        color: "#e8def8",
    },
    {
        id: "claude-pro",
        name: "Claude Pro",
        icon: icons.claude,
        plan: "Pro Plan",
        category: "AI Tools",
        paymentMethod: "Amex ending in 1090",
        status: "paused",
        startDate: "2025-02-18T09:00:00.000Z",
        price: 20,
        currency: "USD",
        billing: "Monthly",
        renewalDate: "2026-12-18T09:00:00.000Z",
        color: "#b8d4e3",
    },
    {
        id: "canva-pro",
        name: "Canva Pro",
        icon: icons.canva,
        plan: "Yearly Access",
        category: "Design",
        paymentMethod: "Visa ending in 3210",
        status: "cancelled",
        startDate: "2025-03-18T09:00:00.000Z",
        price: 119.49,
        currency: "USD",
        billing: "Yearly",
        renewalDate: "2026-03-18T09:00:00.000Z",
        color: "#b8e8d0",
    },
]