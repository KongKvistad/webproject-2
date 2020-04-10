function injectPrio(inp, type, internPrio, projPrio, setSave) {
    if (type === "internships") {
        if (internPrio.filter(x => x.id === inp.id).length !== 0) {
            alert(type + "-priorities already includes " + inp.name)
            
        } else {
            setSave(true)
            return internPrio.length > 2 ? (internPrio.pop(), internPrio.unshift(inp)) : internPrio.unshift(inp)
        }

    } else {
        if (projPrio.filter(x => x.id === inp.id).length !== 0) {
            alert(type + "-priorities already includes " + inp.name)
            
        } else {
            setSave(true)
            return projPrio.length > 2 ? (projPrio.pop(), projPrio.unshift(inp)) : projPrio.unshift(inp)
            
        }
    }
}
export default injectPrio
