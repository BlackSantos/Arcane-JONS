// script.js

let currentScreen = 1;
let currentEpisode = null;
let choicesMade = {};

// Global callback for modal
let modalOnCloseCallback = null;

// Progress Management
function getHighestUnlockedEpisode() {
    const saved = localStorage.getItem('highestUnlockedEpisode');
    return saved ? parseInt(saved, 10) : 1;
}

function setHighestUnlockedEpisode(episodeNumber) {
    localStorage.setItem('highestUnlockedEpisode', episodeNumber);
}

// Display Scene
function displayScene(screenNumber) {
    const scene = scenes[screenNumber];
    if (!scene) {
        showModal('Coming Soon', displayEpisodeSelection);
        return;
    }

    const dialogueContainer = document.getElementById('dialogue');
    const choicesContainer = document.getElementById('choices');

    dialogueContainer.innerHTML = '';
    choicesContainer.innerHTML = '';

    let shouldFade = false;
    let nextSceneNumber = null;

    scene.dialogues.forEach(line => {
        const fadeCommand = parseFadeCommand(line);
        if (fadeCommand) {
            shouldFade = true;
            nextSceneNumber = fadeCommand;
            return;
        }

        const p = document.createElement('p');
        p.textContent = `${line}`;
        dialogueContainer.appendChild(p);
    });

    if (shouldFade && nextSceneNumber !== null) {
        setTimeout(() => {
            fadeScene(nextSceneNumber);
        }, 500);
        return;
    }

    if (!scene.choices || scene.choices.length === 0) {
        nextScreen(null);
        return;
    }

    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add('choice');
        button.textContent = choice.text;
        button.onclick = () => nextScreen(choice.nextScreen, choice.variableAssignments);
        choicesContainer.appendChild(button);
    });

    dialogueContainer.style.display = 'block';
    choicesContainer.style.display = 'flex';
}

// Parse Fade Command
function parseFadeCommand(line) {
    const fadeRegex = /^call\s+FadeScene\s+(\d+)$/i;
    const match = line.match(fadeRegex);
    if (match && match[1]) {
        return parseInt(match[1], 10);
    }
    return null;
}

// Start New Game
function newGame() {
    const mainMenu = document.getElementById('main-menu');
    mainMenu.style.display = 'none';

    const episodeSelection = document.getElementById('episode-selection');
    episodeSelection.style.display = 'flex';

    displayEpisodeSelection();
}

// Display Episode Selection
function displayEpisodeSelection() {
    const episodeSelection = document.getElementById('episode-selection');
    episodeSelection.innerHTML = '';

    const highestUnlocked = getHighestUnlockedEpisode();

    const rows = [];
    for (let i = 0; i < 3; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('episode-row');
        episodeSelection.appendChild(rowDiv);
        rows.push(rowDiv);
    }

    episodes.forEach((episode, index) => {
        const rowIndex = Math.floor(index / 3);
        if (episode.id > highestUnlocked) {
            const episodeDiv = document.createElement('div');
            episodeDiv.classList.add('episode', 'locked');

            const lockedOverlay = document.createElement('div');
            lockedOverlay.classList.add('locked-overlay');
            lockedOverlay.textContent = 'Locked';
            episodeDiv.appendChild(lockedOverlay);

            const title = document.createElement('h2');
            title.textContent = episode.title;
            episodeDiv.appendChild(title);

            const description = document.createElement('p');
            description.textContent = episode.description;
            episodeDiv.appendChild(description);

            rows[rowIndex].appendChild(episodeDiv);
        } else {
            const episodeDiv = document.createElement('div');
            episodeDiv.classList.add('episode');

            const title = document.createElement('h2');
            title.textContent = episode.title;

            const description = document.createElement('p');
            description.textContent = episode.description;

            episodeDiv.appendChild(title);
            episodeDiv.appendChild(description);
            episodeDiv.onclick = () => startEpisode(episode.id);

            rows[rowIndex].appendChild(episodeDiv);
        }
    });

    episodeSelection.style.display = 'flex';
}

