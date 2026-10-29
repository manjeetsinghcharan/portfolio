// Sound effects disabled per user preference
class SoundFX {
  public enabled: boolean = false;
  public playClick() {}
  public playItemPop() {}
  public playAdvancement() {}
  public playCraftSuccess() {}
}

export const sound = new SoundFX();
