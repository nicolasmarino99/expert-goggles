export interface ICart {
    name: string;
    quantity: number;
    unit_price: number;
    total_price: number;
    type: string;
}

export interface ICartContext {
  carts: ICart[];
  setCarts: (value: ICart[]) => void;
}
