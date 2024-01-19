const insertBackground = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const backgroundItem = document.querySelector('.backgroundItem');
    const word = backgroundItem.innerHTML;
    const backgroundItemWidth = backgroundItem.getBoundingClientRect().width;
    const backgroundItemHeight = backgroundItem.getBoundingClientRect().height;

    // how many backgroundItems can we fit horizontally and vertically to fit the screen?
    // ceil() to the background fills the entire horizontal width (and vertical height) of the screen
    // overflow will need to be compensated for in the case of rounding up, plus the gaps the css inserts between backgroundRows and items
    const columns = Math.ceil(windowWidth / backgroundItemWidth);
    const rows = Math.ceil(windowHeight / backgroundItemHeight);
    const root = document.querySelector('.backgroundContainer');

    for(let i = 0; i < rows; i++) {
        const backgroundContainerRow = document.createElement('div');
        backgroundContainerRow.classList.add("backgroundContainerRow");

        for(let j = 0; j < columns; j++) {
            // creating this many divs seems unnecessary, can probably create one and resuse it
            const backgroundItem = document.createElement('div');
            backgroundItem.classList.add("backgroundItem");
            backgroundItem.innerText = word;
            
            backgroundContainerRow.appendChild(backgroundItem);
        }

        root.appendChild(backgroundContainerRow);
    }
}

insertBackground();