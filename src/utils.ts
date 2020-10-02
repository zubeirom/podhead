export const generateId = (): number => {
    return (Math.floor(Math.random() * 100000) + 10000);
}