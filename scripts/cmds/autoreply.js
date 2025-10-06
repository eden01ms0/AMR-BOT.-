module.exports.config = {
    name: "safereply", // কমান্ডের নাম পরিবর্তন করতে পারেন 
    version: "1.0.1",
    hasPermssion: 0,
    credits: "ChatGPT & Your Name", // আপনার নাম দিয়ে দিন
    description: "Auto reply without prefix, with loop protection.",
    commandCategory: "No Prefix",
    usages: "[any trigger]",
    cooldowns: 0,
};

module.exports.handleEvent = async function ({ api, event, Users }) {
    const { threadID, messageID, senderID, body } = event;
    
    // <--- 🛡️ লুপ প্রোটেকশন: বট নিজের মেসেজে উত্তর দেবে না 🛡️ --->
    if (senderID === api.getCurrentUserID()) return; 

    if (!body) return; // যদি মেসেজে কোনো টেক্সট না থাকে, তবে কিছু করবে না।

    const msg = body.toLowerCase();
    
    // <--- 💬 আপনার ট্রিগার এবং রিপ্লাই তালিকা (Key & Reply List) 💬 --->
    const triggers = [
        { key: "hi", reply: "Hello! প্রিয় মানুষ, কেমন আছেন?" },
        { key: "kire bot", reply: "কিরে বলবেন না। আমি আপনার জন্য তৈরি একটি সহকারী মাত্র। কীভাবে সাহায্য করতে পারি?" },
        { key: "bhai", reply: "ভাই বলে ডাকছেন? আমার বস এখন ব্যস্ত। আমাকে বলুন, কী দরকার?" },
        { key: "miss you", reply: "আমি সবসময় আপনার পাশেই আছি। ❤️" },
        { key: "assalamualaikum", reply: "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ, আশা করি আপনি ভালো আছেন। 😊" },
        { key: "i love you", reply: "আমি একটি প্রোগ্রাম, তবে আপনার অনুভূতির জন্য ধন্যবাদ! 😊" },
        { key: "thanks", reply: "আপনাকে সাহায্য করতে পেরে খুশি হলাম।" }
    ];

    // ট্রিগার চেক করা এবং উত্তর দেওয়া
    for (let t of triggers) {
        if (msg.includes(t.key.toLowerCase())) { // ট্রিগার শব্দ মেসেজে আছে কিনা দেখছে
            return api.sendMessage(t.reply, threadID, messageID);
        }
    }
};

module.exports.run = async function ({ api, event, args, Users }) {
    // No Prefix কমান্ড হওয়ায় এই অংশটি খালি রাখা হয়েছে 
};
