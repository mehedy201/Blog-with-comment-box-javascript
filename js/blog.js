document.getElementById('submit-button').addEventListener('click', function(){
    const commentBox = document.getElementById('comment-box');
    const commentText = document.createElement('p')
    commentText.innerText = commentBox.value;
    const commentDiv = document.getElementById('comment-div');
    commentDiv.appendChild(commentText);
    commentBox.value = '';
});