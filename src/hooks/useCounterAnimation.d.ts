interface UseCounterAnimationOptions {
    start?: number;
    end: number;
    duration?: number;
    isVisible: boolean;
}
export declare const useCounterAnimation: ({ start, end, duration, isVisible, }: UseCounterAnimationOptions) => number;
export {};
