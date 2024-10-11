type Params = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Params) {
  return <>
    <h1>Slug: {params.slug}</h1>
    <p>Hole Tex</p>
    <p>Hole Tex to HCM</p>
    <p>Hole Tex to VN</p>
  </>
}
