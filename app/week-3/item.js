export default function Item({ name, quantity, category }) {
  const categoryLabel = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : "";

  return (
    <li className="border border-white/20 rounded-md p-4 mb-4">
      <p className="text-xl font-semibold">{name}</p>
      <p className="mt-2">Quantity: {quantity}</p>
      <p>Category: {categoryLabel}</p>
    </li>
  );
}
