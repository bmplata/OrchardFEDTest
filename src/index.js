import './styles.css';
import 'jquery';
import 'bootstrap'; 


// View image
export function openModal(imageSrc) {
    $('#modalImage').attr('src', imageSrc); // Set the image source using jQuery
    $('#imageModal').modal('show'); // Show the modal using jQuery
}

// Function to handle image click
export function handleImageClick(image) {
    $(image).addClass('animate__animated'); // Add animation class using jQuery
    // Remove animation class after animation completes
    setTimeout(() => {
        $(image).removeClass('animate__animated');
    }, 1000); 
}

// Function to handle link click
export function handleLinkClick(link) {
    console.log(link); // Log the clicked link to console
    $(link).addClass('animate__animated animate__fadeIn'); // Add animation classes using jQuery
    // Remove animation class after animation completes
    setTimeout(() => {
        $(link).removeClass('animate__animated animate__fadeIn');
    }, 1000); 
}

// Attach event listeners
$(document).ready(function() {
    $('.img-fluid').on('click', function() {
        openModal($(this).attr('src'));
    });

    $('.img-fluid').on('click', function() {
        handleImageClick(this);
    });

    $('.animateOnClick').on('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        handleLinkClick(this);
    });
});
