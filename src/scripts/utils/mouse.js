// Return the mouse position
export const getMousePosition = ({
    changedTouches,
    clientX,
    clientY,
}) => {
    return {
        x: changedTouches ? changedTouches[0].clientX : clientX,
        y: changedTouches ? changedTouches[0].clientY : clientY,
    }
}
