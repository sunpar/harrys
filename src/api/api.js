////////////////////////////////////////////
// Fake Order Data
////////////////////////////////////////////

const ORDER_DATA = {
  1: {
    products: [{ id: 1, quantity: 3 }, { id: 2, quantity: 1 }],
    pricing: {
      total: 3500,
      currency: "USD"
    },
    user: {
      name: "Harry"
    }
  }
};

const PRODUCT_DATA = {
  1: {
    id: 1,
    name: "Razor",
    price: 1000,
    imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2036314/razor.jpg"
  },
  2: {
    id: 2,
    name: "Blade",
    price: 500,
    imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/2036314/blade.jpg"
  }
};

////////////////////////////////////////////
// Helper Functions
////////////////////////////////////////////

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const generateResponse = (status, body) => ({
  status,
  body
});

const generateErrorResponse = error => generateResponse(400, { error });
const generateSuccessResponse = data => generateResponse(200, { data });

////////////////////////////////////////////
// API Endpoints
////////////////////////////////////////////

export const fetchOrder = orderId => {
  return sleep(500).then(() => {
    if (!orderId) {
      return Promise.reject(generateErrorResponse("No Order ID was provided."));
    }

    if (!ORDER_DATA[orderId]) {
      return Promise.reject(
        generateErrorResponse("The order for the specified ID does not exist.")
      );
    }

    return Promise.resolve(generateSuccessResponse(ORDER_DATA[orderId]));
  });
};

export const fetchProductsInfo = (productIds = []) => {
  return sleep(500).then(() => {
    if (!Array.isArray(productIds)) {
      return Promise.reject(
        generateErrorResponse("Product IDs must be an array.")
      );
    }

    if (!productIds.length) {
      return Promise.reject(
        generateErrorResponse("No Product IDs were provided.")
      );
    }

    const products = [];
    for (let i = 0; i < productIds.length; i++) {
      let productId = productIds[i];

      if (!PRODUCT_DATA[productId]) {
        return Promise.reject(
          generateErrorResponse(
            "The product for one of the specified IDs does not exist."
          )
        );
      }

      products.push(PRODUCT_DATA[productId]);
    }

    return Promise.resolve(generateSuccessResponse(products));
  });
};