// Fade Scene Transition
function fadeScene(nextSceneNumber) {
    const dialogueContainer = document.getElementById('dialogue');
    const choicesContainer = document.getElementById('choices');

    dialogueContainer.classList.add('text-fade-out');
    choicesContainer.classList.add('text-fade-out');

    setTimeout(() => {
        dialogueContainer.style.display = 'none';
        choicesContainer.style.display = 'none';

        currentScreen = nextSceneNumber;
        displayScene(currentScreen);

        dialogueContainer.style.display = 'block';
        choicesContainer.style.display = 'flex';

        dialogueContainer.classList.remove('text-fade-out');
        choicesContainer.classList.remove('text-fade-out');
        dialogueContainer.classList.add('text-fade-in');
        choicesContainer.classList.add('text-fade-in');

        setTimeout(() => {
            dialogueContainer.classList.remove('text-fade-in');
            choicesContainer.classList.remove('text-fade-in');
        }, 500);
    }, 500);
}

// Start Episode
function startEpisode(episodeId) {
    currentEpisode = episodeId;

    delete window.scenes;

    const oldScript = document.getElementById('scene-script');
    if (oldScript) {
        oldScript.remove();
    }

    const scriptTag = document.createElement('script');
    scriptTag.src = `scenes-${episodeId}.js`;
    scriptTag.id = 'scene-script';
    scriptTag.onload = () => {
        currentScreen = 1;
        displayScene(currentScreen);

        const episodeSelection = document.getElementById('episode-selection');
        episodeSelection.style.display = 'none';

        const pauseTab = document.getElementById('pause-tab');
        pauseTab.style.display = 'block';

        const gameContent = document.getElementById('game-content');
        gameContent.style.display = 'block';
    };
    scriptTag.onerror = () => {
        showModal('Coming Soon', displayEpisodeSelection);
    };
    document.body.appendChild(scriptTag);
}


// Next Screen or End Episode
function nextScreen(screenNumber, variableAssignments = {}) {
    Object.assign(choicesMade, variableAssignments);

    if (screenNumber === null) {
        displayResults();
        return;
    }

    const dialogueContainer = document.getElementById('dialogue');
    const choicesContainer = document.getElementById('choices');

    dialogueContainer.classList.add('fade-out');
    choicesContainer.classList.add('fade-out');

    setTimeout(() => {
        dialogueContainer.classList.remove('fade-out');
        choicesContainer.classList.remove('fade-out');
        displayScene(screenNumber);
        currentScreen = screenNumber;
    }, 500);
}

// Toggle Pause Menu
function togglePauseMenu() {
    const pauseMenu = document.getElementById('pause-menu');
    const gameContent = document.getElementById('game-content');
    const pauseTab = document.getElementById('pause-tab');

    if (pauseMenu.style.display === 'none' || pauseMenu.style.display === '') {
        pauseMenu.style.display = 'flex';
        gameContent.classList.add('blur');
        pauseTab.style.display = 'none';
    } else {
        pauseMenu.style.display = 'none';
        gameContent.classList.remove('blur');
        pauseTab.style.display = 'block';
    }
}

