const express = require("express");
const app = express();
const port = 3000;

const {
  fetAllAsseccoriesDetails,
  fetAllAsseccoriesById,
  fetAllAsseccoriesByBrand,
  fetAllAsseccoriesMaxPrice,
  fetAllAsseccoriesLessPrice,
  fetAllAsseccoriesRating,
  fetAllAsseccoriesStorage,
  calculateStockPrice,
  fetMobileColorVariants,
  updateMobileByid,
  deleteMobilesById
} = require("./controllers/mobile.controller");

app.use(express.json());




// getting all asseccories 👍
app.get("/api/mobiles", async (req, res) => {
  try {
    let ratelimit = req.query.ratelimit

    const mobiles = await fetAllAsseccoriesDetails();
    if (mobiles) {
      res.status(200).json(mobiles);
    } else {
      res.status(404).json({ message: "Mobile Asseccories not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// get asseccesories by id
app.get("/api/mobiles/id/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const mobile = await fetAllAsseccoriesById(id);
    if (mobile) {
      res.status(200).json(mobile);
    } else {
      res.status(404).json({ message: "Mobile Asseccories not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// filter by brand asseccesoris
app.get("/api/mobiles/brand/:brand", async (req, res) => {
  try {
    const brand = req.params.brand;
    const mobiles = await fetAllAsseccoriesByBrand(brand);
    if (mobiles && Array.isArray(mobiles)) {
      res.status(200).json(mobiles);
    } else {
      res.status(404).json({ message: "Mobile Asseccories not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// filter price asseccesoris greater than
app.get('/api/mobiles/max_price/:price', async (req, res) => {
  try {
    let max_price = req.params.price
    let response = await fetAllAsseccoriesMaxPrice(max_price)
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(404).json({ message: "Mobile Max Price not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
})


// filter price asseccesoris less than
app.get('/api/mobiles/less_price/:price', async (req, res) => {
  try {
    let less_price = req.params.price
    let response = await fetAllAsseccoriesLessPrice(less_price)
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(404).json({ message: "Mobile Less Price not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })
  }
})

// mobile asseccories by rating

app.get('/api/mobile/ratings/:rating', async (req, res) => {
  try {
    let rating = req.params.rating
    let response = await fetAllAsseccoriesRating(rating)
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(404).json({ message: "Mobile Rating not found" })
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" })

  }
})


// finde storage capacity
app.get('/api/mobiles/storage/:storage', async (req, res) => {
  try {
    let storage = req.params.storage
    let response = await fetAllAsseccoriesStorage(storage)
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(404).json({ message: "Mobile Storage not found" })
    }

  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error })
  }
})

// calculate stock by price
app.get('/api/mobile/stock_price/:id', async (req, res) => {
  try {
    let id = parseInt(req.params.id)
    let response = await calculateStockPrice(id)
    res.status(200).json({ message: `total stock price ${response}` })

  } catch (error) {
    res.status(500).json({ message: error.message })

  }
})

// get all mobiles by colors variants
app.get('/api/mobile/color_variant/:color', async (req, res) => {
  try {
    let color = req.params.color;
    let response = fetMobileColorVariants(color)
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(404).json({ message: 'color not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


// update by given id
app.post('/api/mobile/brand/:id', async (req, res) => {
  try {
    let id = parseInt(req.params.id)
    let brand = req.body
    let response = await updateMobileByid(id, brand)
    if (response) {
      res.status(200).json({ message: 'successfully', response })
    } else {
      res.status(404).json({ message: 'id not found for the brand' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


// delete mobiles by id

app.post('/api/mobiles/delete/id/:id', async (req, res) => {
  try {
    let id = parseInt(req.params.id)
    let response = await deleteMobilesById(id)
    if (response) {
      res.status(200).json({message : 'mobile id delete successfully ', response})
    } else {
      res.status(404).json({ message: 'id not found' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })

  }
})


module.exports = { app, port };
