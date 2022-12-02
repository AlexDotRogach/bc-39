class BlockControl {
  static settingColor = {
    randomColor: () => {
      const { randomRgb } = this.settingColor;

      return `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
    },
    randomRgb: () => {
      return Math.round(Math.random() * 255);
    },
  };

  constructor(parent, blocks) {
    this.blocks = document.querySelectorAll(blocks);
    this.parent = document.querySelector(parent);
  }

  addEventOnParent() {
    if (!this.parent) return "parent isn`t here";

    this.parent.addEventListener("click", this.changeColor.bind(this));
  }

  changeColor({ target }) {
    if (!target.classList.contains("item")) return "";

    const color = BlockControl.settingColor.randomColor();
    target.style.backgroundColor = color;
    this.changeText(target, color);
  }

  changeText(block, text) {
    block.textContent = text.slice(text.indexOf("(") + 1, text.indexOf(")"));
  }
}

const bodyBlocks = new BlockControl(".container", ".item");
bodyBlocks.addEventOnParent();
