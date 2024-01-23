export default function Page({ params }: { params: { slug: string } }) {
  return <h1>This will redirect to slug {params.slug}</h1>;
}
