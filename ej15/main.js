let arrVisible = []
let arrEmojis = ['🎟', '🎠', '🎭', '🥽', '🎐', '🎏', '🎋', '🖼', '🎞', '🥼', '👔', '🎈', '🎉', '✨',
'🎟', '🎠', '🎭', '🥽', '🎐', '🎏', '🎋', '🖼', '🎞', '🥼', '👔', '🎈', '🎉', '✨']
let updateArr = ()=>{
    document.getElementById('array').innerHTML = arrVisible
}
function getIndexI() {
    return document.getElementById('insertI').value
}
function getIndexR() {
    return document.getElementById('removeI').value
}

// inserts
function push() {
    arrVisible.push(arrEmojis.shift())
    updateArr()
}
function unshift() {
    arrVisible.unshift(arrEmojis.shift())
    updateArr()
}
function insert() {
    arrVisible.splice(getIndexI(), 0, arrEmojis.shift())
    updateArr()
}

// removes
function pop() {
    arrEmojis.push(arrVisible.pop())
    updateArr()
}
function shift() {
    arrEmojis.push(arrVisible.shift())
    updateArr()
}
function remove() {
    arrVisible.splice(getIndexR(), 1)
    updateArr()
}
