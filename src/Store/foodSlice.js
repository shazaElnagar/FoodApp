import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const DUMMY_FOODS = [
  {
    id: '1',
    title: 'Primavera Pizza',
    weight: '540 gr',
    rating: '5.0',
    price: '$5.99',
    size: 'Medium 14"',
    crust: 'Thin Crust',
    deliveryTime: '30 min',
    image: require('../../assets/pizza1.png'),
    isTopOfTheWeek: true,
    ingredients: [
      { id: '1', image: require('../../assets/ham.png') },
      { id: '2', image: require('../../assets/tomato.png') },
      { id: '3', image: require('../../assets/cheese.png') },
      { id: '4', image: require('../../assets/garlic.png') },
    ],
  },
  {
    id: '2',
    title: 'Vegetarian Pizza',
    weight: '450 gr',
    rating: '4.8',
    price: '$9.99',
    size: 'Large 16"',
    crust: 'Thick Crust',
    deliveryTime: '40 min',
    image: require('../../assets/pizza2.png'),
    isTopOfTheWeek: false,
    ingredients: [
      { id: '1', image: require('../../assets/tomato.png') },
      { id: '2', image: require('../../assets/cheese.png') },
      { id: '3', image: require('../../assets/garlic.png') },
    ],
  },
  {
    id: '3',
    title: 'Pepperoni Pizza',
    weight: '700 gr',
    rating: '4.7',
    price: '$12.99',
    size: 'Large 16"',
    crust: 'Thin Crust',
    deliveryTime: '20 min',
    image: require('../../assets/pizza3.png'),
    isTopOfTheWeek: false,
    ingredients: [
      { id: '1', image: require('../../assets/ham.png') },
      { id: '2', image: require('../../assets/cheese.png') },
    ],
  },
];

export const fetchFoods = createAsyncThunk('food/fetchFoods', async () => {
  try {
    const response = await axios.get('https://dummyjson.com/recipes?limit=3');
    const localPizzas = [
      require('../../assets/pizza1.png'),
      require('../../assets/pizza2.png'),
      require('../../assets/pizza3.png'),
    ];

    return response.data.recipes.map((item, index) => ({
      id: item.id.toString(),
      title: item.name,
      weight: `${item.caloriesPerServing * 2} gr`,
      rating: item.rating.toFixed(1),
      price: `$${(item.prepTimeMinutes * 0.2 + 4.99).toFixed(2)}`,
      size: 'Medium 14"',
      crust: 'Thin Crust',
      deliveryTime: `${item.cookTimeMinutes} min`,
      image: localPizzas[index % 3],
      isTopOfTheWeek: index === 0,
      ingredients: [
        { id: '1', image: require('../../assets/ham.png') },
        { id: '2', image: require('../../assets/tomato.png') },
        { id: '3', image: require('../../assets/cheese.png') },
        { id: '4', image: require('../../assets/garlic.png') },
      ],
    }));
  } catch (error) {
    return DUMMY_FOODS;
  }
});

const foodSlice = createSlice({
  name: 'food',
  initialState: {
    items: DUMMY_FOODS,
    selectedCategory: 'Pizza',
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoods.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFoods.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload && action.payload.length > 0) {
          state.items = action.payload;
        }
      })
      .addCase(fetchFoods.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSelectedCategory } = foodSlice.actions;
export default foodSlice.reducer;