// Scroll left/right by 2 cards at a time
function scrollStories(direction) {
  const track = document.getElementById('storiesTrack');
  const card = track.querySelector('.story-card');
  if (!card) return;

  const cardWidth = card.offsetWidth + 28; // plus gap
  const distance = cardWidth * 2;          // scroll 2 cards

  track.scrollBy({
    left: direction === 'right' ? distance : -distance,
    behavior: 'smooth'
  });
}

function scrollLeft() {
  scrollStories('left');
}

function scrollRight() {
  scrollStories('right');
}

// Open story details page
function openStory(page) {
  window.location.href = page;
}
