addEventListener("gamepadconnected", function (e) {
  let connectedGamepadIndex = e.gamepad.index;

  setInterval(function () {
    let gamepads = navigator.getGamepads();
    let gp = gamepads[connectedGamepadIndex];

    let leftAxisVertical = gp.axes[1];
    const activeElement = document.activeElement;
    const targetDocument = activeElement.contentDocument;

    if (leftAxisVertical > 0) {
      targetDocument.body.dispatchEvent(new KeyboardEvent('keydown', {
        keyCode: 37,//戻る
        bubbles: true
      }));

    } else if (leftAxisVertical < 0) {
      targetDocument.body.dispatchEvent(new KeyboardEvent('keydown', {
        keyCode: 39,//次へ
        bubbles: true
      }));
    }

  }, 500)
});
