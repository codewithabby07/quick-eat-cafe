const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace Slide 1 with the real video
const oldSlide1Regex = /<!-- Slide 1: Rolls -->[\s\S]*?<!-- Slide 2: Momos & Chinese -->/;

const newSlide1 = `<!-- Slide 1: Real Cafe Reel Video -->
              <div class="hero-slide active" data-slide="0">
                <video id="heroReelVideo" class="w-full h-full object-cover" autoplay muted loop playsinline poster="images/reel-thumb.jpg">
                  <source src="images/reel-video.mp4" type="video/mp4">
                </video>
                <div class="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-black/30 pointer-events-none"></div>
                <div class="absolute bottom-12 left-6 right-6 pointer-events-none">
                  <span class="px-2.5 py-1 rounded-md bg-accent text-black text-[11px] font-bold uppercase tracking-wider mb-1.5 inline-flex items-center gap-1.5">
                    <i class="fa-solid fa-shop"></i> Dine-In Ambience
                  </span>
                  <h3 class="font-heading text-2xl text-foreground font-bold">Your New Hangout is Here</h3>
                  <p class="text-xs text-accent font-medium mt-0.5">Come Dine In • Shop 142, Zakir Nagar Main Road</p>
                </div>
                <!-- Sound Toggle Button -->
                <button type="button" onclick="toggleReelAudio(event)" class="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-black/60 text-white/90 hover:text-white hover:bg-black/90 flex items-center justify-center backdrop-blur-md transition-all shadow-lg border border-white/10" title="Toggle Sound">
                  <i id="audioToggleIcon" class="fa-solid fa-volume-xmark text-xs"></i>
                </button>
              </div>

              <!-- Slide 2: Momos & Chinese -->`;

html = html.replace(oldSlide1Regex, newSlide1);

// Add audio toggle function in script
const scriptAddRegex = /function resetTimer\(\) \{/;
const newScriptPart = `function toggleReelAudio(e) {
      if (e) e.stopPropagation();
      const vid = document.getElementById('heroReelVideo');
      const icon = document.getElementById('audioToggleIcon');
      if (vid) {
        vid.muted = !vid.muted;
        if (vid.muted) {
          icon.className = 'fa-solid fa-volume-xmark text-xs';
        } else {
          icon.className = 'fa-solid fa-volume-high text-xs';
          vid.play();
        }
      }
    }

    function resetTimer() {`;

html = html.replace(scriptAddRegex, newScriptPart);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully integrated reel-video.mp4 with audio toggle into Hero Carousel!');
