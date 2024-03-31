const sillyFace = document.getElementById('silly-face');
const faceDescription = document.getElementById('face-description');
const loveMessage = document.getElementById('love-message');
const sameFaceMessage = document.getElementById('same-face-message');
const catMessage = document.getElementById('cat-message');
let previousFace = '';

function changeFace() {
    const faces = [
        { face: ':P', description: '(tongue out)' },
        { face: ':D', description: '(big happy :D)' },
        { face: ';)', description: '(winking)' },
        { face: '>:3', description: '(mischievous)' },
        { face: 'XD', description: '(laughing)' },
        { face: 'O_O', description: '(surprised)' },
        { face: '^_^', description: '(happy)' },
        { face: '>.<', description: '(frustration)' },
        { face: ':3', description: '(cat smile)' },
        { face: 'o.o', description: '(curious)' },
        { face: '>.>', description: '(sneaky)' },
        { face: '<3', description: '(love)' },
        { face: ':O', description: '(surprise)' },
        { face: '>_<', description: '(disappointment)' },
        { face: ':|', description: '(indifference)' },
        { face: ':*', description: '(kiss)' },
        { face: 'B)', description: '(cool)' },
        { face: ':S', description: '(awkward)' },
        { face: ':$', description: '(shy)' },
        { face: ':/', description: '(confused)' },
        { face: ':!', description: '(exasperation)' },
        { face: ';(', description: '(crying)' },
        { face: 'O_0', description: '(confusion)' },
        { face: ':B', description: '(smirk)' },
        { face: ':^)', description: '(smile)' },
        { face: '0w0', description: '(cute surprise)' },
        { face: '>w<', description: '(excited)' },
        { face: 'o3o', description: '(curiosity overload)' },
        { face: 'X3', description: '(playful)' },
        { face: ':9', description: '(yum)' },
        { face: 'B3', description: '(cheeky)' },
        { face: '>.<"', description: '(embarrassed)' },
        { face: 'XD', description: '(laughing hard)' },
        { face: '>.<;;', description: '(blushing)' },
        { face: ':B', description: '(wink with a smirk)' },
        { face: ';3', description: '(flirty wink)' },
        { face: ':o', description: '(wide-eyed)' },
        { face: ':3c', description: '(smiling shyly)' },
        { face: ':U', description: '(confused)' },
        { face: '8D', description: '(excited)' },
        { face: 'QwQ', description: '(crying heavily)' },
        { face: ':X', description: '(silence)' },
        { face: 'T_T', description: '(tears)' },
        { face: 'xD', description: '(laughing with eyes closed)' },
        { face: 'o_o', description: '(surprise or confusion)' },
        { face: ':D :D :D', description: '(extreme happiness)' }
    ]; // Array of faces
    const randomIndex = Math.floor(Math.random() * faces.length);
    const selectedFace = faces[randomIndex];

    if (selectedFace.face === previousFace) {
        sameFaceMessage.style.opacity = 1;
        setTimeout(() => {
            sameFaceMessage.style.opacity = 0;
        }, 3000);
    } else {
        sameFaceMessage.style.opacity = 0;
    }

    if ([':3', ';3', '>:3', 'X3'].includes(selectedFace.face)) {
        catMessage.textContent = 'woah, you got a kitty cat!';
        catMessage.style.opacity = 1;
        setTimeout(() => {
            catMessage.style.opacity = 0;
        }, 3000);
    } else {
        catMessage.style.opacity = 0;
    }

    if (selectedFace.face === '<3') {
        loveMessage.style.opacity = 1;
        setTimeout(() => {
            loveMessage.style.opacity = 0;
        }, 3000);
    } else {
        loveMessage.style.opacity = 0;
    }

    sillyFace.textContent = selectedFace.face;
    faceDescription.textContent = selectedFace.description;

    previousFace = selectedFace.face;
}

document.addEventListener('click', changeFace);
