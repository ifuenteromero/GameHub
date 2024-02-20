export const generateSequence = (n: number) =>
    Array.from({ length: n }, (_, index) => index + 1);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const debounce = <F extends (...args: any[]) => any>(
    func: F,
    delay: number
): ((...args: Parameters<F>) => void) => {
    let timeoutId: ReturnType<typeof setTimeout> | null;

    return (...args: Parameters<F>): void => {
        clearTimeout(timeoutId!);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};
