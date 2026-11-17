import { Cartesian3, Color, Viewer } from 'cesium'

/**
 * Creates the globe without any Cesium ion dependency: no ion imagery, terrain or geocoder,
 * so the app needs no access token and sends no requests to ion.
 */
export function createGlobe(container: HTMLElement): Viewer {
  const viewer = new Viewer(container, {
    baseLayer: false,
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    animation: false,
    timeline: false,
    fullscreenButton: false,
    infoBox: false,
    selectionIndicator: false,
  })

  viewer.scene.globe.baseColor = Color.fromCssColorString('#0b1424')
  // Above Turkey and Cyprus, far enough out that the whole globe is visible.
  viewer.camera.setView({ destination: Cartesian3.fromDegrees(35, 37, 7_000_000) })

  return viewer
}
