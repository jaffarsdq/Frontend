document.addEventListener("DOMContentLoaded",() =>{
    async function fetchProducts() {
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log(response.data);
        return response.data;
    }

    async function populateProduct() {
        const products = await fetchProducts();
        products.forEach(product => {
            const productList = document.getElementById("product-list")
            const productItem = document.createElement("a");
            productItem.target = "_blank";
            productItem.classList.add("container", "col-12", "col-sm-6", "col-md-5", "col-lg-4", "col-xl-3", "my-2")
            productItem.href = "Product-details.html";
            
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("col-12","p-2","card")

            const imgDiv = document.createElement("div");
            imgDiv.classList.add("col-12");

            const img = document.createElement("img");
            img.classList.add("img-fluid");
            img.src = product.image;
            img.alt = "product image";

            imgDiv.appendChild(img);

            const contentDiv = document.createElement("div");
            contentDiv.classList.add("col-12", "text-center", "d-flex", "flex-column","mt-2")

            const title = document.createElement("h6");
            
            const titleToShrink = product.title;

            //funtion to shrink if the length of the title has more than 18 characters
            function shrink (tit) {
                let result = "";
                if(tit.length > 18) {
                    result = tit.substring(0,18) + '...';
                } else {
                    result = tit;
                }
                return result;
            }

            title.innerText = shrink(titleToShrink);


            const price = document.createElement("p");
            price.innerHTML = `&#8377; ${product.price}`; 

            const button = document.createElement("btn");
            button.classList.add("btn","btn-primary")
            button.innerText = 'Product Details'

            contentDiv.appendChild(title);
            contentDiv.appendChild(price);
            contentDiv.appendChild(button);

            cardDiv.appendChild(imgDiv);
            cardDiv.appendChild(contentDiv);
            productItem.appendChild(cardDiv);

            productList.appendChild(productItem);

        })
    }

    populateProduct();
});