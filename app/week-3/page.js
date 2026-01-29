import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-xl p-6">
        <h1 className="mb-6 text-3xl font-bold">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
