const sneakersData = require('../data/sneakers');

const productsController = {
    allProducts: function(req, res) {
        res.render('./products/all-products', {sneakers: sneakersData});
    },
    editProduct: function(req, res) {
        res.render('./products/editProducts');
    },
    obtenerPorId: (req, res) => {
        const productId = parseInt(req.params.id, 10);
        let productoEncontrado; 

        for (let i = 0; i < sneakersData.length; i++) {
            if ( sneakersData[i].id === productId ) {
                productoEncontrado = sneakersData[i];
            }
        }
        
        if (!productoEncontrado){
            res.status(404).send("No se encuentra el producto");
        } else {
            res.render('./products/product-details',  {
                sneakerEncontrado: productoEncontrado, 
                sneakers: sneakersData
            });
        }

    }
};

module.exports = productsController;