export default function ClaudeRecipe() {
    return (
        <section className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-600">
                👨‍🍳 Chef Claude Recommends
            </h2>

            <article
                className="bg-orange-50 border border-orange-200 rounded-2xl p-6 space-y-4 text-gray-800"
                aria-live="polite"
            >
                <p>
                    Based on the ingredients you have available, I would recommend
                    making a simple and delicious{" "}
                    <strong className="text-orange-700">
                        Beef Bolognese Pasta
                    </strong>.
                    Here is the recipe:
                </p>

                <h3 className="text-xl font-semibold text-gray-900">
                    🍝 Beef Bolognese Pasta
                </h3>

                {/* Ingredients */}
                <div>
                    <strong className="block mb-2">Ingredients:</strong>
                    <ul className="list-disc list-inside space-y-1">
                        <li>1 lb. ground beef</li>
                        <li>1 onion, diced</li>
                        <li>3 cloves garlic, minced</li>
                        <li>2 tablespoons tomato paste</li>
                        <li>1 (28 oz) can crushed tomatoes</li>
                        <li>1 cup beef broth</li>
                        <li>1 teaspoon dried oregano</li>
                        <li>1 teaspoon dried basil</li>
                        <li>Salt and pepper to taste</li>
                        <li>8 oz pasta (spaghetti, penne, or linguine)</li>
                    </ul>
                </div>

                {/* Instructions */}
                <div>
                    <strong className="block mb-2">Instructions:</strong>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Bring a large pot of salted water to a boil.</li>
                        <li>Cook the ground beef over medium-high heat until browned.</li>
                        <li>Add onion and garlic; cook until soft.</li>
                        <li>Stir in tomato paste and cook for 1 minute.</li>
                        <li>Add tomatoes, broth, oregano, and basil. Season to taste.</li>
                        <li>Simmer on low heat for 15–20 minutes.</li>
                        <li>Cook pasta according to package instructions.</li>
                        <li>Toss pasta with the Bolognese sauce.</li>
                        <li>
                            Serve hot with fresh basil or grated Parmesan if desired.
                        </li>
                    </ol>
                </div>
            </article>
        </section>
    )
}