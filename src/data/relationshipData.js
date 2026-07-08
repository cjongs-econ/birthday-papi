// Edit everything here to customize the site: names, messages, memory
// stops, photo/video filenames, distance stats, coupon text, and the
// final letter. No other file needs to change for content edits.

export const names = {
  him: "Sergi",
  nickname: "papi",
  signature: "tu yogurín",
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
    "Today's mission: walk through a few little pieces of us, guess where we were, and unlock your final birthday gift.",
};

// Photo placeholders live in /public/photos — drop a real photo in with
// the same filename and it will show up automatically.
// This is our city timeline: Beijing -> Barcelona -> Thailand -> Rome -> Munich.
// The Thailand and Rome messages below are placeholders — swap in the real memories.
// The message/clue text intentionally avoids naming the city — he has to guess it
// from the photo and clue before he can continue. `city` is the properly-cased
// name shown once he guesses right; `answers` are the accepted spellings,
// matched case-insensitively and accent-insensitively.
export const memoryStops = [
  {
    id: "beijing",
    title: "Where it started",
    message:
      "Somewhere between two university campuses and all the chaos of a sprawling capital, there was already something about you. Honestly, I think I liked you before I even admitted it.",
    clue: "First clue: this is where you quietly became special to me. Two famous universities might give it away.",
    photo: "beijing.jpeg",
    city: "Beijing",
    answers: ["beijing", "peking"],
  },
  {
    id: "barcelona",
    title: "Flying in before a big exam",
    message:
      "Before a huge exam back home, I hopped on a flight to see you instead. Maybe not the most rational study strategy, but definitely the right emotional decision.",
    clue: "Second clue: some flights are worth more than sleep, plans, or exam stress. Gaudí lives here.",
    photo: "barcelona.jpeg",
    city: "Barcelona",
    answers: ["barcelona"],
  },
  {
    id: "thailand",
    title: "Sun, salt water, and us",
    message:
      "Lazy mornings, silly photos, and the kind of easy happiness that made the rest of the world disappear for a while.",
    clue: "Third clue: think beaches, islands, and pad thai.",
    photo: "thailand.jpeg",
    city: "Thailand",
    answers: ["thailand"],
  },
  {
    id: "rome",
    title: "Getting lost on purpose",
    message:
      "Wandering streets with no real destination, arguing about maps, and somehow always ending up somewhere beautiful together.",
    clue: "Fourth clue: all roads lead here, apparently.",
    photo: "rome.jpeg",
    city: "Rome",
    answers: ["rome"],
  },
  {
    id: "munich",
    title: "Papi for real now",
    message:
      "And now there's a city waiting for you, one that might just become home. I called you papi a long time ago, and now that you're turning 30, it's officially legally, emotionally, and spiritually confirmed.",
    clue: "Final clue: this is where I live now, and where I hope you'll join me. Beer gardens and the Alps nearby.",
    photo: "munich.jpeg",
    city: "Munich",
    answers: ["munich", "münchen"],
  },
];

export const distanceSection = {
  title: "Munich ↔ Shanghai",
  text: "The time difference is hard. Missing each other is hard. But somehow, thinking about the long-term future makes everything feel brighter.",
  cityA: "Munich",
  cityB: "Shanghai",
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
  signatureLead: "With love,",
  signature: names.signature,
};

export const footerText = "Made with love from Munich to Shanghai.";
