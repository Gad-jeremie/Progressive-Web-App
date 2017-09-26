var shareImageButton = document.querySelector('#share-image-button');
var createPostArea = document.querySelector('#create-post');
var closeCreatePostModalButton = document.querySelector('#close-create-post-modal-btn');

function openCreatePostModal() {
    createPostArea.style.display = 'block';

    //Check if Chrome fired the event to add app tp homescreen
    if (defferedPrompt) {
        //If yes, prompt the user to add app to home screen
        defferedPrompt.prompt();

        //Capture the user response
        defferedPrompt.userChoice.then((choiceResult) => {
            console.log(choiceResult.outcome);

            if (choiceResult.outcome === 'dismissed') {
                console.log('User did not add app to home screen');
            } else {
                console.log('User added app to home screen');
            }
        });
    }
}

function closeCreatePostModal() {
    createPostArea.style.display = 'none';
}

shareImageButton.addEventListener('click', openCreatePostModal);

closeCreatePostModalButton.addEventListener('click', closeCreatePostModal);