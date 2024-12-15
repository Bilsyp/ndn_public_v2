export async function init({
  shaka,
  videoElement,
  videoContainerElement,
  setPlayer,
}) {
  const player = new shaka.Player();
  await player.attach(videoElement.current);

  setPlayer(player);
}

export async function loadVideo({ player }) {
  const manifestUri =
    "https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd";

  console.log(player);
  try {
    await player.load(manifestUri);
    // This runs if the asynchronous load is successful.
    console.log("The video has now been loaded!");
  } catch (error) {
    onPlayerError(error);
  }
}
function onPlayerError(error) {
  // Handle player error
  console.error("Error code", error.code, "object", error);
}
