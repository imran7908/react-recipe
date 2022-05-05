import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './components/RecipeTile';

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegan");

  const APP_ID = "375657e0";
  const APP_KEY = "22159a5513616ad3da916f88becabe60";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className='app'>
      <h1>Food Recipe Plaza</h1>
      <form className='searchForm' onSubmit={submit}>
        <input type='text' 
        className='input' 
        placeholder='Enter Ingredient' 
        value={query} onChange={(e) => setQuery(e.target.value)} 
        />
        <input className='submit' type='submit' value='Search' />
        <select className='healthLabel'>
          <option onClick={() => setHealthLabel("vegan")}>vegan</option>
          <option onClick={() => setHealthLabel("vegetarian")}>vegetarian</option>
          <option onClick={() => setHealthLabel("paleo")}>paleo</option>
          <option onClick={() => setHealthLabel("dairy-free")}>dairy-free</option>
          <option onClick={() => setHealthLabel("gluten-free")}>gluten-free</option>
          <option onClick={() => setHealthLabel("wheat-free")}>wheat-free</option>
          <option onClick={() => setHealthLabel("low-sugar")}>low-sugar</option>
          <option onClick={() => setHealthLabel("egg-free")}>egg-free</option>
          <option onClick={() => setHealthLabel("peanut-free")}>peanut-free</option>
          <option onClick={() => setHealthLabel("tree-nut-free")}>tree-nut-free</option>
          <option onClick={() => setHealthLabel("soy-free")}>soy-free</option>
          <option onClick={() => setHealthLabel("fish-free")}>fish-free</option>
          <option onClick={() => setHealthLabel("shellfish-free")}>shellfish-free</option>
        </select>
      </form>

      <div className='recipes'>
        {recipes.map(recipe => {
          return <RecipeTile key={recipe["recipe"]["label"]} recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;
