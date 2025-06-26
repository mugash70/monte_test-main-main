<script setup lang="ts">

</script>

<template>
  <div class="video-card">
    <video 
      src="/company-profile.mp4" 
      class="video-content" 
      controls
    ></video>

    <div class="play-overlay">
      <button class="play-button">
        <svg width="40" height="40" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="38" fill="rgba(255,255,255,0.2)" stroke="#fff" stroke-width="2"/>
          <path d="M32 24L56 40L32 56V24Z" fill="#fff"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.video-card {
  position: relative;
  border-radius: 1rem;
  height: 300px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.video-card:hover {
  transform: scale(1.03);
}

.video-content {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}


.play-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.video-card:hover .play-overlay {
  opacity: 1;
}

.play-button {
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.play-button:hover {
  background-color: white;
}
</style>
