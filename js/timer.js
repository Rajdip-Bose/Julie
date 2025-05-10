// Timer and Ranking System
console.log('Timer.js loaded!');

// Define the ranks with their thresholds and text
const ranks = [
    { max: 5, text: "Just a curious glance 😽" },
    { max: 15, text: "Soft smile forming 💞" },
    { max: 30, text: "Starting to wonder if this is love 😳" },
    { max: 60, text: "Heart doing backflips 💓" },
    { max: 120, text: "Lost in her tiny little world 💗" },
    { max: 300, text: "Planning our future together 💍" },
    { max: 600, text: "I'd bake her treats and write her songs ✨🍪" },
    { max: 1000, text: "Meowrried in my dreams 💒🐾" },
    { max: Infinity, text: "Hopelessly, madly, eternally yours 💖🫠" }
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