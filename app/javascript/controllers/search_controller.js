import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search"
export default class extends Controller {
  static targets = ["title", "content"];

  connect() {
    console.log("Stimulus search controller: connected", this.element);
  }

  filterPosts(event) {
    const searchTerm = event.target.value.toLowerCase();

    this.titleTargets.forEach((title) => {
      const postContent = title.nextElementSibling.textContent.toLowerCase();
      const postTitle = title.textContent.toLowerCase();

      if (postContent.includes(searchTerm) || postTitle.includes(searchTerm)) {
        title.parentElement.style.display = "";
      } else {
        title.parentElement.style.display = "none";
      }
    });
  }
}
