type Params = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Params) {
  return <>
    <h1>Slug: {params.slug}</h1>
    <p>Hole Tex</p>
    <p>HoleTex to HCM</p>
    <p>HoleTex to VN</p>
  </>
}
