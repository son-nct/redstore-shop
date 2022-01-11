class HomeIntroComponent {
    $container;
    $column1;
    $column2;
    $title;
    $content;
    $image;
    $anchor

    constructor(title,content,imageLink, btnContent) {
        this.$container = document.createElement('div');
        this.$container.classList.add('row');

        // column 1
        this.$column1 = document.createElement('div');
        this.$column1.classList.add('col-2');

        this.$title = document.createElement('h1');
        this.$title.innerHTML =  title;

        this.$content = document.createElement('p');
        this.$content.innerHTML = content;

        this.$anchor = document.createElement('a');
        this.$anchor.classList.add('btn');
        this.$anchor.href = "";
        this.$anchor.innerHTML = btnContent;

        this.$column1.appendChild(this.$title);
        this.$column1.appendChild(this.$content);
        this.$column1.appendChild(this.$anchor);
        

         // column 2
        this.$column2 = document.createElement('div');
        this.$column2.classList.add('col-2');

        this.$image = document.createElement('img');
        this.$image.src = imageLink;
        this.$column2.appendChild(this.$image);

        

       
    }

    render() {
        this.$container.appendChild(this.$column1);
        this.$container.appendChild(this.$column2);

        return this.$container;
    }
}

export {HomeIntroComponent}