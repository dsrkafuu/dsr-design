/**
 * common loading bar,
 * default threshold is 400ms from median of TBT (https://web.dev/lighthouse-total-blocking-time/),
 * default duration is 5600ms from median of TTI (https://web.dev/interactive/)
 */
class LoadingBar {
  // params
  private _threshold: number;
  private _duration: number;
  private _wrapperId: string;
  private _progessId: string;

  // tools
  private _wrapperNode = document.createElement('div');
  private _progressNode = document.createElement('div');
  private _started = false;
  private _timer: number | null = null;

  /**
   * @param threshold time before showing loading bar
   * @param duration max animated duration of loading bar
   * @param wrapperId id of loading bar wrapper
   * @param progessId id of loading bar progress
   */
  constructor(
    threshold = 400,
    duration = 5600,
    wrapperId = 'dsr-loading-bar',
    progessId = 'dsr-loading-bar-progess'
  ) {
    this._threshold = threshold;
    this._duration = duration;
    this._wrapperId = wrapperId;
    this._progessId = progessId;

    // check if node exists and remove it
    const existNode = document.getElementById(this._wrapperId);
    if (existNode) {
      existNode.remove();
    }

    this._wrapperNode.id = this._wrapperId;
    this._wrapperNode.style.userSelect = 'none';
    this._wrapperNode.style.position = 'fixed';
    this._wrapperNode.style.top = '0';
    this._wrapperNode.style.left = '0';
    this._wrapperNode.style.right = '0';
    this._wrapperNode.style.height = '2px';
    this._wrapperNode.style.zIndex = '999';

    this._progressNode.id = this._progessId;
    this._progressNode.style.position = 'absolute';
    this._progressNode.style.top = '0';
    this._progressNode.style.left = '0';
    this._progressNode.style.height = '100%';
    this._progressNode.style.width = '0';
    this._progressNode.style.backgroundColor = 'var(--color-primary)';
    this._progressNode.style.transition = `width ${this._duration}ms ease-out`;
    this._wrapperNode.appendChild(this._progressNode);
  }

  /**
   * enforce DOM ready for css transition
   */
  private _flushNode() {
    void (this._progressNode.offsetWidth + this._progressNode.clientWidth);
  }

  /**
   * set loading bar progress
   * @param progress progress of loading bar
   */
  private _setProgress(progress: number) {
    if (progress < 0 || progress > 100) {
      return;
    }
    this._flushNode();
    this._progressNode.style.width = `${progress}${progress === 0 ? '' : '%'}`;
  }

  /**
   * start loading bar,
   * if loading bar is already started, reset it
   */
  start() {
    this._started = true;
    this._setProgress(0);
    // wait for threshold time
    this._timer = setTimeout(() => {
      document.body.appendChild(this._wrapperNode);
      this._setProgress(90);
      this._timer = null;
    }, this._threshold);
  }

  /**
   * end loading bar,
   * if loading bar is not started, do nothing
   */
  end() {
    if (!this._started) {
      return;
    }
    // if within threshold time, do not show loading bar
    if (this._timer) {
      clearTimeout(this._timer);
      this._timer = null;
      this._started = false;
      return;
    }
    // end the bar fastly
    const fastDuration = 500;
    this._progressNode.style.transition = `width ${fastDuration}ms ease-out`;
    this._setProgress(100);
    // clear bar after animation ends
    setTimeout(() => {
      this._wrapperNode.remove();
      this._started = false;
      this._progressNode.style.transition = `width ${this._duration}ms ease-out`;
    }, fastDuration);
  }
}

export default LoadingBar;
