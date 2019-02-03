 export class ErrorResponseDto<T> {
    readonly success: boolean;
    readonly message: string;
    readonly payload: T;

    constructor(obj: ErrorResponseDto<any> | any = {}) {
      this.success = obj.success;
      this.message = obj.message;
      this.payload = obj.payload;
    }
 }
