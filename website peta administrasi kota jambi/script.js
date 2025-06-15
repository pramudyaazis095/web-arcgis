let scale = 1;

function zoomIn() {
  scale += 0.1;
  document.getElementById('mapImage').style.transform = `scale(${scale})`;
}

function zoomOut() {
  if (scale > 0.2) {
    scale -= 0.1;
    document.getElementById('mapImage').style.transform = `scale(${scale})`;
  }
}
