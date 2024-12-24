export async function init({
  shaka,
  videoElement,
  videoContainerElement,
  setPlayer,
}) {
  shaka.polyfill.installAll();
  if (shaka.Player.isBrowserSupported()) {
    if (shaka.net.HttpFetchPlugin.isSupported()) {
      shaka.net.NetworkingEngine.registerScheme(
        "http",
        shaka.net.HttpFetchPlugin.parse,
        shaka.net.NetworkingEngine.PluginPriority.PREFERRED,
        true
      );
      // shaka.net.NetworkingEngine.registerScheme(
      //   "ndn",
      //   NdnPlugin,
      //   shaka.net.NetworkingEngine.PluginPriority.PREFERRED,
      //   true
      // );
      const player = new shaka.Player();
      await player.attach(videoElement.current);

      setPlayer(player);
    }
  } else {
    console.error("Browser not supported!");
  }
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
export function connectionTorRouter({
  ip,
  setRouter,
  setHasRouterError,
  setLoading,
}) {
  setLoading(true);
  try {
    const url = `ws://${ip}:9696/ws/`;

    setRouter(url);

    const coon = connection(url);
    setLoading(false);
    setHasRouterError(false);
  } catch (error) {
    setHasRouterError(error.message);
    setLoading(false);
    console.error("Error fetching router:", error);
  }
}
function onPlayerError(error) {
  // Handle player error
  console.error("Error code", error.code, "object", error);
}
