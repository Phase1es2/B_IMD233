$(document).ready(function() {
    // --------- jQuery Data Section ---------
    var book1 = {
        title: "A Thousand Brains: A New Theory of Intelligence",
        author: "Jeff Hawkins"
    };
    var book2 = {
        title: "The Code Breaker: Jennifer Doudna, Gene Editing, and the Future of the Human Race",
        author: "Walter Isaacson"
    };
    var book3 = {
        title: "Klara and the Sun",
        author: "Kazuo Ishiguro"
    };
    var book4 = {
        title: "Hamnet",
        author: "Maggie O’Farrell"
    };
    var book5 = {
        title: "Project Hail Mary",
        author: "Andy Weir"
    };

    var books = new Array;
    books.push(book1);
    books.push(book2);
    books.push(book3);
    books.push(book4);
    books.push(book5);

    var img_ref = {
        url: 'https://media.gatesnotes.com/-/media/Images/Articles/About-Bill-Gates/Holiday-Books-2021/holiday_books_2021_20210827_blog-roll_800x494.ashx',
        src: 'https://gatesnot.es/3lk3sWK',
        alt: 'Bill Gates',
        height: 100, // orig 401 by 4:1
        width: 133 // orig 534 by 4:1  
    };

    var reference = {
            url: 'https://www.gatesnotes.com/About-Bill-Gates/Holiday-Books-2021',
            src: 'https://gatesnot.es/3p8dsDv',
            alt: 'Gates Books',
            text: '5 books I loved reading this year'
        }
        // --------- jQuery Data Section ---------

  

    // --------- jQuery Code Section ---------

    // apply bootstrap list group classes
   $("img").attr(img_ref);

$("a").attr(reference);

$('ol').addClass("list-group");

$('li').addClass("list-group-item");

$('li').each(function (i) {
 // this.innerText = // your code to pull values from the array of objects here
this.innerText = books[i].title +" by "+books[i].author;

});

$('li').each(function (i) {
 // add your row striping code here
if(i%2!=0){

$(this).addClass("even");

}else{

$(this).addClass("odd");

}

});

// --------- jQuery Code Section ---------
});