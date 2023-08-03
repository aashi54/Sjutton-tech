function handleRating(event) {
  const stars = document.querySelectorAll(".star");
  const rating = parseInt(event.target.dataset.rating);

  stars.forEach((star, index) => {
    if (index < rating) {
      star.classList.add("active");
    } else {
      star.classList.remove("active");
    }
  });
}

function submitFeedback() {
  const rating = document.querySelectorAll(".star.active").length;
  const comments = document.getElementById("comments").value;
  const anonymous = document.getElementById("anonymous").checked;
  const userInfo = anonymous ? "Anonymous" : document.getElementById("username").value;

  if (!rating || !comments.trim()) {
    alert("Please provide a rating and comments.");
    return;
  }

  const feedbackData = {
    rating: rating,
    comments: comments,
    userInfo: userInfo,
  };

  const existingFeedback = JSON.parse(localStorage.getItem("feedbacks")) || [];
  existingFeedback.push(feedbackData);
  localStorage.setItem("feedbacks", JSON.stringify(existingFeedback));
  alert("Thank you for your feedback!");
}


