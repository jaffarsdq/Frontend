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
            
            // creating elements needed
            const productItem = document.createElement("a");
            const cardDiv = document.createElement("div");
            const imgDiv = document.createElement("div");
            const img = document.createElement("img");
            const contentDiv = document.createElement("div");
            const title = document.createElement("h6");
            const price = document.createElement("p");
            const button = document.createElement("btn");
            
            // targetting new page when product Item clicked
            productItem.target = "_blank";
            // adding classList and attributes to the elements
            productItem.classList.add("container", "col-12", "col-sm-6", "col-md-5", "col-lg-4", "col-xl-3", "my-2")
            productItem.href = "Product-details.html";

            cardDiv.classList.add("col-12","p-2","card")

            imgDiv.classList.add("col-12");
            img.classList.add("img-fluid");
            img.src = product.image;
            img.alt = "product image";

            contentDiv.classList.add("col-12", "text-center", "d-flex", "flex-column","mt-2")
            
            button.classList.add("btn","btn-primary")
            button.innerText = 'Product Details'
            price.innerHTML = `&#8377; ${product.price}`; 
            
            // appending child to it's respective parent
            imgDiv.appendChild(img);
            contentDiv.appendChild(title);
            contentDiv.appendChild(price);
            contentDiv.appendChild(button);

            cardDiv.appendChild(imgDiv);
            cardDiv.appendChild(contentDiv);
            productItem.appendChild(cardDiv);

            productList.appendChild(productItem);
            
            // creating a variable to store and process the title
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

        })
    }

    populateProduct();
});