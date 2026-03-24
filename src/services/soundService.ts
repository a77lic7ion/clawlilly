/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

class SoundService {
  private sounds: Record<string, HTMLAudioElement> = {};
  private enabled: boolean = true;

  constructor() {
    this.loadSound('move', 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'); // Mechanical hum
    this.loadSound('capture', 'https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3'); // Success ding
    // this.loadSound('click', 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'); // Click
    this.loadSound('click', 'https://www.soundjay.com/buttons/sounds/button-16.mp3'); // Click
    this.loadSound('drop', 'https://assets.mixkit.co/active_storage/sfx/2578/2578-preview.mp3'); // Drop sound
  }

  private loadSound(name: string, url: string) {
    const audio = new Audio(url);
    audio.preload = 'auto';
    this.sounds[name] = audio;
  }

  play(name: string, loop: boolean = false, volume: number = 0.5) {
    if (!this.enabled) return;
    const sound = this.sounds[name];
    if (sound) {
      if (loop) {
        sound.loop = true;
        if (sound.paused) {
          sound.volume = volume;
          sound.play().catch(() => {});
        }
      } else {
        const clone = sound.cloneNode() as HTMLAudioElement;
        clone.volume = volume;
        clone.play().catch(() => {});
      }
    }
  }

  stop(name: string) {
    const sound = this.sounds[name];
    if (sound) {
      sound.pause();
      sound.currentTime = 0;
    }
  }

  toggle(val: boolean) {
    this.enabled = val;
    if (!val) {
      Object.values(this.sounds).forEach(s => {
        s.pause();
        s.currentTime = 0;
      });
    }
  }
}

export const soundService = new SoundService();
