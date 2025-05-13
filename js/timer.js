// Timer and Ranking System
console.log('Timer.js loaded!');

// Define the ranks with their thresholds and text
const ranks = [
    { max: 5, text: "Guy who just got here 👋" },
    { max: 15, text: "Jr Julie Stalker 👀" },
    { max: 30, text: "Certified Julie Admirer 📜" },
    { max: 60, text: "Julie Worshipper (Obsessed)" },
    { max: 120, text: "S-Tier Julie Devotee 🏆" },
    { max: 300, text: "Julie Enthusiast with Notification On 🔔" },
    { max: 600, text: "Probably Has Julie as Lock Screen 📱" },
    { max: 1000, text: "Julie Defender in All Comment Sections 💪" },
    { max: Infinity, text: "CEO of Julie Overthinking Bureau 💼" }
];

class LoveTimer {
    constructor() {
        this.startTime = Date.now();
        this.currentRankIndex = 0;
        this.timerElement = document.querySelector('.time');
        this.rankElement = document.querySelector('.rank-name');
        this.init();
    }

    init() {
        this.startTimer();
    }

    updateRank(seconds) {
        for (let i = 0; i < ranks.length; i++) {
            if (seconds <= ranks[i].max) {
                if (this.currentRankIndex !== i) {
                    this.currentRankIndex = i;
                    this.rankElement.textContent = ranks[i].text;
                    this.rankElement.classList.add('rank-up');
                    setTimeout(() => this.rankElement.classList.remove('rank-up'), 1000);
                }
                break;
            }
        }
    }

    startTimer() {
        setInterval(() => {
            const seconds = Math.floor((Date.now() - this.startTime) / 1000);
            this.timerElement.textContent = seconds;
            this.updateRank(seconds);
        }, 1000);
    }
}

// Initialize timer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LoveTimer();
});