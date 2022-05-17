/*
Kata Description

Johnny is working as an intern for a publishing company, and was tasked with cleaning up old code. He is working on a program that determines how many digits are in all of the page numbers in a book with pages from 1 to n (inclusive).

For example, a book with 4 pages has 4 digits (one for each page) while a 12-page book has 15 (9 for 1-9, plus 2 each for 10, 11, 12).

Johnny's boss, looking to futureproof, demanded that the new program be able to handle books up to 400,000,000,000,000,000 pages.
*/

function pageDigits(pages) {
     let number_of_digits = BigInt(0);
 
 
    for(var i = 1; i <= pages; i *= 10)
        number_of_digits += (pages - BigInt(i) + BigInt(1));
 
    return number_of_digits;
}
