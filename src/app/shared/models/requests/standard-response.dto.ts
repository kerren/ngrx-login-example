export class StandardResponseDto<T> {
    readonly success: boolean;
    readonly message: string;
    readonly payload: T;

    static create<T>(success: boolean, message: string, payload: T = null): StandardResponseDto<T> {
        return {
            success,
            message,
            payload
        };
    }

    static success<T>(message: string, payload: T = null): StandardResponseDto<T> {
        return StandardResponseDto.create<T>(true, message, payload);
    }

    static failed<T>(message: string, payload: T = null): StandardResponseDto<T> {
        return StandardResponseDto.create<T>(false, message, payload);
    }
}