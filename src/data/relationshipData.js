// Edit everything here to customize the site: names, messages, memory
// stops, photo/video filenames, distance stats, coupon text, and the
// final letter. No other file needs to change for content edits.

export const names = {
  him: "Sergi",
  nickname: "papi",
  signature: "de tu yogurín",
};

export const opening = {
  heading: "Happy Birthday, papi",
  subheading:
    "A tiny birthday quest for Sergi, from far away but very much with you.",
  smallText: "For your 30th, because you are papi for real now.",
  buttonText: "Start your birthday quest",
};

export const questIntro = {
  missionText:
    "Today's mission: walk through a few little pieces of us, collect the memories, and unlock your final birthday gift.",
};

// Photo placeholders live in /public/photos — drop a real photo in with
// the same filename and it will show up automatically.
// This is our city timeline: Beijing -> Barcelona -> Thailand -> Rome -> Munich.
// The Thailand and Rome messages below are placeholders — swap in the real memories.
export const memoryStops = [
  {
    id: "beijing",
    title: "Where it started",
    message:
      "Somewhere between Peking Uni, Tsinghua, and all the chaos of Beijing, there was already something about you. Honestly, I think I liked you before I even admitted it.",
    clue: "First clue: this is where you quietly became special to me.",
    photo: "beijing.jpeg",
  },
  {
    id: "barcelona",
    title: "Flying to you before the GRE",
    message:
      "Before my GRE, I flew to Barcelona to see you. Maybe not the most rational study strategy, but definitely the right emotional decision.",
    clue: "Second clue: some flights are worth more than sleep, plans, or exam stress.",
    photo: "barcelona.jpeg",
  },
  {
    id: "thailand",
    title: "Sun, salt water, and us",
    message:
      "Thailand gave us lazy mornings, silly photos, and the kind of easy happiness that made the rest of the world disappear for a while.",
    clue: "Third clue: some of the best days need no plan at all.",
    photo: "thailand.jpeg",
  },
  {
    id: "rome",
    title: "Getting lost on purpose",
    message:
      "Rome had us wandering streets with no real destination, arguing about maps, and somehow always ending up somewhere beautiful together.",
    clue: "Fourth clue: even lost, we were never lost with each other.",
    photo: "rome.jpeg",
  },
  {
    id: "munich",
    title: "Papi for real now",
    message:
      "And now there's Munich, waiting for you. I called you papi a long time ago, and now that you're turning 30, it's officially legally, emotionally, and spiritually confirmed.",
    clue: "Final clue: your birthday title has been unlocked. One more stop before your gift.",
    photo: "munich.jpeg",
  },
];

export const distanceSection = {
  title: "Munich ↔ Shanghai",
  text: "The time difference is hard. Missing each other is hard. But somehow, thinking about the long-term future makes everything feel brighter.",
  cityA: "Munich",
  cityB: "Shanghai",
  // Edit these two placeholders any time.
  currentDistance: "[add distance here]",
  daysUntilNextMeeting: "[add number here]",
};

export const finalGift = {
  heading: "You found your birthday treasure",
  subheading: "One coupon, one picture, and unlimited tokens.",
  coupon: {
    title: "Unlimited Tokens Coupon",
    subtitle: "Redeemable forever",
    body:
      "This coupon gives you unlimited tokens with me: unlimited cuddles, unlimited silliness, unlimited kisses, unlimited attention, unlimited tiny annoyances, and unlimited choosing you again.",
    finePrint:
      "Terms and conditions: no expiry date. No hidden fees. Redeemable across time zones. Especially valid when we see each other again.",
  },
  photo: {
    title: "One last picture",
    placeholderText: "Replace this with a favorite photo of us.",
    filename: "finale.jpeg",
  },
};

export const finalLetter = {
  paragraphs: [
    "Happy birthday, papi.",
    "I hope this made you smile a little. I wish I could be there today to celebrate you properly, hug you for way too long, and be silly with you in person.",
    "I am so proud of you: of your ambition, your goals, and the way you keep moving toward the life you want. I love that about you so much.",
    "Long distance is not always easy. The time difference can be annoying, and I miss the simple things most: cuddling, laughing, being close, and just existing next to you. But even with the distance, thinking about our future makes everything feel brighter.",
    "I cannot wait to see you again as soon as possible. I cannot wait for more cities, more flights, more silly moments, more cuddles, and more of us.",
    "Happy 30th birthday, Sergi. I am so lucky I get to call you my papi.",
  ],
  signatureLead: "With unlimited tokens,",
  signature: names.signature,
};

export const footerText = "Made with love from Munich to Shanghai.";
