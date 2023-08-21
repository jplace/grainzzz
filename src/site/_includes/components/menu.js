const pushbar = new Pushbar({ overlay: true });

const NavMenu = function (menuButtonId, menuPushbarId) {
  this.$menuButton = document.getElementById(menuButtonId);
  this.$menuPushbar = document.getElementById(menuPushbarId);
};

NavMenu.prototype.initialize = function () {
  this.$menuButton.addEventListener("click", () => {
    if (!this.isMenuOpen) {
      pushbar.open(this.$menuPushbar.dataset.pushbarId);
    } else {
      pushbar.close(this.$menuPushbar.dataset.pushbarId);
    }
  });
  this.$menuPushbar.addEventListener("pushbar_opening", () => {
    this.isMenuOpen = true;
    this.$menuButton.dataset.menuOpen = true;
  });
  this.$menuPushbar.addEventListener("pushbar_closing", () => {
    this.isMenuOpen = false;
    delete this.$menuButton.dataset.menuOpen;
  });
};

const navMenu = new NavMenu("menu-button", "pushbar-menu");
navMenu.initialize();
