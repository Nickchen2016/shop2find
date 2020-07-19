
    let productForm = new Vue({
        el: "#input_info",
        data(){
            return {
                form: {
                    id: document.getElementById("variant_id").value,
                    quantity: "1"
                }
            }
        },
        methods: {
            updateCartAmount(){
                axios.get('/cart.js')
                    .then(function(res){
                        document.getElementById("order_num").style.display = "block";
                        document.getElementById("order_num").innerHTML = res.data.item_count;
                    }).catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            },
            addToCart(){
                let ref = this;
                axios.post('/cart/add.js', this.form)
                    .then(function (response) {
                        console.log(response);
                        ref.updateCartAmount();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    })