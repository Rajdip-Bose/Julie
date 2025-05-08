// Timer and Ranking System

const ranks = [
  { title: 'Fluffy Beginner', threshold: 0 },
  { title: 'Certified Cuddler', threshold: 60 }, // 1 minute
  { title: 'Whisker Wizard', threshold: 300 }, // 5 minutes
  { title: 'Meow Master', threshold: 900 }, // 15 minutes
  { title: 'Purrfectionist', threshold: 1800 }, // 30 minutes
  { title: 'Legendary Love Cat', threshold: 3600 } // 1 hour
];

class LoveTimer {
  constructor() {
    this.startTime = Date.now();
    this.currentRank = ranks[0];
    this.timerElement = null;
    this.rankElement = null;
    this.init();
  }

  init() {
    this.createTimerUI();
    this.startTimer();
  }

  createTimerUI() {
    const timerContainer = document.createElement('div');
    timerContainer.className = 'timer-container';

    this.timerElement = document.createElement('div');
    this.timerElement.className = 'timer';

    this.rankElement = document.createElement('div');
    this.rankElement.className = 'rank';

    timerContainer.appendChild(this.timerElement);
    timerContainer.appendChild(this.rankElement);

    document.querySelector('.container').appendChild(timerContainer);

    // Set initial rank
    this.updateRank(0);
  }

  formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  updateRank(seconds) {
    const newRank = ranks.reduce((prev, curr) => {
      return seconds >= curr.threshold ? curr : prev;
    }, ranks[0]);

    if (newRank !== this.currentRank) {
      this.currentRank = newRank;
      this.rankElement.textContent = this.currentRank.title;
      this.rankElement.classList.add('rank-up');
      setTimeout(() => this.rankElement.classList.remove('rank-up'), 1000);
    }
  }

  startTimer() {
    setInterval(() => {
      const seconds = Math.floor((Date.now() - this.startTime) / 1000);
      this.timerElement.textContent = this.formatTime(seconds);
      this.updateRank(seconds);
    }, 1000);
  }
}

// Initialize timer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new LoveTimer();
});