interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}
export declare const useScrollAnimation: (options?: UseScrollAnimationOptions) => {
    elementRef: import("react").MutableRefObject<HTMLDivElement>;
    isVisible: boolean;
};
export {};
