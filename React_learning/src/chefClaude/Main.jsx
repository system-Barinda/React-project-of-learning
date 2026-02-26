import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"

export default function Main() {
    const [ingredients, setIngredients] = React.useState([
        "all the main spices",
        "pasta",
        "ground beef",
        "tomato paste"
    ])
    const [recipeShown, setRecipeShown] = React.useState(false)

    function toggleRecipeShown() {
        setRecipeShown(prev => !prev)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (!newIngredient) return
        setIngredients(prev => [...prev, newIngredient])
    }

    return (
        <main className="min-h-screen bg-gray-50 flex justify-center px-4 py-10">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-md p-6 space-y-6">

                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-orange-600">
                    👨‍🍳 Chef Claude
                </h1>

                {/* Add Ingredient Form */}
                <form
                    action={addIngredient}
                    className="flex gap-2"
                >
                    <input
                        type="text"
                        name="ingredient"
                        placeholder="e.g. oregano"
                        aria-label="Add ingredient"
                        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                    >
                        Add
                    </button>
                </form>

                {/* Ingredients Section */}
                {ingredients.length > 0 && (
                    <section className="space-y-4">
                        <h2 className="text-xl font-semibold">
                            Ingredients on hand:
                        </h2>

                        <ul
                            className="list-disc list-inside space-y-1 text-gray-700"
                            aria-live="polite"
                        >
                            {ingredients.map(item => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        {/* Get Recipe Box */}
                        {ingredients.length > 3 && (
                            <div className="flex items-center justify-between bg-orange-50 border border-orange-200 rounded-xl p-4">
                                <div>
                                    <h3 className="font-semibold text-orange-700">
                                        Ready for a recipe?
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Generate a recipe from your ingredients.
                                    </p>
                                </div>
                                <button
                                    onClick={toggleRecipeShown}
                                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                                >
                                    Get recipe
                                </button>
                            </div>
                        )}
                    </section>
                )}

                {/* Recipe Output */}
                {recipeShown && (
                    <div className="border-t pt-6">
                        <ClaudeRecipe />
                    </div>
                )}
            </div>
        </main>
    )
}