class ProductFilterComponent {
    $row;
    $title;

    constructor(listFilter = []) {
        this.$row = document.createElement('div');
        this.$row.classList.add('row','row-2');

        this.$title = document.createElement('h2');
        this.$title.innerHTML = 'All Products';

        let select = document.createElement("select");

        for (let i = 0; i < listFilter.length; i++) {
            let option  = document.createElement("option");
            option.innerHTML = listFilter[i];

            select.appendChild(option);
        }

        this.$row.appendChild(this.$title);
        this.$row.appendChild(select);
    }

    render() {
        return this.$row;
    }
}

export { ProductFilterComponent }