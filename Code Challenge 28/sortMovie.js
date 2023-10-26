'use strict';

function sortByTitle(movies){
    const removeCP = (title) => {
        const commonPrefix = ["A", "An", "The"];
        for (const prefix of commonPrefix) {
            if(title.toLowerCase().startsWith(prefix.toLowerCase() + " ")) {
                title = title.slice(prefix.length + 1);
                break;
            }
        }
        return title;
    }

    movies.sort((a,b) => {
        const titleA = removeCP(a.title);
        const titleB = removeCP(b.title);
        return titleA.localeCompare(titleB);
    });

    return movies;
}

module.exports = {sortByTitle};