// Show Modal with Optional Callback
function showModal(message, onClose) {
    const modal = document.getElementById('custom-modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    modal.style.display = 'flex';

    const gameContent = document.getElementById('game-content');
    gameContent.classList.add('blur');

    /*
    const pauseMenu = document.getElementById('pause-menu');
    if (pauseMenu && pauseMenu.style.display === 'flex') {
        pauseMenu.style.display = 'none';
    }

    const mainMenu = document.getElementById('main-menu');
    if (mainMenu && mainMenu.style.display === 'flex') {
        mainMenu.style.display = 'none';
    }

    const episodeSelection = document.getElementById('episode-selection');
    if (episodeSelection && episodeSelection.style.display === 'flex') {
        episodeSelection.style.display = 'none';
    }
    */

    // Set the callback
    modalOnCloseCallback = onClose;
}

// Close Modal and Execute Callback
function closeModal() {
    const modal = document.getElementById('custom-modal');
    modal.style.display = 'none';

    const gameContent = document.getElementById('game-content');
    gameContent.classList.remove('blur');

    // Проверяем, находится ли пользователь не в главном меню
    const mainMenu = document.getElementById('main-menu');
    if (!mainMenu || mainMenu.style.display === 'none') {
        const pauseTab = document.getElementById('pause-tab');
        if (pauseTab) {
            pauseTab.style.display = 'block';
        }
    }

    if (typeof modalOnCloseCallback === 'function') {
        modalOnCloseCallback();
        modalOnCloseCallback = null;
    }
}

// Save Game
function saveGame() {
    if (currentEpisode === null || currentScreen === null) {
        showModal('The game has not started yet.');
        return;
    }
    localStorage.setItem('savedEpisode', currentEpisode);
    localStorage.setItem('savedScreen', currentScreen);
    localStorage.setItem('savedChoices', JSON.stringify(choicesMade));
    showModal('Game saved successfully!');
}

// Load Game
function loadGame() {
    const savedEpisode = localStorage.getItem('savedEpisode');
    const savedScreen = localStorage.getItem('savedScreen');
    const savedChoices = localStorage.getItem('savedChoices');

    if (savedEpisode && savedScreen) {
        currentEpisode = parseInt(savedEpisode, 10);
        currentScreen = parseInt(savedScreen, 10);
        choicesMade = savedChoices ? JSON.parse(savedChoices) : {};

        delete window.scenes;

        const oldScript = document.getElementById('scene-script');
        if (oldScript) {
            oldScript.remove();
        }

        const scriptTag = document.createElement('script');
        scriptTag.src = `scenes-${currentEpisode}.js`;
        scriptTag.id = 'scene-script';
        scriptTag.onload = () => {
            if (currentScreen === null) {
                displayResults();
            } else {
                displayScene(currentScreen);
            }

            const mainMenu = document.getElementById('main-menu');
            mainMenu.style.display = 'none';

            const pauseMenu = document.getElementById('pause-menu');
            pauseMenu.style.display = 'none';

            const episodeSelection = document.getElementById('episode-selection');
            episodeSelection.style.display = 'none';

            const pauseTab = document.getElementById('pause-tab');
            pauseTab.style.display = 'block';

            const gameContent = document.getElementById('game-content');
            gameContent.style.display = 'block';

            gameContent.classList.remove('blur');

            showModal('Game loaded successfully!');
        };
        scriptTag.onerror = () => {
            showModal('Coming Soon', displayEpisodeSelection);
        };
        document.body.appendChild(scriptTag);
    } else {
        showModal('No saved game found.');
    }
}
// Toggle Fullscreen
function toggleFullscreen() {
    if (!isFullscreen()) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

// Check Fullscreen Status
function isFullscreen() {
    return window.innerHeight === screen.height && window.innerWidth === screen.width;
}

// Update Fullscreen Checkbox
function updateFullscreenCheckbox() {
    const checkboxMain = document.getElementById('fullscreen-main');
    const checkboxPause = document.getElementById('fullscreen');
    const isFull = isFullscreen();

    if (checkboxMain) {
        checkboxMain.checked = isFull;
    }

    if (checkboxPause) {
        checkboxPause.checked = isFull;
    }
}

// Display Results and Unlock Next Episode
function displayResults() {
    document.getElementById('dialogue').style.display = 'none';
    document.getElementById('choices').style.display = 'none';
    document.getElementById('pause-tab').style.display = 'none';
    document.getElementById('pause-menu').style.display = 'none';

    const resultsScreen = document.getElementById('results-screen');
    const resultsContent = document.getElementById('results-content');

    if (!resultsScreen || !resultsContent) {
        console.error('Results screen element not found in HTML.');
        return;
    }

    resultsContent.innerHTML = '';

    for (const [variable, details] of Object.entries(choicesDescriptions)) {
        if (choicesMade.hasOwnProperty(variable)) {
            const selectedValue = choicesMade[variable];

            const card = document.createElement('div');
            card.classList.add('result-card');

            const title = document.createElement('h2');
            title.textContent = details.title;
            card.appendChild(title);

            const optionsContainer = document.createElement('div');
            optionsContainer.classList.add('options-container');

            const option0 = document.createElement('div');
            option0.classList.add('option-item');

            const checkbox0 = document.createElement('input');
            checkbox0.type = 'checkbox';
            checkbox0.classList.add('custom-checkbox');
            checkbox0.disabled = true;
            checkbox0.checked = selectedValue === 0;

            const label0 = document.createElement('label');
            label0.textContent = details.options["0"];

            option0.appendChild(checkbox0);
            option0.appendChild(label0);

            const option1 = document.createElement('div');
            option1.classList.add('option-item');

            const checkbox1 = document.createElement('input');
            checkbox1.type = 'checkbox';
            checkbox1.classList.add('custom-checkbox');
            checkbox1.disabled = true;
            checkbox1.checked = selectedValue === 1;

            const label1 = document.createElement('label');
            label1.textContent = details.options["1"];

            option1.appendChild(checkbox1);
            option1.appendChild(label1);

            optionsContainer.appendChild(option0);
            optionsContainer.appendChild(option1);

            card.appendChild(optionsContainer);

            resultsContent.appendChild(card);
        }
    }

    // Unlock Next Episode
    const highestUnlocked = getHighestUnlockedEpisode();
    if (currentEpisode >= highestUnlocked) {
        const nextEpisodeNumber = currentEpisode + 1;
        const nextEpisodeExists = episodes.some(ep => ep.id === nextEpisodeNumber);
        if (nextEpisodeExists) {
            setHighestUnlockedEpisode(nextEpisodeNumber);
        }
    }

    resultsScreen.classList.add('fade-in-results');

    resultsScreen.style.display = 'flex';
}

// Return to Main Menu
function returnToMainMenu() {
    // Hide game content
    const gameContent = document.getElementById('game-content');
    if (gameContent) {
        gameContent.style.display = 'none';
        gameContent.classList.remove('blur');
    }

    // Hide pause menu
    const pauseMenu = document.getElementById('pause-menu');
    if (pauseMenu) {
        pauseMenu.style.display = 'none';
    }

    // Hide pause tab
    const pauseTab = document.getElementById('pause-tab');
    if (pauseTab) {
        pauseTab.style.display = 'none';
    }

    // Hide episode selection menu
    const episodeSelection = document.getElementById('episode-selection');
    if (episodeSelection) {
        episodeSelection.style.display = 'none';
    }

    // Hide results screen
    const resultsScreen = document.getElementById('results-screen');
    if (resultsScreen) {
        resultsScreen.style.display = 'none';
    }

    // Hide custom modal if visible
    const customModal = document.getElementById('custom-modal');
    if (customModal) {
        customModal.style.display = 'none';
    }

    // Show main menu
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
        mainMenu.style.display = 'flex';
    }

    // Reset game state variables
    choicesMade = {};
    currentScreen = 1;
    currentEpisode = null;
}

// Initialize Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const returnButton = document.querySelector('#results-screen button');
    if (returnButton) {
        returnButton.onclick = returnToMainMenu;
    }

    const modalCloseButton = document.getElementById('modal-close-button');
    if (modalCloseButton) {
        modalCloseButton.onclick = closeModal;
    }
});

