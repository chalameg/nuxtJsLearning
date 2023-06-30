export const useUtils = () => {
    const sayHello = () => {
        console.log("Say hello!")
    }

    return {
        sayHello,
    }
}