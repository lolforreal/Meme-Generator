// Memegen.js
const imageUpload = document.getElementById('imageUpload');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const generateMemeBtn = document.getElementById('generateMeme');
const resetFormBtn = document.getElementById('resetForm');
const shareMemeBtn = document.getElementById('shareMeme');
const memeContainer = document.getElementById('memeContainer');

function generateMeme() {
  let imageUrl = imageUpload.value; // Use imageUpload to get the value of the image URL

  // Check if an image file was uploaded
  if (imageUpload.files.length > 0) {
    const file = imageUpload.files[0];
    imageUrl = URL.createObjectURL(file);
  }

  // Validate image URL
  if (!imageUrl) {
    alert('Please enter a valid image URL or upload an image file.');
    return;
  }

  const topText = topTextInput.value;
  const bottomText = bottomTextInput.value;

  // Create meme container
  const memeDiv = document.createElement('div');
  memeDiv.classList.add('meme');

  // Create meme canvas
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');

  // Load image
  const img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Add top text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 30px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(topText, canvas.width / 2, 40);

    // Add bottom text
    ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);

    // Append canvas to meme container
    memeDiv.appendChild(canvas);

    // Add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Meme';
    deleteBtn.addEventListener('click', function() {
      memeContainer.removeChild(memeDiv);
    });
    memeDiv.appendChild(deleteBtn);

    // Append meme container to meme container
    memeContainer.appendChild(memeDiv);
  };
  img.src = imageUrl;
}

function resetForm() {
  // Clear input fields
  imageUpload.value = ''; // Reset file input
  topTextInput.value = '';
  bottomTextInput.value = '';

  // Clear meme container
  memeContainer.innerHTML = '';
}

function shareMeme() {
  // Implement functionality to share meme on social media
  alert('Sharing meme on social media...');
}

// Event listeners
generateMemeBtn.addEventListener('click', generateMeme);
resetFormBtn.addEventListener('click', resetForm);
shareMemeBtn.addEventListener('click', shareMeme);
