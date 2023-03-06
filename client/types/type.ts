export interface Props {
    datas: {
      id?: number,
      image: string,
      face: string,
      name: string,
      price:number
    }[]
}

export interface Advantages{
  img:string,
  ingredient: string,
  desc: string
}

export interface Product{
  id?:number
  image: string,
  face: string,
  name: string,
  price:string
}
export interface Blog{
  image:string
  title:string
  author: string,
  category: string,
  text: string,
  link:string
}

export interface Community{
  image:string
}