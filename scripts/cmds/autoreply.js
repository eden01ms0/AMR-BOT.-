module.exports.handleEvent = async function ({ api, event, Users }) {
  const { threadID, messageID, senderID, body } = event;
  
    // <--- সমস্যা সমাধানের জন্য নতুন কোড এখানে যোগ করুন --->
    // 1. বটের নিজের ID-এর সাথে মেসেজ পাঠানো ব্যক্তির ID তুলনা করা
    if (senderID === api.getCurrentUserID()) return; 

  if (!body) return;

  const msg = body.toLowerCase();

  // KEYWORD & REPLY LIST
  const triggers = [
    // ... (বাকি ট্রিগার লিস্ট এখানে আছে)
    // ...
    { key: "miss you", reply: "সর বেডি বস ইডেন mingle🎃" },
    { key: "kiss de", reply: "কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬" },
    { key: "👍", reply: "সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️" },
    { key: "hi", reply: "এত হাই-হ্যালো কর ক্যান প্রিও..!😜🫵" },
    { key: "eden", reply: "উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘" },
    { key: "assalamualaikum", reply: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ 💖" },
    { key: "i love you", reply: "love you too🐸🤣" },
    { key: "thanks", reply: "এতো ধন্যবাদ না দিয়ে আমার বস ইডেনকে ডেকে আন🐸🥵" },
    { key: "kire bot", reply: "BOSS EDEN ER ID NEO https://www.facebook.com/share/1BYWX1fbD5/" }
  ];

  // LOOP করে KEY CHECK করা
  for (let t of triggers) {
    if (msg.includes(t.key)) {
      return api.sendMessage(t.reply, threadID, messageID);
    }
  }
};
