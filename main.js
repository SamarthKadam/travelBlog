// $(document).ready(function () {
//     $("#toggleIcon").click(function() {
//         $("ul").toggleClass("show")
//     });
// });


const blogBox = document.querySelector(".blog_section_box");
console.log(blogBox);

const save = () => {
    const blogData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        date: document.getElementById("date").value,
        placeName: document.getElementById("placename").value,
        discription: document.getElementById("description").value
    };
    console.log(blogData);
};
