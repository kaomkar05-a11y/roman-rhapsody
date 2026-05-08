export const HOURS = [
  { day: "Monday", open: "6:30", close: "22:00" },
  { day: "Tuesday", open: "6:30", close: "22:00" },
  { day: "Wednesday", open: "6:30", close: "22:00" },
  { day: "Thursday", open: "6:30", close: "22:00" },
  { day: "Friday", open: "6:30", close: "22:30" },
  { day: "Saturday", open: "6:30", close: "22:30" },
  { day: "Sunday", open: "7:00", close: "22:00" },
];

export function isOpenNow(now = new Date()) {
  const day = (now.getDay() + 6) % 7; // 0 = Monday
  const h = HOURS[day];
  const [oh, om] = h.open.split(":").map(Number);
  const [ch, cm] = h.close.split(":").map(Number);
  const mins = now.getHours() * 60 + now.getMinutes();
  return mins >= oh * 60 + om && mins <= ch * 60 + cm;
}

export const SITE = {
  name: "Caffè Delle Commari",
  tagline: "Caffetteria · Bistrò · Cocktail Bar",
  address: "Via Santamaura, 22, 00192 Roma RM, Italy",
  phone: "+39 06 8354 5754",
  phoneHref: "tel:+390683545754",
  website: "https://caffedellecommari.it",
  rating: 4.8,
  reviews: 13949,
};
