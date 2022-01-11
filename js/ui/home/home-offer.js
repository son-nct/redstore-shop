class OfferComponent {
    $container;
    $row;
    $img;
    $buyNow

    constructor(imgLink, content, title, description) {
        this.$container = document.createElement('div');
        this.$container.classList.add('small-container');

        this.$row = document.createElement('div');
        this.$row.classList.add('row');

        this.$img = document.createElement('img');
        this.$img.classList.add('offer-img');
        this.$img.src = imgLink;

        let col_1 = document.createElement('div');
        col_1.classList.add("col-2");

        col_1.appendChild(this.$img);

        let col_2 = document.createElement('div');
        col_2.classList.add("col-2");

        let p = document.createElement('p');
        p.innerHTML = content;

        let h1 = document.createElement('h1');
        h1.innerHTML = title;

        let small = document.createElement('small');
        small.innerHTML = description;

        this.$buyNow = document.createElement('a');
        this.$buyNow.classList.add('btn');
        this.$buyNow.innerHTML = 'Buy Now &#8594';
        this.$buyNow.href = '#';


        col_2.appendChild(p);
        col_2.appendChild(h1);
        col_2.appendChild(small);
        col_2.appendChild(this.$buyNow);

        this.$row.appendChild(col_1);
        this.$row.appendChild(col_2);

    }

    render() {
        this.$container.appendChild(this.$row);
        return this.$container;
    }
}

export { OfferComponent }