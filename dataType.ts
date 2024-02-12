export interface Register{
  name:string,
  email:string,
  password:string

}
export interface Login{
  email:string,
  password:string
  }
export interface RegisterResponse{
  token:string,
}
export interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
  };
  export interface username {
    name:string
  }
  export interface update {
    name:string,
    password?:string

  }
