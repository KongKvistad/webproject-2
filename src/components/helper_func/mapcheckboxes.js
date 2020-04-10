function mapCheckBoxes(state, type) {
    //They told me i could be anything, so i became a JAVASCRIPT GOD
    // KNEEL BEFORE THE TRUE MASTER, FILTHY PEASANT

    let array1 = Object.entries(state);
    
    let res = array1.filter(x => x[1] === true).map(y => y[0])
    
    let final = res.map(item => item.substr(5))

    let data = state.mpData[type]
    
    let match = final.map( y => data.filter(x => x.priorities.hasOwnProperty(y))[0])
    return match
}

export default mapCheckBoxes
            