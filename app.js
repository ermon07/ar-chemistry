let visible = [];

AFRAME.registerComponent("marker-handler", {
  init: function () {

    this.el.addEventListener("targetFound", () => {
      const name = this.el.getAttribute("data-name");

      if (!visible.includes(name)) {
        visible.push(name);
      }

      checkReaction();
    });

    this.el.addEventListener("targetLost", () => {
      const name = this.el.getAttribute("data-name");

      visible = visible.filter(v => v !== name);
    });
  }
});

function checkReaction() {

  if (
    visible.includes("Hydrogen") &&
    visible.includes("Oxygen")
  ) {

    alert("Water Created! H2O");
  }
}