export class ElementState {
  /**
   * Creates an instance of ElementState. This model is used to handle
   * the state of elements on each component.
   * @param {boolean} [startSubmitting] Whether or not the component is
   * submitting on creation (this is often true when you're downloading
   * information immediately)
   * @memberof ElementState
   */
  constructor(startSubmitting?: boolean) {
    this.reset();
    if (startSubmitting) {
      this.submit();
    }
  }

  private _loading = false;

  get loading() {
    return this._loading;
  }

  set loading(loading) {
    this._loading = loading;
  }

  private _loaded = false;

  get loaded() {
    return this._loaded;
  }

  set loaded(loaded) {
    this._loaded = loaded;
    this.wasSuccessful = this.loaded && this.success;
    this.hasFailed = this.loaded && !this.success;
  }

  private _success = false;

  get success() {
    return this._success;
  }

  set success(success) {
    this._success = success;
    this.wasSuccessful = this.loaded && this.success;
    this.hasFailed = this.loaded && !this.success;
  }

  private _hasFailed = false;

  get hasFailed() {
    return this._hasFailed;
  }

  set hasFailed(hasFailed) {
    this._hasFailed = hasFailed;
  }

  private _wasSuccessful = false;

  get wasSuccessful() {
    return this._wasSuccessful;
  }

  set wasSuccessful(wasSuccessful) {
    this._wasSuccessful = wasSuccessful;
  }

  private _errorMessage = '';

  /**
   * Returns the error message if one exists, otherwise it returns an empty
   * string.
   *
   * @returns {string}
   * @memberof ElementState
   */
  get errorMessage() {
    return this._errorMessage;
  }

  set errorMessage(errorMessage: string) {
    this._errorMessage = errorMessage || '';
  }

  private _successMessage = '';

  /**
   * Returns the success message if one exists, otherwise it returns an empty
   * string.
   *
   * @returns {string}
   * @memberof ElementState
   */
  get successMessage() {
    return this._successMessage;
  }

  set successMessage(successMessage: string) {
    this._successMessage = successMessage || '';
  }

  private _errorTrace = [];

  /**
   * Returns the trace if one exists.
   *
   * @returns {string[]}
   * @memberof ElementState
   */
  get errorTrace() {
    return this._errorTrace;
  }

  set errorTrace(errorTrace: string[]) {
    this._errorTrace = errorTrace || [];
  }

  static success(message: string): ElementState {
    const state = new ElementState();
    state.completedSuccess({ message });
    return state;
  }

  static error(error: string): ElementState {
    const state = new ElementState();
    state.completedFailed({ error });
    return state;
  }

  static create(submitting: boolean = false): ElementState {
    return new ElementState(submitting);
  }

  /**
   * Call this function when the element should be loading (is submitting).
   *
   * @memberof ElementState
   */
  submit(): void {
    this.loading = true;
    this.loaded = false;
    this.success = false;
  }

  /**
   * The element has completed successfully.
   *
   * @param {*} [success] The success object, we try to pull out the message
   * but if it doesn't exist then it just stringifies the object.
   * @memberof ElementState
   */
  completedSuccess(success: any = {}): void {
    this.complete(true);
    if (success) {
      this.setSuccess(success);
    }
  }

  /**
   * The submission failed, we set the error message here.
   *
   * @param {*} [error] The error message or object. We try to set the
   * message but if we can't then we stringify the object.
   * @memberof ElementState
   */
  completedFailed(error: any = {}): void {
    this.complete(false);
    this.setError(error);
  }

  /**
   * Sets the state to completed and whether or not it was successful.
   *
   * @param {boolean} success Whether or not the state should be set to
   * successful.
   * @memberof ElementState
   */
  complete(success: boolean): void {
    this.loaded = true;
    this.loading = false;
    this.success = success;
  }

  /**
   * Reset the state of the elemnt.
   *
   * @memberof ElementState
   */
  reset(): void {
    this.loading = false;
    this.loaded = false;
    this.success = false;
    this.clearError();
  }

  /**
   * Effectively resets the state of the element.
   *
   * @memberof ElementState
   */
  clearError(): void {
    this._errorMessage = '';
    this._errorTrace = [];
  }

  /**
   * The method used to extract the error message. This will grow over time
   * as integrations with other APIs grow.
   *
   * @private
   * @param {*} error The error object. This can come from anywhere.
   * @returns {void} Sets the internal error message if it can find it.
   * @memberof ElementState
   */
  private setError(error: any = {}): void {
    if (typeof error === 'string') {
      this.errorMessage = error;
      return;
    }

    if (error.trace) {
      this.errorTrace = error.trace;
    }

    if (error.error) {
      error = error.error;
    }

    if (error.message && error.message !== '') {
      this.errorMessage = error.message;
      return;
    }

    if (error) {
      if (typeof error === 'string') {
        this.errorMessage = error;
      } else {
        this.errorMessage = JSON.stringify(error);
      }
    }
  }

  /**
   * Sets the successful state message if possible.
   *
   * @private
   * @param {*} success The object that states whether or not it was
   * successful.
   * @returns {void} Sets the internal success message if it can find a
   * success message in the object.
   * @memberof ElementState
   */
  private setSuccess(success: any = {}): void {
    if (success.message) {
      this.successMessage = success.message;
      return;
    }
    if (success) {
      this.successMessage = JSON.stringify(success);
      return;
    }
  }
}
