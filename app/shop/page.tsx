import ShopClient from "./ShopClient";

type Props = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function ShopPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <ShopClient
      initialCategory={params.category ?? "all"}
    />
  );
}