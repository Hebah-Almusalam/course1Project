
var titlesArr = [];
var discArr = [];
var contentArr = [];

function createBlog(){
let title   = document.createBlogForm.titleInput;
titlesArr.push(title);
let disc    = document.createBlogForm.dicsInput;
discArr.push(disc);
let content = document.createBlogForm.blogContentInput;
contentArr.push(content);


    for (i in titlesArr){
     document.write(titlesArr[i]);   
     document.write(discArr[i]);
     document.write(contentArr[i]);
    }
}