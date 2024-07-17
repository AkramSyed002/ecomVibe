export type CartItem = {
  id: number;
  title: string;
  quantity?: number;
  poster?: string;
  category?: string;
  lowPrice?:number;
  highPrice?:number;
};

export interface ContextValueType {
  inCart: CartItem[];
  setInCart: React.Dispatch<React.SetStateAction<any[]>>;
  handleKey: () => void;
  handleCart: (item: any,quantity?:number) => void;
  key: number;
  setKey: React.Dispatch<React.SetStateAction<number>>;
}
