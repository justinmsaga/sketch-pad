class player {
  constructor(name, score, auto) {
    this.name = name;
    this.score = score;
    this.el = "";
    this.auto = auto;
  }
  win() {
    this.score++;
  }
  setEl(set) {
    this.el = set;
  }

  toggleAuto() {
    this.auto ? false : true;
  }

  autoSelect() {
    const selection = ["fire", "rock", "paper", "scissors", "water"];
    const num = Math.floor(Math.random() * 100);
    console.log(num);
    if (num < 33) {
      console.log("fire");
      return selection[0];
    } else if (num < 44) {
      console.log("rock");
      return selection[1];
    } else if (num < 55) {
      console.log("paper");
      return selection[2];
    } else if (num < 66) {
      console.log("scissors");
      return selection[3];
    } else {
      console.log("water");
      return selection[4];
    }
  }
}

export default player;