// Reset Progress Functionality
function resetProgress() {
    localStorage.removeItem('highestUnlockedEpisode');
    setHighestUnlockedEpisode(1);
    showModal('Game progress has been reset.', displayEpisodeSelection);
}

const resetButton = document.getElementById('reset-progress-button');
if (resetButton) {
    resetButton.onclick = resetProgress;
}

// Handle Initial Display
window.onload = function() {
    const mainMenu = document.getElementById('main-menu');
    const pauseMenu = document.getElementById('pause-menu');
    const pauseTab = document.getElementById('pause-tab');
    const episodeSelection = document.getElementById('episode-selection');
    const resultsScreen = document.getElementById('results-screen');

    mainMenu.style.display = 'flex';
    pauseMenu.style.display = 'none';
    pauseTab.style.display = 'none';
    episodeSelection.style.display = 'none';
    if (resultsScreen) {
        resultsScreen.style.display = 'none';
    }

    updateFullscreenCheckbox();

    if (!localStorage.getItem('highestUnlockedEpisode')) {
        setHighestUnlockedEpisode(1);
    }

    // displayEpisodeSelection();
};

// Fullscreen Event Listeners
window.addEventListener('resize', updateFullscreenCheckbox);

document.addEventListener('fullscreenchange', updateFullscreenCheckbox);
document.addEventListener('webkitfullscreenchange', updateFullscreenCheckbox);
document.addEventListener('mozfullscreenchange', updateFullscreenCheckbox);
document.addEventListener('MSFullscreenChange', updateFullscreenCheckbox);
