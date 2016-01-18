const {cos, sin} = Math
export default ({r, theta}) => ({x: r * cos(theta), y: r * sin(theta)})
