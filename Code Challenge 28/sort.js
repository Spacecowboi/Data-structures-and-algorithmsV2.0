'use strict';

function sortByTitle(movies){
    const removeCP = (title) => {
        const commonPrefix = ["A", "An", "The "];
        for (const prefix of commonPrefix) {
            if(title.startsWith(prefix)) {
                title = title.slice(prefix.length);
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