main = document.getElementById("main");

class note {
    constructor({
        title = "nota",
        tags = [],
        content = "",
    })
    {
        this.title = title;
        this.tags = tags;
        this.content = content;
    }

    part1 = "<section class=\"note\"><a><div class=\"note-title-container\"><h1 class=\"note-title\" id=\"note_title\">";
    
    part2 = "</h1><div class=\"note-pin\"><a class=\"a-icon\"><ion-icon class=\"ion-icon\" name=\"pin-outline\"></ion-icon></a></div></div><hr><div class=\"note-tags\">";
    
    part3 = "</div><div class=\"note-content\"><p id=\"note_content\">";
    
    part4 = "</p></div></a></section>";

    tagsOutput = "";

    newNote () {

        this.tags.forEach(tag => {
            this.tagsOutput += "<p class=\"note-tag\">" + tag + "</p>"
            debugger;
        });

        const noteOutput = this.part1 + this.title + this.part2 + this.tagsOutput + this.part3 + this.content + this.part4;
        
        main.innerHTML += noteOutput;
    }
}