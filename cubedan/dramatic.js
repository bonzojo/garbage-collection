class BouncingImage {
    constructor(imageId, velocityX, velocityY) {
        this.image = document.getElementById(imageId);
        this.x = Math.random() * (window.innerWidth - this.image.offsetWidth);
        this.y = Math.random() * (window.innerHeight - this.image.offsetHeight);
        this.vx = velocityX;
        this.vy = velocityY;
        this.audioB = new Audio('./bubble.mp3');
        this.audioA = new Audio('./pop.mp3');
    }

    updatePosition() {
        const imageWidth = this.image.offsetWidth;
        const imageHeight = this.image.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        this.x += this.vx;
        this.y += this.vy;

        // Check for collision with the walls and reverse direction if necessary
        if (this.x + imageWidth > windowWidth || this.x < 0) {
            this.vx = -this.vx;
            this.audioA.play();
        }
        if (this.y + imageHeight > windowHeight || this.y < 0) {
            this.vy = -this.vy;
            this.audioB.play();
        }

        // Update the image position
        this.image.style.left = this.x + 'px';
        this.image.style.top = this.y + 'px';
    }
}

const images = [
    new BouncingImage('bouncingImage1', 2.5, 2.5),
    new BouncingImage('bouncingImage2', 3.5, 3.5)
];

function animate() {
    images.forEach(image => image.updatePosition());
    requestAnimationFrame(animate);
}

// Start the animation
animate();
