// Дані div
// Зробити так щоб при наведені
// задався рандомний колір з масива.
// При кліку колір повиний змінюватися на дефолтний

class BlockColor {
  static colorSetting = {
    defaultColor: "purple",
    allowColor: ["red", "green", "yellow", "blue"],
  };

  constructor(tagName) {
    this.elements = document.querySelectorAll(tagName);
    this.listenersFunctionThis = {
      mouseMove: this.listeners.setMouseMove.bind(this),
      setColorThis: this.setColor.bind(this),
    };
    this.setDefaultColor();
  }

  listeners = {
    setMouseMove: function (block) {
      const elem = block.type ? block.target : block;

      elem.addEventListener(
        "mousemove",
        this.listenersFunctionThis.setColorThis
      );
    },

    setMouseOut: function (block) {
      block.addEventListener("mouseout", this.listenersFunctionThis.mouseMove);
    },

    setClick: function (block) {
      block.addEventListener("click", this.clickAction.bind(this));
    },
  };

  setDefaultColor() {
    this.elements.forEach((element) => this.setDefaultSetting(element));
  }

  setDefaultSetting(block) {
    const { defaultColor } = BlockColor.colorSetting;
    const { setMouseMove, setClick } = this.listeners;

    this.setColor(block, defaultColor);
    setMouseMove.bind(this)(block);
    setClick.bind(this)(block);
  }

  setColor(block, color = this.randomColor()) {
    const elem = block.type ? block.target : block;

    elem.style.backgroundColor = color;
  }

  randomColor() {
    const { allowColor } = BlockColor.colorSetting;
    const index = Math.round(Math.random() * allowColor.length);

    return allowColor[index];
  }

  clickAction(e) {
    const { defaultColor } = BlockColor.colorSetting;
    const { target } = e;

    this.setColor.bind(this)(target, defaultColor);

    target.removeEventListener(
      "mousemove",
      this.listenersFunctionThis.setColorThis
    );
    this.listeners.setMouseOut.bind(this)(target);
  }
}

new BlockColor("div");

// const defaultColor = "purple";
// const allowColor = ["red", "green", "yellow", "blue"];

// const blockList = document.querySelectorAll("div");

// blockList.forEach((block) => {
//   block.style.backgroundColor = defaultColor;
//   addMouseMove(block);
//   //   block.addEventListener("mousemove", changeColor);

//   block.addEventListener("click", setDefaultColor);
// });

// function changeColor(e) {
//   e.target.style.backgroundColor = randomColor(allowColor);
// }

// function randomColor(arr) {
//   const index = Math.round(Math.random() * arr.length);
//   return arr[index];
// }

// function setDefaultColor(e) {
//   e.target.style.backgroundColor = defaultColor;
//   e.target.removeEventListener("mousemove", changeColor);
//   e.target.addEventListener("mouseout", addMouseMove);
// }

// function addMouseMove(e) {
//   //   if (e.type) {
//   //     e.target.addEventListener("mousemove", changeColor);
//   //   } else {
//   //     e.addEventListener("mousemove", changeColor);
//   //   }

//   const elem = e.type ? e.target : e;

//   elem.addEventListener("mousemove", changeColor);
// }
