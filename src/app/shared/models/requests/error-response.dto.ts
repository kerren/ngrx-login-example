 export class ErrorResponseDto<T> {
    readonly success: boolean;
    readonly message: string;
    readonly payload: T;
 }
